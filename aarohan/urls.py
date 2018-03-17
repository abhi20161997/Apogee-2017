from aarohan.views import *
from django.conf.urls import url, include
urlpatterns = [
    url(r'^$', index),
	url(r'^register/$', registerschool),
	url(r'^result/$', result),
]