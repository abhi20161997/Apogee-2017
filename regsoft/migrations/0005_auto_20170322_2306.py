# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2017-03-22 23:06
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('regsoft', '0004_auto_20170315_1054'),
    ]

    operations = [
        migrations.RenameField(
            model_name='bill',
            old_name='notes_1000',
            new_name='notes_2000',
        ),
    ]
