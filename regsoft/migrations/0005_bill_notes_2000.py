# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-23 05:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('regsoft', '0004_auto_20170315_1054'),
    ]

    operations = [
        migrations.AddField(
            model_name='bill',
            name='notes_2000',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]
