# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-13 14:39
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('revengg', '0002_auto_20170301_2211'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='category',
            field=models.CharField(choices=[(b'Aptitude', b'Aptitude'), (b'Mechanical', b'Mechanical'), (b'AutoMobile', b'AutoMobile')], default=b'', max_length=30),
        ),
    ]
