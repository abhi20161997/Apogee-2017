from . import views
from django.conf.urls import url, include

urlpatterns = [
    url(r'^$', views.website),
    url(r'^submit/$', views.problemstatement_add),
    url(r'^excel/$', views.tichallenge_excel),
    url(r'^viewSub/(?P<pk>\d+)/$', views.viewSubmission, name='viewSub'),
    ]
