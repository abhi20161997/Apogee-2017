from portal.views import *
from django.conf.urls import url, include


urlpatterns = [
    url(r'^$', home),
    url(r'^papers/instructions/$', papersInstructions),
    url(r'^papers/form/$', papersForm),
    url(r'^papers/status/$', papersStatus),
    url(r'^papers/edit/$', edit_paper),
    url(r'^projects/instructions/$', projectsInstructions),
    url(r'^projects/status/$', projectsStatus),
    url(r'^projects/form/$', projectsForm),
    url(r'^projects/edit/$', edit_project),
    url(r'^check/form/$', checkForm),
    url(r'^check/status/$', checkStatus),
    # url(r'^initregadd/$', views.add_initial_registration),
    url(r'^updates/$', renderUpdates),
    url(r'^ca/$', campusAmbassadorMain),
    url(r'^ca/status/$', campusAmbassadorStatus),
    url(r'^ca/excel/$', ca_excel),
]
