# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-18 12:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('microsoftsummit', '0002_auto_20170316_1208'),
    ]

    operations = [
        migrations.AddField(
            model_name='msp',
            name='entered',
            field=models.BooleanField(default=False),
        ),
    ]
