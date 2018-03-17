from django.db import models
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField
from django.core import serializers

true = True; false = False; null = None

class EventCategory(models.Model):
	name = models.CharField(max_length = 50)
	weight = models.IntegerField(help_text= 'Heavier items sink to the bottom of the menu.')
	def __unicode__(self):
		return self.name
	class Meta:
		verbose_name_plural = 'Event Categories'

class Organization(models.Model):
	user = models.OneToOneField(User)
	name = models.CharField(max_length= 200, unique=True)
	cord = models.CharField(max_length=200, blank=True)
	phone = models.CharField(max_length=12, blank=True)
	email_id = models.EmailField(unique=True, null=True, blank=True)
	def __unicode__(self):
		return self.name


class Event(models.Model):
	name = models.CharField(max_length = 100,verbose_name = 'Event Name' ,unique = True)
	category = models.ForeignKey(EventCategory)
	tags = models.CharField(max_length=1000, help_text='Enter comma separated keywords to search your events.')
	short_description = models.CharField(max_length = 400)
	register = models.BooleanField(verbose_name = 'Enable online registration')
	is_team = models.BooleanField(verbose_name = 'Team event')
	max_participants = models.IntegerField(null = True, blank = True)
	weight = models.IntegerField(null = True, blank = True)
	img = models.ImageField(blank=True, upload_to="imageuploads")
	thumb = models.ImageField(blank=True, upload_to="imageuploads")
	is_kernel = models.NullBooleanField(null=True,blank=True)
	org = models.ForeignKey(Organization, blank= True, null=True, default=None)
	is_displayed = models.BooleanField(default=True)

	def __unicode__(self):
		return self.name

	def json(self, small=False):
		fields = ('name', 'tags', 'short_description', 'register', 'is_team', 'is_kernel', 'max_participants')
		data = eval(serializers.serialize("json", [self], fields=fields))[0]["fields"]
		data["category"] = self.category.name
		data["id"] = self.id
		if small:
			try:
				data["schedule"] = self.schedule_set.order_by('round_no')[0].json(small)
			except:
				pass
			return data
		data["schedule"] = []
		data["headings"] = []
		for sch in self.schedule_set.order_by('round_no'):
			data["schedule"].append(sch.json())
		for tab in self.tab_set.order_by('heading__weight'):
			data["headings"].append(tab.json())
		return data
		
class Schedule(models.Model):
	event = models.ForeignKey(Event)
	date = models.CharField(max_length = 100,blank=True, help_text='DD/MM/YYYY')
	end_date = models.CharField(max_length = 100,blank=True, help_text='DD/MM/YYYY')
	startingtime = models.CharField(max_length = 100,blank=True, help_text='HH:MM')
	endingtime = models.CharField(max_length = 100,blank=True, help_text='HH:MM')
	venue = models.CharField(max_length = 100,blank=True)
	round_no = models.CharField(max_length=100, blank=True)

	def json(self, small=False):
		if small:
			fields = ('date', 'startingtime', 'venue')
		else:
			fields = None
		data = eval(serializers.serialize("json", [self], fields=fields))[0]["fields"]
		if "event" in data:
			del data["event"]
		return data

class Heading(models.Model):
	name = models.CharField(max_length = 60,unique = True)
	weight = models.IntegerField(help_text='Headings will be shown in ascending order of their weights.')

	def __unicode__(self):
		return self.name

	class Meta:
		verbose_name_plural = 'Tab headings'
		verbose_name = 'Tab heading'


class Tab(models.Model):
	heading = models.ForeignKey(Heading, help_text='Headings will be shown in ascending order of their weights.')
	content = RichTextField()
	event = models.ForeignKey(Event)

	def __unicode__(self):
		return 'Tab for '+ self.event.name

	def json(self):
		return {self.heading.name : self.content}



class ScheduleData(models.Model):
	event_name = models.CharField(max_length=100)
	date = models.CharField(max_length = 100,blank=True, help_text='DD/MM/YYYY')
	end_date = models.CharField(max_length = 100,blank=True, help_text='DD/MM/YYYY')
	startingtime = models.CharField(max_length = 100,blank=True, help_text='HH:MM')
	endingtime = models.CharField(max_length = 100,blank=True, help_text='HH:MM')
	venue = models.CharField(max_length = 100,blank=True)
	round_no = models.CharField(max_length=100, blank=True)
	def __str__(self):
		return self.event_name + ' - '+self.date
	def json(self):
		return eval(serializers.serialize("json", [self]))[0]["fields"]