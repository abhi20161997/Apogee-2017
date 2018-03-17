
from django.shortcuts import render, redirect

from django.core.mail.backends.smtp import EmailBackend
from django.core.mail import EmailMessage, EmailMultiAlternatives

from django.views.generic import RedirectView
from django.views.generic.edit import CreateView, FormView, UpdateView
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User

from django.core.exceptions import ObjectDoesNotExist
from django.template.loader import get_template
from django.http import JsonResponse
from django.urls import reverse

from apogee17.settings import *
from models import Participant, College
from Event.models import Event
from ems.models import Team
from urllib import urlencode
import requests
import string, random
# Create your views here.

class AjaxableResponseMixin(object):
	def form_invalid(self, form):
		response = super(AjaxableResponseMixin, self).form_invalid(form)
		if self.request.is_ajax():
			return JsonResponse(form.errors, status=400)
		else:
			return response

	def form_valid(self, form):
		response = super(AjaxableResponseMixin, self).form_valid(form)
		if self.request.is_ajax():
			data = {
				'pk': self.object.pk,
			}
			return JsonResponse(data)
		else:
			return response

@method_decorator(csrf_exempt,name='dispatch')
class Register(AjaxableResponseMixin, CreateView):
	model = Participant
	fields = ['name', 'gender', 'college', 'city', 'phone', 'alternate_phone', 'email', 
					'bank_ifsc', 'bank_name', 'bank_account_no', 'address']
	def post(self, request, *args, **kwargs):
		try:
			College.objects.get(pk=request.POST["college"])
		except ObjectDoesNotExist:
			college = College.objects.create(name=request.POST["college"], is_displayed=False)
			college.save()
		return super(Register, self).post(request, *args, **kwargs)

@method_decorator(csrf_exempt,name='dispatch')
class UpdateBankDetails(AjaxableResponseMixin, UpdateView):
	model = Participant
	fields = ['bank_ifsc', 'bank_name', 'bank_account_no', 'address']
	template_name = 'registration/participant_form.html'
	def get_object(self, queryset=None):
		return self.request.user.participant

class Payment(RedirectView):
	def get_redirect_url(self):
		if hasattr(self.request.user, 'participant'):
			part = self.request.user.participant
			data = {"intent" : "buy", "data_name" : part.name, "data_email" : part.email, "data_phone" : part.phone, 
					"data_Field_83204" : part.id, "data_readonly" : ["data_Field_83204"]}
			url = "https://www.instamojo.com/bitsapogee/apogee-2017-registrations/?" + urlencode(data, True)
			return url
		else:
			logout(self.request)
			return reverse("main:main")+"#login-register"
	def get(self, request, *args, **kwargs):
		if hasattr(self.request.user, 'participant') and self.request.user.participant.fee_paid:
			return render(request, "registration/already-paid.html")
		return super(Payment, self).get(request, *args, **kwargs)

def paymentSuccess(request):
	if request.GET.get('status', False):
		headers = {"X-Api-Key" : INSTAMOJO_KEY, "X-Auth-Token" : INSTAMOJO_AUTH_TOKEN}
		url = "https://www.instamojo.com/api/1.1/payments/" + request.GET.get('payment_id', False) + "/"
		response = requests.get(url, headers=headers).json()
		if response["success"]:
			userid = response["payment"]["custom_fields"]["Field_83204"]["value"]
			Participant.objects.filter(id=userid).update(fee_paid=True)
		return render(request, "registration/payment-success.html")
	return render(request, "registration/payment-failed.html")

@csrf_exempt
def loginView(request):
	if request.POST:
		data = request.POST
		user = authenticate(username=data['username'], password=data['password'])
		if user:
			login(request, user)
			return JsonResponse({"status" : 1, "name" : user.participant.name})
		else:
			return JsonResponse({"status" : 0, "message" : "Invalid Username or Password."})
	return JsonResponse({"status" : 0, "message" : "Only POST request is allowed."})

def logoutView(request):
	logout(request)
	return redirect("main:main")

def emailVerifyView(request, token):
	member = email_authenticate_token(token)
	if member:
		password = generate_password()
		user = User.objects.create_user(username=member.email, password=password)
		user.save()
		member.user = user
		member.save()
		context = {"name" : member.name, "id" : member.id, "username" : user.username, "password" : password}
		html = get_template('registration/user_credentials.html').render(context=context)
		email = EmailMultiAlternatives(subject="Apogee 2017 - User Credentials", body='---', to=[member.email])
		email.attach_alternative(html, "text/html")
		email.send()
		return render(request, 'registration/verify_display.html', context = {"name" : member.name,"email" : member.email})
	return render(request, 'registration/invalid_code.html')

def email_authenticate_token(token):
	try:
		member = Participant.objects.get(email_token=token)
		member.email_verified = True
		member.email_token = None
		member.save()
		return member
	except ObjectDoesNotExist:
		return False
		
def generate_password():
	from xkcdpass import xkcd_password as xp
	wordfile = xp.locate_wordfile()
	mywords = xp.generate_wordlist(wordfile=wordfile, min_length=8, max_length=10)
	password = xp.generate_xkcdpassword(mywords, numwords=2, delimiter='').lower().translate(None, ' -_')
	return(password)

@csrf_exempt
def createTeam(request, eventid):
	if request.user.is_authenticated() and hasattr(request.user, 'participant') and request.POST:
		event = Event.objects.get(id=eventid)
		part = request.user.participant
		if event in part.events.all():
			return JsonResponse({'status':0, 'message':'You are already registered in this event.'})
		try:
			Team.objects.get(name=request.POST['name'])
			return JsonResponse({'status':0, 'message':'This Team name is already taken.'})
		except:
			pass
		chars = string.ascii_uppercase+string.digits
		code = ''.join(random.choice(chars) for _ in range(8))
		while Team.objects.filter(code=code):
			code = ''.join(random.choice(chars) for _ in range(8))
		team = Team(name=request.POST['name'], leader=part, event=event, code=code)
		team.save()
		part.events.add(event)
		part.save()
		return JsonResponse({'status' : 1, 'code' : team.code })
	return JsonResponse({'status' : 0, 'message' : 'Please login to create a Team.'})

@csrf_exempt
def joinTeam(request, eventid):
	if request.user.is_authenticated() and hasattr(request.user, 'participant') and request.POST:
		event = Event.objects.get(id=eventid)
		part = request.user.participant
		maxparts = event.max_participants
		if event in part.events.all():
			return JsonResponse({'status':0, 'message':'You are already registered in this event.'})
		if part.team_set.filter(event=event):
			return JsonResponse({'status' : 0, 'message' : 'Participant has already joined a team in this event.'})
		team = Team.objects.get(code=request.POST['code'])
		try:
			maxparts = int(maxparts)
			if team.members.all().count() == maxparts - 1:
				return JsonResponse({'status' : 0, 'message' : 'This team already has maximum number of members.'})
		except:
			pass
		team.members.add(part)
		team.save()
		part.events.add(event)
		part.save()
		return JsonResponse({'status' : 1, 'message' : 'Successfully added to team %s.' % team.name })
	return JsonResponse({'status' : 0, 'message' : 'Please login to join a Team'})


def user_dashboard(request):
	if request.user.is_authenticated() and hasattr(request.user, 'participant'):
		part = request.user.participant
		data = part.json()
		return JsonResponse(data)
	return JsonResponse({'status' : 0, 'message' : 'Please login to view dashboard.'})	