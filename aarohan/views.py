from django.shortcuts import render
from aarohan.models import School, Result
from datetime import date
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

def index(request) :
	return render(request, "aarohan/index.html")
	
@csrf_exempt
def registerschool(request):
	students = request.FILES['file']
	name = students.name.split('.')[0]
	ext = students.name.split('.')[-1]
	students.name = name+'_'+str(date.today())+'.'+ext
	school = School(students=students)
	school.name=name+'_'+str(date.today())
	school.save()
	return JsonResponse({'status':1, 'message':'File Successfully Uploaded.'})

@csrf_exempt
def result(request):
	print request.method
	if request.method == "POST":
		roll_no = request.POST.get('roll_no', False)
		try:
			res = Result.objects.get(roll_no=roll_no)
			data = {'status' : 1, 'name' : res.name, 'air' : res.air_rank, 'school_rank' : res.school_rank}
		except:
			data = {'status' : 2}
		# return JsonResponse(data)
	### ADD TEMPLATE HERE ###
	else:
		data = {'status' : 0}
	return render(request, 'aarohan/result.html',data)
