
from django.conf.urls import url, include
from django.contrib.admin.views.decorators import staff_member_required
from .views import *

urlpatterns = [
	url(r'^$', staff_member_required(MSPList.as_view()), name='home'),
	url(r'^passed/$', staff_member_required(MSPList.as_view()), name='passed', kwargs={'passed':1}),
	url(r'^excel/$', MSPExcel, name='excel'),
]
