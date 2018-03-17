from __future__ import unicode_literals

from django.db import models

# Create your models here.
class MSP(models.Model):
	participant = models.OneToOneField('registration.Participant', null=False)
	msp_id = models.CharField('Microsoft ID', max_length=30, blank=True)
	entered = models.BooleanField(default=False)
	def __getattribute__(self, attr):
		if attr == "barcode":
			return "MSPS%05d" % self.participant.id
		return super(MSP, self).__getattribute__(attr)
