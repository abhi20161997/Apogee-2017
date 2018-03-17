# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-08 14:27
from __future__ import unicode_literals

import aic.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AicSubmission',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('problem_statement', models.CharField(choices=[('1', 'Schneider Electric'), ('2', 'Luminous'), ('3', 'Sterling Engineering'), ('4', 'Wooplr'), ('5', 'HarVa'), ('6', 'NextGen'), ('7', 'Bentley'), ('8', 'Techture')], max_length=500)),
                ('solution', models.FileField(default=None, upload_to=aic.models.upload_aic)),
            ],
        ),
        migrations.CreateModel(
            name='Participant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('phone', models.BigIntegerField()),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('college', models.CharField(max_length=200)),
                ('yos', models.PositiveSmallIntegerField()),
            ],
            options={
                'verbose_name': 'AIC Participant',
            },
        ),
        migrations.AddField(
            model_name='aicsubmission',
            name='leader',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='leaders', to='aic.Participant'),
        ),
        migrations.AddField(
            model_name='aicsubmission',
            name='members',
            field=models.ManyToManyField(blank='True', related_name='members', to='aic.Participant'),
        ),
    ]