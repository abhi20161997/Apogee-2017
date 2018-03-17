from django.db import models
from ckeditor.fields import RichTextField
# Create your models here.
class Participant(models.Model):
    name = models.CharField(max_length=200)
    phone = models.BigIntegerField()
    email = models.EmailField(unique=True)
    score = models.IntegerField(default=0)
    time = models.CharField(max_length=20)
    team_name = models.CharField(max_length=30)
    def __str__(self):
        return self.name

class Option(models.Model):
	number = models.PositiveSmallIntegerField()
	question = models.ForeignKey('Question', null=True, blank=True, default=None)
	content = RichTextField()
	def __str__(self):
		return 'Q ' + str(self.question.number) +' Opt ' + str(self.number)

class Question(models.Model):
    CATEGORIES = (('Aptitude', 'Aptitude'), ('Mechanical', 'Mechanical'), ('Automobile', 'Automobile'))
    number = models.PositiveSmallIntegerField(unique=True)
    statement = RichTextField()
    category = models.CharField(max_length=30, default='', choices=CATEGORIES)
    answer = models.OneToOneField(Option, related_name='answer', null=True, blank=True, default=None)
    def __str__(self):
        return 'Q ' + str(self.number)
