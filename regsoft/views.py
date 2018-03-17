from django.http import JsonResponse, HttpResponse, HttpResponseRedirect

from django.shortcuts import render_to_response, redirect, render
from django.template import RequestContext

from django.contrib.admin.views.decorators import staff_member_required
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.urls import reverse_lazy

from django.views.generic import CreateView, DetailView, UpdateView, ListView, TemplateView, RedirectView
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.db.models import Q, Sum

from random import randint
import string, json

from registration.models import *
from regsoft.models import *
from Event.models import *
from ems.models import *

@method_decorator(staff_member_required, name='dispatch')
class Home(RedirectView):
	def get_redirect_url(self, *args, **kwargs):
		user = self.request.user
		if user.is_authenticated() and user.is_staff:
			if user.is_superuser:
				return reverse_lazy('regsoft:barcodelist')
			if 'control' in user.username:
				return reverse_lazy('regsoft:controls home')
			if 'firewall' in user.username:
				return reverse_lazy('regsoft:firewallz dashboard')
			if 'recnacc' in user.username:
				return reverse_lazy('regsoft:recnacc home')
		return reverse_lazy('main:main')

####################    FIREWALLZ    ########################

class BarCodeList(ListView):
	model = Participant
	template_name = 'regsoft/barcodelist.html'
	paginate_by = 60
	def get_context_data(self, *args, **kwargs):
		context = super(BarCodeList, self).get_context_data(*args, **kwargs)
		context['query'] = self.request.GET.get('query', '')
		return context
	def get_queryset(self):
		query = self.request.GET.get('query', False)
		qs = super(BarCodeList, self).get_queryset().filter(pcr_approval=True, is_bitsian=False).order_by('college__name')
		if query:
			query = map(lambda s: s.strip().replace("BITS0", ""), query.split(';'))
			ret = qs.filter(Q(name__icontains=query[0]) | Q(college__name__icontains=query[0]) | Q(id__icontains=query[0]) | Q(regsoftdetails__group_code__icontains=query[0]))
			for q in query:
				ret |= qs.filter(Q(name__icontains=q) | Q(college__name__icontains=q) | Q(id__icontains=q) | Q(regsoftdetails__group_code__icontains=q))
			return ret
		return qs
	def post(self, request, *args, **kwargs):
		ids = request.POST.getlist('ids')
		if request.POST.get('approve', False):
			parts = Participant.objects.filter(Q(id__in=ids, regsoftdetails__firewallz=False) | Q(id__in=ids, regsoftdetails=None))
			if parts:
				part = parts[0]
				group_code = part.college.name[:3].upper()+"%05d" % int(part.id)
				RegsoftDetails.objects.filter(participant__id__in=ids, firewallz=False).update(firewallz=True, group_code=group_code)
				for p in Participant.objects.filter(id__in=ids, regsoftdetails=None):
					RegsoftDetails.objects.create(participant=p, firewallz=True, group_code=group_code)
		elif request.POST.get('deny', False):
			RegsoftDetails.objects.filter(participant__id__in=ids, firewallz=True).update(firewallz=False, group_code='')
			for p in Participant.objects.filter(id__in=ids, regsoftdetails=None):
				RegsoftDetails.objects.create(participant=p, firewallz=False, group_code='')
		return redirect(request.META.get("HTTP_REFERER", None))

class FirewallzAdd(CreateView):
	model = Participant
	fields = ['name', 'gender', 'phone', 'email', 'college', 'events', 'pcr_approval']
	success_url = '.'
	template_name = 'regsoft/fire_add.html'
	def get_context_data(self, *args, **kwargs):
		context = super(FirewallzAdd, self).get_context_data(*args, **kwargs)
		context['colleges'] = College.objects.all()
		context['events'] = Event.objects.all()
		return context
	def post(self, *args, **kwargs):
		post_save.disconnect(sender=Participant, receiver=verificationEmail)
		return super(FirewallzAdd, self).post(*args, **kwargs)

class FirewallzEdit(UpdateView):
	model = Participant
	fields =  ['name', 'email', 'phone', 'gender', 'events']
	success_url = '.'
	template_name = 'regsoft/fire_edit.html'
	def get_context_data(self, *args, **kwargs):
		context = super(FirewallzEdit, self).get_context_data(*args, **kwargs)
		context['events'] = Event.objects.all()
		return context

####################     GROUP CODE LIST    ####################
class GroupList(ListView):
	model = RegsoftDetails
	template_name = 'regsoft/groupcodelist.html'
	paginate_by = 10
	def get_queryset(self):
		qs = super(GroupList, self).get_queryset().exclude(group_code='').values('group_code').distinct()
		ret = []
		for code in qs:
			rd = RegsoftDetails.objects.filter(group_code=code['group_code'])[0]
			ret.append(rd)
		return ret

