from __future__ import unicode_literals

from django.db import models

# Create your models here.
class MessBill(models.Model):
	item = models.CharField(max_length=30)
	date = models.CharField(max_length=30)
	buyer_id = models.CharField(max_length=30)
	qty = models.IntegerField(default=0)
	bhavan = models.CharField(max_length=50, null=True, blank=True, default='')
	n2000 = models.IntegerField(default=0)
	n1000 = models.IntegerField(default=0)
	n500 = models.IntegerField(default=0)
	n100 = models.IntegerField(default=0)
	n50 = models.IntegerField(default=0)
	n20 = models.IntegerField(default=0)
	n10 = models.IntegerField(default=0)

	amount = models.IntegerField(default=0)
	balance = models.IntegerField(default=0)
	given = models.IntegerField(default=0)
	created_by = models.CharField(max_length=30)
	def __str__(self):
		return str(self.id)


class ProfShowTicket(models.Model):
	stubno = models.CharField(max_length=30, default='')
	item = models.CharField(max_length=30)
	date = models.CharField(max_length=30)
	buyer_id = models.CharField(max_length=30)
	qty = models.IntegerField(default=0)
	n2000 = models.IntegerField(default=0)
	n1000 = models.IntegerField(default=0)
	n500 = models.IntegerField(default=0)
	n100 = models.IntegerField(default=0)
	n50 = models.IntegerField(default=0)
	n20 = models.IntegerField(default=0)
	n10 = models.IntegerField(default=0)

	amount = models.IntegerField(default=0)
	balance = models.IntegerField(default=0)
	given = models.IntegerField(default=0)
	created_by = models.CharField(max_length=30)

	def __str__(self):
		return str(self.id)
