# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2017-03-22 23:54
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('messportal', '0003_merge_20170322_2351'),
    ]

    operations = [
        migrations.AddField(
            model_name='messbill',
            name='n1000',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='profshowticket',
            name='n1000',
            field=models.IntegerField(default=0),
        ),
    ]