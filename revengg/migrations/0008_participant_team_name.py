# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-15 05:55
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('revengg', '0007_auto_20170314_0856'),
    ]

    operations = [
        migrations.AddField(
            model_name='participant',
            name='team_name',
            field=models.CharField(default='', max_length=30),
            preserve_default=False,
        ),
    ]
