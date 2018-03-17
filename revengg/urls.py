from revengg import views
from django.conf.urls import url, include
from django.views.generic import TemplateView

urlpatterns = [
	url(r'^$', views.home),
	url(r'^create/$', views.create),
	url(r'^submit/$', views.submit),
	url(r'^questions/$', views.questions),
	url(r'^excel/$', views.revengg_excel),
]
