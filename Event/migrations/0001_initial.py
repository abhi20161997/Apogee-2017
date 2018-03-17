# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-01-13 17:25
from __future__ import unicode_literals

import ckeditor.fields
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name=b'Event Name')),
                ('tags', models.CharField(help_text=b'Enter comma separated keywords to search your events.', max_length=1000)),
                ('short_description', models.CharField(max_length=400)),
                ('register', models.BooleanField(verbose_name=b'Enable online registration')),
                ('is_team', models.BooleanField(verbose_name=b'Team event')),
                ('max_participants', models.IntegerField(blank=True, null=True)),
                ('weight', models.IntegerField(blank=True, null=True)),
                ('img', models.ImageField(blank=True, upload_to=b'imageuploads')),
                ('thumb', models.ImageField(blank=True, upload_to=b'imageuploads')),
                ('is_kernel', models.NullBooleanField()),
                ('is_displayed', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='EventCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('weight', models.IntegerField(help_text=b'Heavier items sink to the bottom of the menu.')),
            ],
            options={
                'verbose_name_plural': 'Event Categories',
            },
        ),
        migrations.CreateModel(
            name='Heading',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=60, unique=True)),
                ('weight', models.IntegerField()),
            ],
            options={
                'verbose_name': 'Tab heading',
                'verbose_name_plural': 'Tab headings',
            },
        ),
        migrations.CreateModel(
            name='Organization',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, unique=True)),
                ('cord', models.CharField(blank=True, max_length=200)),
                ('phone', models.CharField(blank=True, max_length=12)),
                ('email_id', models.EmailField(blank=True, max_length=254, null=True, unique=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Schedule',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.CharField(blank=True, max_length=100)),
                ('end_date', models.CharField(blank=True, max_length=100)),
                ('startingtime', models.CharField(blank=True, max_length=100)),
                ('endingtime', models.CharField(blank=True, max_length=100)),
                ('venue', models.CharField(blank=True, max_length=100)),
                ('round_no', models.CharField(blank=True, max_length=100)),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Event.Event')),
            ],
        ),
        migrations.CreateModel(
            name='Tab',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', ckeditor.fields.RichTextField()),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Event.Event')),
                ('heading', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Event.Heading')),
            ],
            options={
                'verbose_name': 'Tab',
                'verbose_name_plural': 'Tabs',
            },
        ),
        migrations.AddField(
            model_name='event',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Event.EventCategory'),
        ),
        migrations.AddField(
            model_name='event',
            name='org',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='Event.Organization'),
        ),
    ]