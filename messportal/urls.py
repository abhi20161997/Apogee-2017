from django.conf.urls import url, include
from .views import *
urlpatterns = [
	url(r'^$', MessView.as_view(), name='home'),
	url(r'^excel/$', bills_excel, name='excel'),
	url(r'^bills/$', bill_view, name='bills'),
	url(r'^print/(?P<billid>\d+)/$', bill_print, name='printbill'),
	url(r'^delete/(?P<billid>\d+)/$', bill_delete, name='deletebill'),
	url(r'^profshow/$', ProfShow.as_view(), name='profshow'),
	url(r'^profshow/bills/$', profshow_bill_view, name='profshow bill list'),
	url(r'^profshow/(?P<billid>\d+)/$', profshow_bill_print, name='profshow printbill'),
	url(r'^profshow/delete/(?P<billid>\d+)/$', profshow_bill_delete, name='profshow deletebill'),
	# url(r'^shopbills/', shopbills),
]