class GroupDetail(DetailView):
	model = RegsoftDetails
	template_name = 'regsoft/groupdetails.html'
	def post(self, request, *args, **kwargs):
		RegsoftDetails.objects.filter(group_code=self.get_object().group_code).update(group_code='', firewallz=False)
		return redirect('regsoft:barcodelist')

####################	CONTROLZ	##############################

class ControlsHome(TemplateView):
	template_name = "regsoft/controlz_home.html"
	def post(self, request, *args, **kwargs):
		leader_id = request.POST.get('code', 'XXX')[3:]
		try:
			RegsoftDetails.objects.get(participant__id=leader_id)
			return redirect('regsoft:controls group payment', pk=leader_id)
		except:
			return render(request, self.template_name, context={'error' : 1})

class ControlsDashboard(DetailView):
	model = RegsoftDetails
	template_name = 'regsoft/controlz_dashboard.html'
	def get_object(self, *args, **kwargs):
		return RegsoftDetails.objects.get(participant__id=self.kwargs['pk'])
	def get_context_data(self, *args, **kwargs):
		context = super(ControlsDashboard, self).get_context_data(*args, **kwargs)
		context['unbilled'] = self.get_object().members.filter(regsoftdetails__controlz=False)
		context['unbilled_male_count'] = context['unbilled'].filter(gender__istartswith='M').count()
		context['unbilled_female_count'] = context['unbilled'].filter(gender__istartswith='F').count()
		context['billed'] = self.object.members.filter(regsoftdetails__controlz=True)
		context['billed_male_count'] = context['billed'].filter(gender__istartswith='M').count()
		context['billed_female_count'] = context['billed'].filter(gender__istartswith='F').count()
		return context
	def post(self, request, *args, **kwargs):
		ids = request.POST.getlist('part')
		part_list = Participant.objects.filter(id__in=ids)
		online_paid = Participant.objects.filter(id__in=ids, fee_paid=True).count()
		context = {
			"object" : RegsoftDetails.objects.get(participant__id=self.kwargs['pk']),
			"part_list" : part_list,
			"total" : part_list.count(),
			"online_paid" : online_paid,
			"offline" : part_list.count()-online_paid,
			"total_amount" : (part_list.count()-online_paid)*900,
		}
		return render(request, 'regsoft/controlz_bill_amt.html', context)

class ControlsEdit(UpdateView):
	model = Participant
	fields =  ['name', 'email', 'phone', 'gender', 'events']
	success_url = '.'
	template_name = 'regsoft/controlz_edit.html'
	def get_context_data(self, *args, **kwargs):
		context = super(ControlsEdit, self).get_context_data(*args, **kwargs)
		context['events'] = Event.objects.all()
		return context

class ControlsStats(TemplateView):
	template_name = "regsoft/controlz_stats.html"
	def get_context_data(self, *args, **kwargs):
		context = super(ControlsStats, self).get_context_data()
		context['passed_controls'] = RegsoftDetails.objects.filter(controlz=True).count()
		context['passed_offline'] = RegsoftDetails.objects.filter(controlz=True, participant__fee_paid=False).count()
		context['passed_online'] = RegsoftDetails.objects.filter(controlz=True, participant__fee_paid=True).count()
		context['amount_total'] = Bill.objects.aggregate(Sum('amount'))['amount__sum']
		return context

def controlsBillDetails(request, pk):
	leader = Participant.objects.get(pk=pk)
	if request.method == "POST":
		part_ids = request.POST.getlist('part', [])
		context = {
			'leader' : leader,
			'males' : Participant.objects.filter(id__in=part_ids, gender__istartswith='M').count(),
			'females' : Participant.objects.filter(id__in=part_ids, gender__istartswith='F').count(),
			'online_paid' : Participant.objects.filter(id__in=part_ids, fee_paid=True).count(),
		}
		cash_given = 0
		balance = 0
		bill = Bill()
		for i in [10, 20, 50, 100, 500, 1000, 2000]:
			notes = int(request.POST.get("n_%d" % i, 0))
			setattr(bill, 'notes_%d' % i, notes)
			if notes >= 0:
				cash_given += i*notes
			else:
				balance -= i*notes
		bill.given = cash_given
		bill.balance = balance
		bill.amount = cash_given - balance
		bill.draft_number = request.POST.get('dd_no', '')
		bill.draft_amount = request.POST.get('dd_amount', '')
		try:
			bill.amount += int(bill.draft_number)
		except:
			pass
		bill.save()
		RegsoftDetails.objects.filter(participant__id__in=part_ids).update(controlz=True, bill=bill)
		context['bill'] = bill
		return render(request, "regsoft/controlz_bill_details.html", context)

