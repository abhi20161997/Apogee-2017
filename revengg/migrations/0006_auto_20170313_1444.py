# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-13 14:44
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('revengg', '0005_auto_20170313_1441'),
    ]

    operations = [
        migrations.AlterField(
            model_name='option',
            name='question',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='revengg.Question'),
        ),
        migrations.AlterField(
            model_name='question',
            name='answer',
            field=models.OneToOneField(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='answer', to='revengg.Option'),
        ),
    ]