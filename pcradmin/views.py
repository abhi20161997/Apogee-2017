# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import get_object_or_404, render_to_response, redirect
from django.shortcuts import render

from django.contrib.auth.decorators import login_required, user_passes_test
from django.contrib.admin.views.decorators import staff_member_required
from django.contrib.auth import login, logout
from django.contrib.auth.models import User

from django.template.loader import get_template
from django.core.mail.backends.smtp import EmailBackend
from django.core.mail import send_mail, get_connection, EmailMessage, EmailMultiAlternatives


from django.views.generic import ListView, DetailView, UpdateView, TemplateView

from registration.models import *
from intro.models import *
from portal.models import CampusAmbassador
from Event.models import *
from apogee17.settings import *

import difflib

def pcr_logout(request):
	logout(request)
	return redirect('pcradmin:dashboard')

class IntroRegList(ListView):
	model = IntroReg
	paginate_by=50
	template_name='generic/introreg_list.html'

class ParticipantDetail(UpdateView):
	model = Participant
	success_url = '.'
	template_name='generic/participant_edit.html'
	fields = ['name', 'email', 'phone', 'college', 'gender', 'address', 
				'events', 'bank_name', 'bank_ifsc', 'bank_account_no']

class PCRConfirmDoc(TemplateView):
	template_name = "pcradmin/pcrconfirmmail.html"
	def get_context_data(self, *args, **kwargs):
		context = super(PCRConfirmDoc, self).get_context_data(*args, **kwargs)
		if self.request.user.is_authenticated() and hasattr(self.request.user, 'participant'):
			part = self.request.user.participant
			context["name"] = part.name
			context["code"] = part.barcode
		return context
	def get(self, request, *args, **kwargs):
		if request.user.is_authenticated() and hasattr(request.user, 'participant'):
			return super(PCRConfirmDoc, self).get(request, *args, **kwargs)
		return redirect('main:main')

class ParticipantList(ListView):
	model = Participant
	template_name='generic/participant_list.html'
	paginate_by=45
	def get_queryset(self):
		qs = super(ParticipantList, self).get_queryset().filter(msp=None).order_by('pcr_approval')
		if self.kwargs.get('college_pk', False):
			return qs.filter(college__pk=self.kwargs.get('college_pk'))
		if self.kwargs.get('event_pk', False):
			return Event.objects.get(pk=self.kwargs.get('event_pk')).participant_set.filter(msp=None)
		return qs
	def get_context_data(self, *args, **kwargs):
		context = super(ParticipantList, self).get_context_data(*args, **kwargs)
		if self.kwargs.get('college_pk', False):
			context['title'] = 'Participants of ' + str(self.kwargs.get('college_pk', False))
		if self.kwargs.get('event_pk', False):
			event_pk = self.kwargs.get('event_pk', False)
			context['title'] = 'Participants of ' + str(Event.objects.get(pk=event_pk).name)
		return context
	def post(self, request, *args, **kwargs):
		part_ids = request.POST.getlist('part_list')
		if not part_ids:
			return self.get(request, *args, **kwargs)
		if request.POST.get('approval', False):
			val = int(request.POST.get('approval', 0))
			if val == 2:
				html = get_template("pcradmin/pcrconfirmmail_static.html").render({})
				email = EmailMultiAlternatives(subject="APOGEE 2017 Confirmation", body='---', to=["noreply@bits-apogee.org"], bcc=[part.email for part in Participant.objects.filter(id__in=part_ids, pcr_approval=False, msp=None)])
				email.attach_alternative(html, "text/html")
				email.attach_file(BASE_DIR+'/data/RulesBooklet2017.pdf')
				email.attach_file(BASE_DIR+'/data/StartupWeekendRuleBooklet.pdf')
				email.attach_file(BASE_DIR+'/data/Documentation_Startup_Weekend_BITS_Pilani.pdf')
				email.send()
				Participant.objects.filter(id__in=part_ids, pcr_approval=False).update(pcr_approval=True)
				return render(request, 'pcradmin/showmailsent.html', {"title" : "Mail Sent to Participant"})
			elif val == 1:
				Participant.objects.filter(id__in=part_ids).update(pcr_approval=False, msp=None)
		return self.get(request, *args, **kwargs)

