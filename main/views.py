from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

# Create your views here.
def mainWebsite(request) :
	context = {}
	try:
		context = {'name': request.user.participant.name }
	except:
		pass
	return render(request, "main/index.html", context)

def search(request) :
	return render(request, "main/search.html")