def controlsBillPrint(request):
	if request.POST:
		bill = Bill.objects.get(id=request.POST.get('bill_id'))
		leader = Participant.objects.get(id=request.POST.get('leader_id'))
		males = bill.regsoftdetails_set.filter(participant__gender__istartswith='M').count()
		females = bill.regsoftdetails_set.filter(participant__gender__istartswith='F').count()
		online_paid = bill.regsoftdetails_set.filter(participant__fee_paid=True).count()

		context = {
			'males' : males,
			'females' : females,
			'online_paid': online_paid,
			'leader': leader,
			'bill' : bill
		}
		return render(request, 'regsoft/receipt.html', context)

class BillDelete(ListView):
	model = Bill
	template_name = "regsoft/controlz_bill_delete.html"
	def post(self, request, *args, **kwargs):
		ids = request.POST.getlist('bill_id')
		for bill in Bill.objects.filter(id__in=ids):
			bill.regsoftdetails_set.update(controlz=False, bill=None)
			bill.delete()
		return self.get(request, *args, **kwargs)

class BillView(DetailView):
	model = Bill
	template_name = "regsoft/controlz_bill_view.html"


class CommonSearch(ListView):
	model = Participant
	template_name = 'regsoft/common_search.html'
	paginate_by = 20
	def get_context_data(self, *args, **kwargs):
		context = super(CommonSearch, self).get_context_data(*args, **kwargs)
		context['query'] = self.request.GET.get('query', '')
		return context
	def get_queryset(self):
		query = self.request.GET.get('query', False)
		qs = super(CommonSearch, self).get_queryset().filter(pcr_approval=True, is_bitsian=False).order_by('college__name')
		if query:
			query = map(lambda s: s.strip().replace("BITS0", ""), query.split(';'))
			ret = qs.filter(Q(name__icontains=query[0]) | Q(college__name__icontains=query[0]) | Q(id__icontains=query[0]) | Q(regsoftdetails__group_code__icontains=query[0]))
			for q in query:
				ret |= qs.filter(Q(name__icontains=q) | Q(college__name__icontains=q) | Q(id__icontains=q) | Q(regsoftdetails__group_code__icontains=q))
			return ret
		return []

####################	RECNACC 	########################

class RecnaccHome(TemplateView):
	template_name = "regsoft/recnacc_home.html"
	def post(self, request, *args, **kwargs):
		leader_id = request.POST.get('code', 'XXX')[3:]
		try:
			RegsoftDetails.objects.get(participant__id=leader_id)
			return redirect('regsoft:recnacc dashboard', pk=leader_id)
		except:
			return render(request, self.template_name, context={'error' : 1})

class RecnaccDashboard(DetailView):
	model = RegsoftDetails
	template_name = 'regsoft/recnacc_dashboard.html'
	def get_object(self, *args, **kwargs):
		return RegsoftDetails.objects.get(participant__id=self.kwargs['pk'])
	def get_context_data(self, *args, **kwargs):
		context = super(RecnaccDashboard, self).get_context_data(*args, **kwargs)
		context['unallotted'] = self.get_object().members.filter(regsoftdetails__recnacc=False, regsoftdetails__checkout=False)
		context['unallotted_male_count'] = context['unallotted'].filter(gender__istartswith='M').count()
		context['unallotted_female_count'] = context['unallotted'].filter(gender__istartswith='F').count()
		context['allotted'] = self.object.members.filter(regsoftdetails__recnacc=True, regsoftdetails__checkout=False)
		context['allotted_male_count'] = context['allotted'].filter(gender__istartswith='M').count()
		context['allotted_female_count'] = context['allotted'].filter(gender__istartswith='F').count()
		context['rooms'] = Room.objects.all()
		return context
	def post(self, request, *args, **kwargs):
		self.object = self.get_object()
		ids = request.POST.getlist('part')
		parts = RegsoftDetails.objects.filter(participant__id__in=ids, room=None, checkout=False, recnacc=False)
		room = Room.objects.get(id=request.POST.get('room'))
		if parts.count() > room.vacancy:
			context = self.get_context_data()
			context["error"] = "Room is not vacant for %d participant." % parts.count()
			return render(request, self.template_name, context)
		room.vacancy -= parts.count()
		room.save()
		parts.update(recnacc=True, room=room)
		return self.get(request, *args, **kwargs)

