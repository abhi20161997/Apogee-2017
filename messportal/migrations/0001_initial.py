# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-18 12:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MessBill',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item', models.CharField(max_length=30)),
                ('date', models.CharField(max_length=30)),
                ('buyer_id', models.CharField(max_length=30)),
                ('qty', models.IntegerField(default=0)),
                ('bhavan', models.CharField(blank=True, default='', max_length=50, null=True)),
                ('n1000', models.IntegerField(default=0)),
                ('n500', models.IntegerField(default=0)),
                ('n100', models.IntegerField(default=0)),
                ('n50', models.IntegerField(default=0)),
                ('n20', models.IntegerField(default=0)),
                ('n10', models.IntegerField(default=0)),
                ('amount', models.IntegerField(default=0)),
                ('balance', models.IntegerField(default=0)),
                ('given', models.IntegerField(default=0)),
                ('created_by', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='ProfShowTicket',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stubno', models.CharField(default='', max_length=30)),
                ('item', models.CharField(max_length=30)),
                ('date', models.CharField(max_length=30)),
                ('buyer_id', models.CharField(max_length=30)),
                ('qty', models.IntegerField(default=0)),
                ('n1000', models.IntegerField(default=0)),
                ('n500', models.IntegerField(default=0)),
                ('n100', models.IntegerField(default=0)),
                ('n50', models.IntegerField(default=0)),
                ('n20', models.IntegerField(default=0)),
                ('n10', models.IntegerField(default=0)),
                ('amount', models.IntegerField(default=0)),
                ('balance', models.IntegerField(default=0)),
                ('given', models.IntegerField(default=0)),
                ('created_by', models.CharField(max_length=30)),
            ],
        ),
    ]
