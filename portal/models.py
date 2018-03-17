from __future__ import unicode_literals
from django.template.defaultfilters import slugify
from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.

## PROJECT ##

def upload_project(self, filename):
	slugified_category = slugify(self.category)
	path = 'projects/%s/%s' % (slugified_category, filename)
	return path

class Project(models.Model):
	name = models.CharField(max_length=500)
	category = models.ForeignKey('Category')
	assoc = models.ForeignKey('Association', null=True)
	leader = models.ForeignKey('Participant', related_name='leaders')
	members = models.ManyToManyField('Participant', related_name='members')
	abstract = models.FileField(default=None, upload_to=upload_project)
	stub = models.CharField(max_length=8, unique=True)
	STATUSES = (
		('1', 'Round 1'),
		('2', 'Round 2'),
		('3', 'Round 3'),
	)
	status = models.CharField(max_length=2, choices=STATUSES, default="1")

	def __unicode__(self):
		return self.name

## PAPER ##

def upload_paper_abstract(self, filename):
	slugified_category = slugify(self.category)
	path = 'papers/%s/%s' % (slugified_category, filename)
	return path

def upload_paper(self, filename):
	slugified_category = slugify(self.category)
	path = 'papers-final/%s/%s' % (slugified_category, filename)
	return path

class Paper(models.Model):
	name = models.CharField(max_length=500)
	category = models.ForeignKey('Category')
	stub = models.CharField(max_length=8, unique=True)
	# college = models.ForeignKey('College')
	address = models.TextField()
	author = models.ForeignKey('Participant', related_name='authors')
	co_author = models.ForeignKey('Participant', related_name='co_authors', blank=True, null=True)
	abstract = models.FileField(default=None, upload_to=upload_paper_abstract)
	STATUSES = (
		('1', 'Round 1'),
		('2', 'Round 2'),
		('3', 'Round 3'),
	)
	status = models.CharField(max_length=2, choices=STATUSES, default="1")
	paper = models.FileField(default=None, null=True, upload_to=upload_paper)

	def __unicode__(self):
		return self.name

class Category(models.Model):
	MODELS = (
		('Project', 'Project'),
		('Paper', 'Paper'),
		('Both', 'Both'),
	)
	name = models.CharField(max_length=200)
	model = models.CharField(max_length=8, choices=MODELS)

	class Meta:
		verbose_name_plural = 'Categories'

	def __unicode__(self):
		return self.name


class Association(models.Model):
	name = models.CharField(max_length=200)

	def __unicode__(self):
		return self.name


class Participant(models.Model):
	name = models.CharField(max_length=200)
	phone = models.BigIntegerField()
	email = models.EmailField(unique=True)
	college = models.ForeignKey('College')

	def __unicode__(self):
		return self.name
	class Meta:
		verbose_name = 'Portal Participant'


class College(models.Model):
	name = models.CharField(max_length=200)

	def __unicode__(self):
		return self.name


class CampusAmbassador(models.Model):
	name = models.CharField(max_length=200)
	address = models.CharField(max_length=400)
	college = models.ForeignKey('College')
	year = models.CharField(max_length=20)
	degree = models.CharField(max_length=200)
	email = models.EmailField(unique=True)
	phone = models.BigIntegerField()
	ambassador_quality = models.TextField()
	root_mail = models.BooleanField(default=False)
	pcr_approved = models.NullBooleanField(default=False)

	class Meta:
		verbose_name_plural = 'Campus Ambassadors'

	def __unicode__(self):
		return self.name


class Update(models.Model):
	position = models.IntegerField(help_text='The Updates will be shown in ascending order of their position value.')
	message = RichTextField()
	title = models.CharField(max_length=200, default='', blank=False, null=False)
	def __str__(self):
		return str(self.title)
		