# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-12-01 11:49
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aarohan', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='school',
            name='name',
            field=models.CharField(default='', max_length=100),
        ),
    ]
