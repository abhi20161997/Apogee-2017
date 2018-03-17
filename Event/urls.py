from django.conf.urls import url, include
from django.contrib import admin
from .views import summary, schedule

urlpatterns = [
	url(r'^$', summary),
   	url(r'^(?P<pk>\d+)', summary),
   	url(r'^schedule/', schedule),
]
