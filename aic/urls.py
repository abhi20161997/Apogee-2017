from . import views
from django.conf.urls import url, include

urlpatterns = [
    url(r'^$', views.website, name="home"),
    url(r'^submit/$', views.problemstatement_add, name="submit"),
    url(r'^excel/$', views.aic_excel, name="submit"),
]
