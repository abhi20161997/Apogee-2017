from __future__ import unicode_literals

from django.db import models

# Create your models here.
class IntroReg(models.Model):
	name = models.CharField(max_length=100)
	email = models.EmailField()
	phone = models.CharField(max_length=15)
	about = models.CharField(max_length=200, default="")
	college = models.CharField(max_length=200, default="")
	def __unicode__(self):
		return self.name
