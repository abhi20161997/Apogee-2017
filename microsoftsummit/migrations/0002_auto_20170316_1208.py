# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-16 12:08
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('microsoftsummit', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='msp',
            name='msp_id',
            field=models.CharField(blank=True, max_length=30, verbose_name='Microsoft ID'),
        ),
    ]