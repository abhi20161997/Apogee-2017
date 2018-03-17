from registration.models import Participant, College, verificationEmail
from intro.models import IntroReg
from registration.views import generate_password

from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.template.loader import render_to_string, get_template
from django.core.mail.backends.smtp import EmailBackend
from django.core.mail import EmailMessage, EmailMultiAlternatives

from apogee17.settings import *
from aarohan.models import *
from Event.models import Event

def MassMail(email_list, attachments):
	import csv, time
	error_log = open('mail_error.log', 'w')
	message = render_to_string('portal/mail.html')
	email_list = list(set(email_list))
	while len(email_list) != 0:
		email = EmailMultiAlternatives(subject="APOGEE Workshops | APOGEE 2017", body="...", to=["noreply@bits-apogee.org"], bcc=email_list[:45])
		email.attach_alternative(message, "text/html")
		for att in attachments:
			email.attach_file(att)
		try:
			email.send()
		except:
			error_log.write(str(email_list[:45]))
		email_list = email_list[45:]
		time.sleep(1)

from portal.models import Participant as PP
def portPortalParticipants():
	post_save.disconnect(sender=Participant, receiver=verificationEmail)
	for pp in PP.objects.all():
		try:
			Participant.objects.get(email=pp.email)
		except:
			try:
				college = College.objects.get(name=pp.college.name)
			except:
				college = College.objects.create(name=pp.college.name, is_displayed=False)
			part = Participant(name=pp.name, email=pp.email, phone=pp.phone, college=college, gender='N', pcr_approval=True)
			part.save()