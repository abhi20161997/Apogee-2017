# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-15 10:54
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('regsoft', '0003_regsoftdetails_checkout'),
    ]

    operations = [
        migrations.AlterField(
            model_name='regsoftdetails',
            name='bill',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='regsoft.Bill'),
        ),
        migrations.AlterField(
            model_name='regsoftdetails',
            name='room',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='regsoft.Room'),
        ),
    ]