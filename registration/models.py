from __future__ import unicode_literals

from django.core.mail.backends.smtp import EmailBackend
from django.core.mail import EmailMessage, EmailMultiAlternatives
from django.core import serializers
from django.template.loader import get_template
from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.urls import reverse_lazy
from django.db import models

from apogee17.settings import *
# Create your models here.
true = True; false = False; null = None

"""
NEXT TIME CREATE PROXY MODELS FOR PARTICIPANTS AND BITSIANS WITH A COMMON SUPER MODEL WITH DIFFERENT MODEL MANAGERS.
Proxy models - https://docs.djangoproject.com/en/1.10/topics/db/models/#proxy-models
Custom Model Manager - https://docs.djangoproject.com/en/1.10/topics/db/managers/#custom-managers-and-model-inheritance
"""

class ParticipantManager(models.Manager):
	def get_queryset(self):
		return super(ParticipantManager, self).get_queryset().filter(is_bitsian=False)
	def get(self, *args, **kwargs):
		return super(ParticipantManager, self).get_queryset().get(**kwargs)

class BITSianManager(models.Manager):
	def get_queryset(self):
		return super(BITSianManager, self).get_queryset().filter(is_bitsian=True)

class Participant(models.Model):
	GENDERS = (
		('M', 'Male'),
		('F', 'Female'),
		('N', 'N/A')
		# ('O', 'Other'),
	)
	is_bitsian = models.BooleanField(default=False)
	user = models.OneToOneField(User, null=True, blank=True, default=None)
	uniqueid = models.CharField(max_length=8, null=True, blank=True, unique=True, default=None)
	name = models.CharField(max_length=200)
	gender = models.CharField(max_length=1, choices=GENDERS)
	college = models.ForeignKey('College')
	city = models.CharField(max_length=20, blank=True)
	phone = models.BigIntegerField(null=True)
	alternate_phone = models.BigIntegerField(null=True, blank=True, default=None)
	email = models.EmailField(unique=True)
	email_verified = models.BooleanField(default=False)
	email_token = models.CharField(max_length=32, null=True, blank=True, default=None)
	social_link = models.CharField(max_length=300, null=True, blank=True) # NOT USED REMOVE NEXT TIME
	pcr_approval = models.BooleanField(default=False)
	events = models.ManyToManyField('Event.Event', blank=True)
	fee_paid = models.BooleanField(default=False)
	timestamp = models.DateTimeField(auto_now_add=True)

	bank_ifsc = models.CharField(max_length=11, blank=True, verbose_name='IFSC Code')
	bank_name = models.CharField(max_length=200, blank=True)
	bank_account_no = models.CharField(max_length=20, blank=True, verbose_name='Bank Account No.')
	address = models.TextField(max_length=1000, blank=True)

	objects = ParticipantManager()
	bitsians = BITSianManager()
	class Meta:
		verbose_name_plural = 'Participants'
	def __unicode__(self):
		return str(self.name)
	def __getattribute__(self, attr):
		if attr == "barcode":
			if self.is_bitsian:
				return self.uniqueid
			return "BITS%05d" % self.id
		return super(Participant, self).__getattribute__(attr)
	def get_absolute_url(self):
		return reverse_lazy("main:main")
	def delete(self, using=None):
		if self.user:
			self.user.delete(using)
		return super(Participant, self).delete(using)
	def json(self):
		fields = ('name', 'email', 'phone', 'bank_ifsc', 'bank_name', 'bank_account_no', 'address', 'pcr_approval', 'fee_paid')
		data = eval(serializers.serialize("json", [self], fields=fields))[0]["fields"]
		data["college"] = self.college.name
		data["events"] = []
		for event in self.events.all():
			try:
				team = self.team_set.get(event=event)
			except:
				team = self.leader_team.get(event=event)
			obj = {"event_name" : event.name,  "team_name" : team.name, "team_code" : team.code}
			data["events"].append(obj)
		return data

def email_generate_token(member):
	import uuid
	token = uuid.uuid4().hex
	registered_tokens = [participant.email_token for participant in Participant.objects.all()]
	while token in registered_tokens:
		token = uuid.uuid4().hex
	member.email_token = token
	member.save()
	token_url = 'http://bits-apogee.org/2017/api/verify/' + token + '/'
	return token_url

@receiver(post_save, sender=Participant)
def verificationEmail(sender, instance, created, **kwargs):
	if created:
		token_url = email_generate_token(instance)
		html = get_template('registration/verification_email.html').render(context={"name" : instance.name, "verify_url" : token_url})
		email = EmailMultiAlternatives(subject="Apogee 2017 - Email Verification", body='---', to=[instance.email])
		email.attach_alternative(html, "text/html")
		email.send()

class College(models.Model):
	name = models.CharField(max_length=200, primary_key=True)
	is_displayed = models.BooleanField(default=False)
	def __unicode__(self):
		return str(self.name.encode('ascii', 'ignore'))