class AmbassadorList(ListView):
	model =  CampusAmbassador
	template_name = 'generic/ambassador_list.html'
	paginate_by=50
	def get_queryset(self):
		qs = super(AmbassadorList, self).get_queryset().order_by('pcr_approved')
		if 'approved' in self.kwargs:
			qs = qs.filter(pcr_approved=True)
		return qs
	def get_context_data(self, *args, **kwargs):
		context = super(AmbassadorList, self).get_context_data(*args, **kwargs)
		return context
	def post(self, request, *args, **kwargs):
		body = unicode(u'''Hello,

Greetings from Team APOGEE- BITS Pilani!

APOGEE is the annual technical festival of BITS Pilani. For its promotion in other colleges, we have joined hands with the internship platform YOUTH4WORK to recruit Marketing Interns. As a part of the process, you were called and told the about the work (in a broader fashion).

This is to inform you that you have been selected as a Marketing Intern for APOGEE 2017. You are now a part of APOGEE and YOUTH4WORK family and we expect you to work towards making it a grand success. However, there will be a great influx of responsibilities on your shoulders. We expect you to put in sincere efforts from your side. You will be in touch with one of our members via phone and email periodically.


Incentives:

1. Marketing Intern Certificate by Youth4work for 2 months is a valuable deliverable by a renowned internship platform. This recognition will specially be helpful for people looking to sit for placements in the future.

2. Based on your performance and how much participation you are able to bring, your registration fee may be waivered upto an extent/completely.

3. For Exceptional performances, be ready for goodies by Youth4work and APOGEE!


The following are expected from you promptly:

1. Please Pre-register and help your friends pre-register on https://www.bits-apogee.org/ .

2. Please reply to pcr@bits-apogee.org with the e-mail address and contact numbers of the NSS head in your college along with the Mechanical, Computer Science and Electrical departments’ (if any) student representatives.

3. You are expected to share the posts uploaded on the APOGEE Facebook page https://www.facebook.com/bitsapogee ; it will be monitored by one of our members.

4. Please subscribe on Youth4Work (website) if you haven’t till now (otherwise you will be not be a recognized Intern).

5. From announcing in classrooms and sending out mails to meeting various heads of participating teams, do all that which ensures participation in the events (whose posters will be sent out to you). Any other idea from you will always be received with a great pleasure.


To begin with, we require you to like the APOGEE Facebook page to keep yourself updated and also pre-register yourself on the APOGEE website www.bits-apogee.org. From now onwards, you will be regularly updated with your responsibilities via email. Do let us know if you have any suggestions specifically for your college that might help all of us spread the word about APOGEE and ensure healthy participation in a better way.

We wish you a grand success in this endeavor. Let's make APOGEE a grand success together.


Good Luck! ''')
		amb_ids = request.POST.getlist('amb_list', [])
		if request.POST.get('approval', False) and amb_ids:
			val = int(request.POST.get('approval',0))
			if val == 2:
				for ca in CampusAmbassador.objects.filter(id__in=amb_ids, pcr_approved=False):
					email = EmailMessage(subject="Campus Ambassador Approval", body=body, to=[ca.email])
					email.send()
				CampusAmbassador.objects.filter(id__in=amb_ids, pcr_approved=False).update(pcr_approved=True)
				return render(request, 'pcradmin/showmailsent.html')
			elif val == 1:
				CampusAmbassador.objects.filter(id__in=amb_ids).update(pcr_approved=False)
		elif request.POST.get('mail', False):
			id_str = ','.join(amb_ids)
			mailbody = 'Default Mail Body'
			gauss_check= 0
			context = {'mailbody' :mailbody,'id_str' : id_str}
			return render(request, 'pcradmin/mail_selected_amb.html', context)
		return self.get(request, *args, **kwargs)

class CollegeList(ListView):
	model = College
	template_name = 'generic/college_list.html'
	ordering = ('name')
	def get_context_data(self, *args, **kwargs):
		context = super(CollegeList, self).get_context_data(*args, **kwargs)
		object_list = []
		for college in context['object_list']:
			approved_count = college.participant_set.filter(pcr_approval=True).count()
			object_list.append((college, approved_count))
		context['object_list'] = object_list
		print context
		return context
	def post(self, request, *args, **kwargs):
		if not request.POST['finalcollege']:
			return self.get(request, *args, **kwargs)
		try:
			finalcollege = College.objects.get(name=request.POST['finalcollege'])
		except:
			finalcollege = College.objects.create(name=request.POST['finalcollege'], is_displayed=True)
		colleges = College.objects.filter(pk__in=request.POST.getlist('colleges')).exclude(pk=finalcollege.pk)
		for college in colleges:
			college.participant_set.all().update(college=finalcollege)
		colleges.delete()
		return self.get(request, *args, **kwargs)

def mail_selected_amb(request):
	id_str = request.POST.get('id_str', False)
	amb_ids = id_str.split(',')
	body = str(request.POST.get('body' , ''))
	if body != '':
		for ca in CampusAmbassador.objects.filter(id__in=amb_ids):
			email = EmailMessage(subject="Campus Ambassador", body=body, to=[ca.email])
			email.send()
	return render(request, 'pcradmin/showmailsent.html')

