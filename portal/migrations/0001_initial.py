# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-10-24 16:22
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import portal.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Association',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='CampusAmbassador',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('address', models.CharField(max_length=400)),
                ('year', models.CharField(max_length=20)),
                ('degree', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('phone', models.BigIntegerField()),
                ('ambassador_quality', models.TextField()),
                ('root_mail', models.BooleanField(default=False)),
                ('pcr_approved', models.NullBooleanField(default=False)),
            ],
            options={
                'verbose_name_plural': 'Campus Ambassadors',
            },
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('model', models.CharField(choices=[('Project', 'Project'), ('Paper', 'Paper'), ('Both', 'Both')], max_length=8)),
            ],
            options={
                'verbose_name_plural': 'Categories',
            },
        ),
        migrations.CreateModel(
            name='College',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Paper',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
                ('stub', models.CharField(max_length=8, unique=True)),
                ('address', models.TextField()),
                ('abstract', models.FileField(default=None, upload_to=portal.models.upload_paper_abstract)),
                ('status', models.CharField(choices=[('1', 'Round 1'), ('2', 'Round 2'), ('3', 'Round 3')], default='1', max_length=2)),
                ('paper', models.FileField(default=None, null=True, upload_to=portal.models.upload_paper)),
            ],
        ),
        migrations.CreateModel(
            name='Participant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('phone', models.BigIntegerField()),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portal.College')),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
                ('abstract', models.FileField(default=None, upload_to=portal.models.upload_project)),
                ('stub', models.CharField(max_length=8, unique=True)),
                ('status', models.CharField(choices=[('1', 'Round 1'), ('2', 'Round 2'), ('3', 'Round 3')], default='1', max_length=2)),
                ('assoc', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='portal.Association')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portal.Category')),
                ('leader', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='leaders', to='portal.Participant')),
                ('members', models.ManyToManyField(related_name='members', to='portal.Participant')),
            ],
        ),
        migrations.AddField(
            model_name='paper',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='authors', to='portal.Participant'),
        ),
        migrations.AddField(
            model_name='paper',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portal.Category'),
        ),
        migrations.AddField(
            model_name='paper',
            name='co_author',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='co_authors', to='portal.Participant'),
        ),
        migrations.AddField(
            model_name='campusambassador',
            name='college',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portal.College'),
        ),
    ]