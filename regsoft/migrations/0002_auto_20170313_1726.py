# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-13 17:26
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('regsoft', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bill',
            name='draft_amount',
            field=models.CharField(blank=True, default=b'', max_length=100),
        ),
        migrations.AlterField(
            model_name='bill',
            name='draft_number',
            field=models.CharField(blank=True, default=b'', max_length=100),
        ),
    ]
