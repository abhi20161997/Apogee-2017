# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-11-23 15:51
from __future__ import unicode_literals

import aarohan.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='School',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('students', models.FileField(default=None, upload_to=aarohan.models.upload_excel)),
            ],
        ),
    ]