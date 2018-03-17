from django.db import models
from Event.models import *
from registration.models import *

class RegsoftDetails(models.Model):
	participant = models.OneToOneField(Participant, null=False)
	firewallz = models.BooleanField('Passed Firewallz', default=False)
	controlz = models.BooleanField('Passed Controlz', default=False)
	recnacc = models.BooleanField('Passed RecNAcc', default=False)
	checkout = models.BooleanField('Checked Out', default=False)
	amount_deducted = models.IntegerField(default=0)
	bill = models.ForeignKey('Bill', default=None, null=True, blank=True)
	room = models.ForeignKey('Room', default=None, null=True, blank=True)
	group_code = models.CharField(max_length=10, default='')
	def __getattribute__(self, attr):
		if attr == 'leader':
			return Participant.objects.filter(regsoftdetails=self).order_by('id')[0]
		if attr == 'members':
			return Participant.objects.filter(regsoftdetails__group_code=self.group_code).order_by('id')
		if attr == 'males':
			return Participant.objects.filter(gender__istartswith='M', regsoftdetails__group_code=self.group_code).order_by('id')
		if attr == 'females':
			return Participant.objects.filter(gender__istartswith='F', regsoftdetails__group_code=self.group_code).order_by('id')
		return super(RegsoftDetails, self).__getattribute__(attr)
	def __unicode__(self):
		return str(self.participant.name)

class Bhavan(models.Model):
	name=models.CharField(max_length=50)
	def __unicode__(self):
		return self.name

class Room(models.Model):
	bhavan = models.ForeignKey('Bhavan')
	room = models.CharField(max_length=50)
	vacancy = models.IntegerField()
	a = models.IntegerField(default=0, null=True)
	b = models.IntegerField(default=0, null=True)
	c = models.IntegerField(default=0, null=True)
	d = models.IntegerField(default=0, null=True)
	e = models.IntegerField(default=0, null=True)
	f = models.IntegerField(default=0, null=True)
	def __unicode__(self):
		return str(self.bhavan.name+' - '+self.room)
		
class Bill(models.Model):
	amount = models.IntegerField(default=0)
	given = models.IntegerField(default =0)
	balance = models.IntegerField(default=0)

	notes_2000 = models.IntegerField(null=True, blank=True, default=0)
	notes_1000 = models.IntegerField(null=True, blank=True, default=0)
	notes_500 = models.IntegerField(null=True, blank=True, default=0)
	notes_100 = models.IntegerField(null=True, blank=True, default=0)
	notes_50 = models.IntegerField(null=True, blank=True, default=0)
	notes_20 = models.IntegerField(null=True, blank=True, default=0)
	notes_10 = models.IntegerField(null=True, blank=True, default=0)

	draft_number = models.CharField(max_length=100, default='', blank=True)
	draft_amount = models.CharField(max_length=100, default='', blank=True)
	def __unicode__(self):
		return str(self.id)
	def __getattribute__(self, attr):
		if attr == "leader":
			try:
				return self.regsoftdetails_set.all()[0].leader
			except:
				return None
		if attr == "payees":
			return Participant.objects.filter(regsoftdetails__bill=self)
		if attr == "males":
			return Participant.objects.filter(regsoftdetails__bill=self, gender__istartswith='M')
		if attr == "females":
			return Participant.objects.filter(regsoftdetails__bill=self, gender__istartswith='F')
		return super(Bill, self).__getattribute__(attr)