class RecnaccDeallocate(DetailView):
	model = RegsoftDetails
	template_name = 'regsoft/recnacc_deallocate.html'
	def get_object(self, *args, **kwargs):
		return RegsoftDetails.objects.get(participant__id=self.kwargs['pk'])
	def get_context_data(self, *args, **kwargs):
		context = super(RecnaccDeallocate, self).get_context_data(*args, **kwargs)
		context['allotted'] = self.object.members.filter(regsoftdetails__recnacc=True, regsoftdetails__checkout=False)
		context['allotted_male_count'] = context['allotted'].filter(gender__istartswith='M').count()
		context['allotted_female_count'] = context['allotted'].filter(gender__istartswith='F').count()
		return context
	def post(self, request, *args, **kwargs):
		self.object = self.get_object()
		ids = request.POST.getlist('deallocate')
		parts = Participant.objects.filter(id__in=ids).exclude(regsoftdetails__room=None)
		for part in parts:
			details = part.regsoftdetails
			room = details.room
			room.vacancy += 1
			room.save()
			details.recnacc = False
			details.room = None
			details.save()
		context = {}
		context['object'] = self.get_object()
		context['allotted'] = self.object.members.filter(regsoftdetails__recnacc=True, regsoftdetails__checkout=False )
		context['allotted_male_count'] = context['allotted'].filter(gender__istartswith='M').count()
		context['allotted_female_count'] = context['allotted'].filter(gender__istartswith='F').count()
		context['deallocated'] = parts
		return render(request, self.template_name, context)

class RecnaccCheckout(DetailView):
	model = RegsoftDetails
	template_name = 'regsoft/recnacc_checkout.html'
	def get_object(self, *args, **kwargs):
		return RegsoftDetails.objects.get(participant__id=self.kwargs['pk'])
	def get_context_data(self, *args, **kwargs):
		context = super(RecnaccCheckout, self).get_context_data(*args, **kwargs)
		context['allotted'] = self.object.members.filter(regsoftdetails__recnacc=True, regsoftdetails__checkout=False)
		context['allotted_male_count'] = context['allotted'].filter(gender__istartswith='M').count()
		context['allotted_female_count'] = context['allotted'].filter(gender__istartswith='F').count()
		return context
	def post(self, request, *args, **kwargs):
		ids = request.POST.getlist('checkout')
		amount = request.POST.get('amt_ret', 0)
		parts = Participant.objects.filter(id__in=ids).exclude(regsoftdetails__room=None)
		try:
			leaderdetails = parts[0].regsoftdetails.leader.regsoftdetails
			leaderdetails.amount_deducted = amount
			leaderdetails.save()
		except:
			pass
		for part in parts:
			details = part.regsoftdetails
			room = details.room
			room.vacancy += 1
			room.save()
			details.checkout = True
			details.room = None
			details.save()
		context = {}
		context['allotted'] = self.get_object().members.filter(regsoftdetails__recnacc=True, regsoftdetails__checkout=False)
		context['allotted_male_count'] = context['allotted'].filter(gender__istartswith='M').count()
		context['allotted_female_count'] = context['allotted'].filter(gender__istartswith='F').count()
		context['checked_out'] = parts
		return self.get(request, *args, **kwargs)

class RecnaccCheckedOutList(ListView):
	model = Participant
	template_name = 'regsoft/recnacc_checked_out_participants_in.html'
	def get_queryset(self):
		return RegsoftDetails.objects.get(participant__id=self.kwargs['pk']).members.filter(regsoftdetails__checkout=True)
	def get_context_data(self, *args, **kwargs):
		context = super(RecnaccCheckedOutList, self).get_context_data(*args, **kwargs)
		context['object'] = RegsoftDetails.objects.get(participant__id=self.kwargs['pk'])
		return context
	def post(self, request, *args, **kwargs):
		amount = request.POST.get('amt_ded', 0)
		leaderdetails = RegsoftDetails.objects.get(participant__id=self.kwargs['pk'])
		leaderdetails.amount_deducted = amount
		leaderdetails.save()
		return self.get(request, *args, **kwargs)

class RecnaccRoomList(ListView):
	model = Room
	template_name = "regsoft/recnacc_room_participants_list.html"

class RecnaccRoomDetails(DetailView):
	model = Room
	template_name = "regsoft/recnacc_room_participants_details.html"

def recnacc_notify(request):
	gl_list = gleader.objects.all()
	res = {}
	res['gauss'] =[]
	for gl in gl_list:
		temp = {}
		if gl.participant_set.filter(recnacc= False, firewallzo = True).count() or gl.participant_set.filter(controlz= False, firewallzo = True).count():
			temp['glname'] = gl.details.name
			temp['college'] = str(gl.details.college)
			temp['groupcode']  = gl.groupcode
			temp['phone'] = gl.details.phone_one
			partmalenolist = Participant.objects.filter(grpleader = gl, gender='M')
			partfemalenolist = Participant.objects.filter(grpleader = gl, gender='F')
			partmaleno = 0
			partfemaleno = 0
			facmaleno = 0
			for x in partmalenolist:
				partmaleno += 1
			for x in partfemalenolist:
				partfemaleno += 1
			temp['partno'] = str(partmaleno)+ ' | ' + str(partfemaleno)
			res['gauss'].append(temp)
	return HttpResponse(json.dumps(res), content_type="application/json")