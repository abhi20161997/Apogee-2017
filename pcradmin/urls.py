from django.contrib.admin.views.decorators import staff_member_required
from django.views.generic import RedirectView, TemplateView
from django.conf.urls import url, include
from django.urls import reverse_lazy

import barcode
from .views import *
from . import excels
# from registration.views import *
from cms import utilities
# from pcradmin.apogeepcr import *
urlpatterns = [
	url(r'^$', RedirectView.as_view(url=reverse_lazy('pcradmin:dashboard')), name="home"),
	url(r'^dashboard/$', staff_member_required(TemplateView.as_view(template_name='pcradmin/dashboard.html')), name="dashboard"),
	url(r'^logout/$', pcr_logout, name='logout'),

	url(r'^introreglist/$', IntroRegList.as_view(), name='introreglist'),
	
	url(r'^ambassadors/$', AmbassadorList.as_view(), name='ambassadors'),
	url(r'^aprroved_ambassadors/$', AmbassadorList.as_view(), name='approved ambassadors', kwargs={'approved':True}),
	url(r'^mail_selected/$', mail_selected_amb, name='mail selected ambassadors'),
	url(r'^mail_approved/$', mail_approved, name='mail approved ambassadors'),
	url(r'^ambassadors/excel/$', excels.ambassador_excel, name='ambassadors excel'),
	url(r'^approved_ambassadors/excel/$', excels.ambassador_excel, name='approved ambassadors excel', kwargs={'pcr_approved':True}),
	
	url(r'^participants/$', ParticipantList.as_view(), name='participants'),
	url(r'^participants/(?P<pk>\d+)/$', ParticipantDetail.as_view(), name='participant details'),
	url(r'^participants/excel/$', excels.participant_excel, name='participants excel'),
	url(r'^participants/mail/(?P<filter>\w+)/$', ParticipantMail.as_view(), name='participants mail'),

	url(r'^colleges/$', CollegeList.as_view(), name='colleges'),
	url(r'^colleges/(?P<college_pk>.*)/$', ParticipantList.as_view(), name='college parts'),
	
	url(r'^stats/$', eventwise_stats, name='stats'),
	url(r'^stats/(?P<event_pk>\d+)/$', ParticipantList.as_view()),
	url(r'^barcode/$', barcode.barcode),
	url(r'^confirm/$', PCRConfirmDoc.as_view()),
	##############################################################################
	# url(r'^participantxlsx/$', utilities.participant_stats_xlsx),

	# url(r'^vpdf/(?P<gl_id>\d+)/$', view_pdf, name='view and generate pdf'),
	# url(r'^dhiti_xlsx/$', excels.dhiti_xlsx),
	# url(r'^reng_xlsx/$', excels.RENG_xlsx),
	# url(r'^innover_xlsx/$', excels.innover_xlsx),
	# url(r'^sendconfirmationmails/$', send_mail),
	# url(r'^sendmails/$', send_mail_full),

	url(r'^total_stats/$', total_stats, name='stats'),
	# url(r'^ambassadorxlsx/$', utilities.ambassador_stats_xlsx),

	]
