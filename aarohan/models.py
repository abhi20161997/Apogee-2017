from __future__ import unicode_literals

from django.db import models

# Create your models here.
def upload_excel(self, filename):
	path = 'aarohan/%s' % (filename)
	return path

class School(models.Model):
	students = models.FileField(default=None, upload_to=upload_excel)
	name = models.CharField(default="",max_length=100)
	def __unicode__(self):
		return self.name

class Result(models.Model):
	name = models.CharField(max_length=50)
	roll_no = models.CharField(max_length=15, unique=True)
	standard = models.PositiveSmallIntegerField()
	school = models.CharField(max_length=50, blank=True)
	city = models.CharField(max_length=15, blank=True)
	total_marks = models.SmallIntegerField()
	air_rank = models.PositiveSmallIntegerField()
	school_rank = models.PositiveSmallIntegerField()