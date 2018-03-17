from __future__ import unicode_literals

from django.db import models
from django.template.defaultfilters import slugify
# Create your models here.

def upload_aic(self, filename):
    slugified_category = slugify(self.problem_statement)
    path = 'aic-submission/%s/%s' % (slugified_category, filename)
    return path

class AicSubmission(models.Model):
    problem_statement = models.CharField(max_length=500)
    leader = models.ForeignKey('Participant', related_name='leaders')
    members = models.ManyToManyField('Participant', related_name='members', blank='True')
    solution = models.FileField(default=None, upload_to=upload_aic)
    def __str__(self):
        return str(self.id)


class Participant(models.Model):
	name = models.CharField(max_length=200)
	phone = models.BigIntegerField()
	email = models.EmailField(unique=True)
	college = models.CharField(max_length=200)
	yos = models.PositiveSmallIntegerField()
	class Meta:
		verbose_name = 'AIC Participant'
	def __str__(self):
		return self.name