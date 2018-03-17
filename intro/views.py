from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from .models import *
# Create your views here.
from django.views.decorators.csrf import csrf_exempt
import xlsxwriter

def introWebsite(request) :
	return render(request, "intro/index.html")
	
@csrf_exempt
def preregister(request):
	data = request.POST
	name = data['name']
	email = data['email']
	phone = data['phone']
	about = data['about_apogee']
	college = data['college']
	try:
		part = IntroReg.objects.get(email=email)
		return JsonResponse({'status':0, 'message':'This Email is already regsitered.'})
	except:
		part = IntroReg.objects.create(name=name, email=email, phone=phone, about=about, college=college)
	part.save()
	return JsonResponse({'status':1, 'message':'Successfully Registered.'})

def intro_excel(request):
	try:
		import StringIO
	except ImportError:
		import cStringIO as StringIO
	workbook = xlsxwriter.Workbook("introreg.xlsx")
	intros = IntroReg.objects.all()
	worksheet = workbook.add_worksheet("introreg")
	worksheet.write(0, 0, "Name")
	worksheet.write(0, 1, "Phone")
	worksheet.write(0, 2, "Email")
	worksheet.write(0, 3, "College")
	worksheet.write(0, 4, "Find about apogee?")
	row = 1
	for intro in intros:
		worksheet.write(row, 0, str(intro.name.encode('ascii', 'ignore')))
		worksheet.write(row, 1, str(intro.phone.encode('ascii', 'ignore')))
		worksheet.write(row, 2, str(intro.email.encode('ascii', 'ignore')))
		worksheet.write(row, 3, str(intro.college.encode('ascii', 'ignore')))
		worksheet.write(row, 4, str(intro.about.encode('ascii', 'ignore')))
		row += 1
	workbook.close()
	file = open("introreg.xlsx", "r")
	output = StringIO.StringIO(file.read())
	response = HttpResponse(output.getvalue(), content_type="application/ms-excel")
	response['Content-Disposition'] = 'attachment; filename=introreg.xlsx'
	file.close()
	return response