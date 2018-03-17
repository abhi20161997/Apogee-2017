from django.conf.urls import url
from django.views.generic import TemplateView
from regsoft.views import *

urlpatterns = [
	url(r'^$', Home.as_view(), name='home'),
	
	############ FIREWALLZ #############
	url(r'^firewallz/$', TemplateView.as_view(template_name='regsoft/fire_dashboard.html'), name='firewallz dashboard'),
	url(r'^firewallz/barcodelist/$', BarCodeList.as_view(), name='barcodelist'),
	url(r'^firewallz/add/$', FirewallzAdd.as_view(), name='firewallz add'),
	url(r'^firewallz/edit/(?P<pk>\d+)/$', FirewallzEdit.as_view(), name='firewallz edit'),

	url(r'^groupcodes/$', GroupList.as_view(), name='groupcodelist'),
	url(r'^groupcodes/(?P<pk>\d+)/$', GroupDetail.as_view(), name='group details'),

	############ CONTROLZ #############
	url(r'^search/$', CommonSearch.as_view(),  name='common_search'),

	url(r'^controls/home/$', ControlsHome.as_view(), name='controls home'),
	url(r'^controls/home/(?P<pk>\d+)/$', ControlsDashboard.as_view(), name='controls group payment'),
	url(r'^controls/edit/(?P<pk>\d+)/$', ControlsEdit.as_view(), name='controls edit'),
	url(r'^controls/stats/$', ControlsStats.as_view(), name='controls stats'),
	
	url(r'^controls/bill_details/(?P<pk>\d+)/$', controlsBillDetails, name='controls bill details'),
	url(r'^controls/bill_print/$', controlsBillPrint, name='controls bill print'),
	url(r'^controls/bill_delete/$', BillDelete.as_view(), name='controls bill delete'),
	url(r'^controls/bill_view/(?P<pk>\d+)/$', BillView.as_view(), name='controls bill view'),
	
	#-----------------------------NOT DONE-----------------------------#
	url(r'^group_notify/$', recnacc_notify),

	############ RECNACC #############
	url(r'^recnacc/home/$', RecnaccHome.as_view(), name='recnacc home'),
	url(r'^recnacc/home/(?P<pk>\d+)/$', RecnaccDashboard.as_view(), name='recnacc dashboard'),
	# url(r'^recnacc/allot/(?P<pk>\d+)/$', RecnaccAllotRoom.as_view(), name='recacc allot rooms'),
	url(r'^recnacc/deallocate/(?P<pk>\d+)/$', RecnaccDeallocate.as_view(), name='recnacc deallocate'),
	url(r'^recnacc/checkout/(?P<pk>\d+)/$', RecnaccCheckout.as_view(), name='recnacc checkout'),
	url(r'^recnacc/checkoutlist/(?P<pk>\d+)/$', RecnaccCheckedOutList.as_view(), name='recnacc checkout list'),
	url(r'^recnacc/room_list/$', RecnaccRoomList.as_view(), name='recnacc room list'),
	url(r'^recnacc/room_details/(?P<pk>\d+)/$', RecnaccRoomDetails.as_view(), name='recnacc room details'),

]
