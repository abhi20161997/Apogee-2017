from django.shortcuts import render
from django.core import serializers
from django.http import JsonResponse

from .models import Event, EventCategory, ScheduleData
# Create your views here.

def summary(request, pk=None):
	if pk:
		event = Event.objects.get(pk=pk)
		data = event.json()
		if request.user.is_authenticated() and hasattr(request.user, 'participant'):
			data["is_registered"] = (event in request.user.participant.events.all())
	else:
		data = []
		for cat in EventCategory.objects.all():
			obj = {	'category' : cat.name }
			obj["events"] = [event.json(True) for event in cat.event_set.all()]
			data.append(obj)
	return JsonResponse(data, safe=False)


def schedule(request):
	data = [sch.json() for sch in ScheduleData.objects.all()]
	return JsonResponse(data, safe=False)