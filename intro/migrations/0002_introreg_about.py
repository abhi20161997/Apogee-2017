# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-11-23 23:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('intro', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='introreg',
            name='about',
            field=models.CharField(default='', max_length=200),
        ),
    ]