def mail_approved(request):
	id_str = ','.join([str(ca.id) for ca in CampusAmbassador.objects.filter(pcr_approved=True)])
	context = {'mailbody' :'Default Mail Body','id_str' : id_str}
	return render(request, 'pcradmin/mail_selected_amb.html', context)

class ParticipantMail(TemplateView):
	template_name = "generic/participant_mail.html"
	def get_context_data(self, *args, **kwargs):
		context = super(ParticipantMail, self).get_context_data(*args, **kwargs)
		context["filter"] = self.kwargs.get("filter", "all")
		return context
	def post(self, request, *args, **kwargs):
		qs = Participant.objects.filter(msp=None)
		context = {"title" : "Mail Sent to All Participants"}
		if self.kwargs.get('filter', False) == "approved":
			context = {"title" : "Mail Sent to All Approved Participants"}
			qs = qs.filter(pcr_approval=True)
		subject = request.POST.get('subject', '')
		body = request.POST.get('body', '')
		for part in qs:
			email = EmailMessage(subject=subject, body=body, to=[part.email])
			email.send()
		return render(request, 'pcradmin/showmailsent.html', context)


################################################################

def deepgetattr(obj, attr, default = None):
	"""
	Get a named attribute from an object; multi_getattr(x, 'a.b.c.d') is
	equivalent to x.a.b.c.d. When a default argument is given, it is
	returned when any attribute in the chain doesn't exist; without
	it, an exception is raised when a missing attribute is encountered.

	"""
	attributes = attr.split(".")
	for i in attributes:
		try:
			obj = getattr(obj, i)
		except AttributeError:
			if default:
				return default
			else:
				raise
	return obj

@staff_member_required
def eventwise_stats(request):
	events = Event.objects.exclude(category__name='Others') #[x for x in Event.objects.order_by('name') if x.category.name != "Other"]
	college = College.objects.all()
	eventwise = []
	for event in events:
		entry = {}
		entry['id'] = event.id
		entry['name'] = event.name
		entry['category'] = str(event.category.name)
		entry['males'] = str(event.participant_set.filter(gender__istartswith='M', msp=None).count())+' | '+str(event.participant_set.filter(gender__istartswith='M', pcr_approval=True, msp=None).count())
		entry['females'] = str(event.participant_set.filter(gender__istartswith='F', msp=None).count())+' | '+str(event.participant_set.filter(gender__istartswith='F', pcr_approval=True, msp=None).count())
		entry['total'] = str(event.participant_set.filter(msp=None).count())+' | '+str(event.participant_set.filter(pcr_approval=True, msp=None).count())
		for key, value in entry.iteritems():
			if type(value) is str:
				if value == '0 | 0 | 0':
					entry[key] = value.replace('0 | 0 | 0', '---')
		eventwise.append(entry)
	total = {}
	total['males'] = str(Participant.objects.filter(gender__istartswith='M', msp=None).count())+' | '+str(Participant.objects.filter(gender__istartswith='M', pcr_approval=True, msp=None).count())
	total['females'] = str(Participant.objects.filter(gender__istartswith='F', msp=None).count())+' | '+str(Participant.objects.filter(gender__istartswith='F', pcr_approval=True, msp=None).count())
	total['total'] = str(Participant.objects.filter(msp=None).count())+' | '+str(Participant.objects.filter(pcr_approval=True, msp=None).count())

	total_amb = CampusAmbassador.objects.all().count()
	app_amb = CampusAmbassador.objects.filter(pcr_approved=True).count()
	amb_stats = str(total_amb)+ " | " +str(app_amb)
	
	context = {
		'eventwise' : eventwise,
		'total' : total,
		'amb_stats' : amb_stats,
	}
	return render(request, 'pcradmin/eventwise_stats.html', context)


@staff_member_required
def total_stats(request):
	total_part = Participant.objects.filter(msp=None).count()
	app_part = Participant.objects.filter(pcr_approval=True, msp=None).count()
	part_stats = str(total_part)+ " | " +str(app_part)
	total_amb = CampusAmbassador.objects.all().count()
	app_amb = CampusAmbassador.objects.filter(pcr_approved=True).count()
	amb_stats = str(total_amb)+ " | " +str(app_amb)
	paid = Participant.objects.filter(fee_paid=True, msp=None).count()
	context = {
		'amb_stats' : amb_stats,
		'part_stats' : part_stats,
		'paid':paid
	}
	return render(request, 'pcradmin/total_stats.html', context)
