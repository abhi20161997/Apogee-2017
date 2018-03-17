from django.shortcuts import get_object_or_404, render_to_response, redirect
from django.shortcuts import render
from django.urls import reverse
from django.template import Context
from django.http import HttpResponse, JsonResponse
import string, random, os
from apogee17.settings import *
from django.views.decorators.csrf import csrf_exempt
from django.utils.datastructures import MultiValueDictKeyError
from django.contrib.admin.views.decorators import staff_member_required
from tichallenge.models import *
from django.template.defaultfilters import slugify


def website(request) :
	return render(request, "tichallenge/index.html")

@csrf_exempt
def problemstatement_add(request) :
	return JsonResponse({'status' : 0, 'message' : 'Submissions are closed now.'}, safe=False)
	# if request.method != "POST":
	# 	return HttpResponse("Only POST requests are allowed on this url.")
	# data = request.POST
	# gl_name = data['gl_name']
	# gl_phone = data['gl_phone']
	# gl_email = data['gl_email']
	# gl_college = data['gl_college']
	# gl_yos = data['gl_yos']

	# member = {}
	# for x in range(1,4):
	# 	member[x] = {}
	# 	try:
	# 		key = 'mem-%s-name' % x
	# 		member[x]['name'] = data[key]
	# 	except KeyError:
	# 		member[x]['name'] = None
	# 	try:
	# 		key = 'mem-%s-email' % x
	# 		member[x]['email'] = data[key]
	# 	except KeyError:
	# 		member[x]['phone'] = None
	# 	try:
	# 		key = 'mem-%s-phone' % x
	# 		member[x]['phone'] = data[key]
	# 	except KeyError:
	# 		member[x]['email'] = None
	# 	try:
	# 		key = 'mem-%s-college' % x
	# 		member[x]['college'] = data[key]
	# 	except KeyError:
	# 		member[x]['college'] = None
	# 	try:
	# 		key = 'mem-%s-yos' % x
	# 		member[x]['yos'] = data[key]
	# 	except KeyError:
	# 		member[x]['yos'] = None

	# solution = request.FILES['0']


	# try:
	# 	model_leader = Participant.objects.get(email=gl_email)
	# except:
	# 	model_leader = Participant.objects.create(name=gl_name, phone=gl_phone, email=gl_email, college=gl_college, yos=gl_yos)

	# model_member = {}
	# for x in range(1,4):
	# 	if member[x]['email'] != None:
	# 		try:
	# 			model_member[x] = Participant.objects.get(email=member[x]['email'])
	# 		except:
	# 			model_member[x] = Participant.objects.create(name=member[x]['name'], phone=member[x]['phone'], email=member[x]['email'], college=member[x]['college'], yos=member[x]['yos'])
	# 	else:
	# 		model_member[x] = None

	# solution.name = slugify(str(model_leader.id)+'-'+gl_college+'-'+gl_name)+'.pdf'

	# model_project = TIChallengeSubmission.objects.create(leader=model_leader, solution=solution)

	# for x in range(1,4):
	# 	if model_member[x] != None:
	# 		model_project.members.add(model_member[x])
	# model_project.save()

	# return JsonResponse({'status' : 1, 'message' : 'Successfully Submitted.'}, safe=False)

def tichallenge_excel(request):
	from time import gmtime, strftime
	import xlsxwriter
	try:
		import cStringIO as StringIO
	except ImportError:
		import StringIO
	entries = TIChallengeSubmission.objects.filter().order_by('id')
	output = StringIO.StringIO()
	workbook = xlsxwriter.Workbook(output)
	worksheet = workbook.add_worksheet('new-spreadsheet')
	date_format = workbook.add_format({'num_format': 'mmmm d yyyy'})
	worksheet.write(0, 0, "Generated:")
	generated = strftime("%d-%m-%Y %H:%M:%S UTC", gmtime())
	worksheet.write(0, 1, generated)

	worksheet.write(1, 0, "ID")
	worksheet.write(1, 1, "Leader's Name")
	worksheet.write(1, 2, "Leader's Phone")
	worksheet.write(1, 3, "Leader's Email")
	worksheet.write(1, 4, "Leader's College")
	worksheet.write(1, 5, "Leader's Year of Study")
	worksheet.write(1, 6, "Member-1's Name")
	worksheet.write(1, 7, "Member-1's Phone")
	worksheet.write(1, 8, "Member-1's Email")
	worksheet.write(1, 9, "Member-1's College")
	worksheet.write(1, 10, "Member-1's Year of Study")
	worksheet.write(1, 11, "Member-2's Name")
	worksheet.write(1, 12, "Member-2's Phone")
	worksheet.write(1, 13, "Member-2's Email")
	worksheet.write(1, 14, "Member-2's College")
	worksheet.write(1, 15, "Member-2's Year of Study")
	worksheet.write(1, 16, "Member-3's Name")
	worksheet.write(1, 17, "Member-3's Phone")
	worksheet.write(1, 18, "Member-3's Email")
	worksheet.write(1, 19, "Member-3's College")
	worksheet.write(1, 20, "Member-3's Year of Study")
	worksheet.write(1, 21, "Link to Submission")
	
	for i, sub in enumerate(entries):
		"""for each object in the date list, attribute1 & attribute2
		are written to the first & second column respectively,
		for the relevant row. The 3rd arg is a failure message if
		there is no data available"""

		worksheet.write(i+2, 0, sub.id)
		worksheet.write(i+2, 1, sub.leader.name)
		worksheet.write(i+2, 2, sub.leader.phone)
		worksheet.write(i+2, 3, sub.leader.email)
		worksheet.write(i+2, 4, sub.leader.college)
		worksheet.write(i+2, 5, sub.leader.yos)
		try:
			worksheet.write(i+2, 6, sub.members.all()[0].name)
			worksheet.write(i+2, 7, sub.members.all()[0].phone)
			worksheet.write(i+2, 8, sub.members.all()[0].email)
			worksheet.write(i+2, 9, sub.members.all()[0].college)
			worksheet.write(i+2, 10, sub.members.all()[0].yos)
			worksheet.write(i+2, 11, sub.members.all()[1].name)
			worksheet.write(i+2, 12, sub.members.all()[1].phone)
			worksheet.write(i+2, 13, sub.members.all()[1].email)
			worksheet.write(i+2, 14, sub.members.all()[1].college)
			worksheet.write(i+2, 15, sub.members.all()[1].yos)
			worksheet.write(i+2, 16, sub.members.all()[2].name)
			worksheet.write(i+2, 17, sub.members.all()[2].phone)
			worksheet.write(i+2, 18, sub.members.all()[2].email)
			worksheet.write(i+2, 19, sub.members.all()[2].college)
			worksheet.write(i+2, 20, sub.members.all()[2].yos)
		except:
			pass
		url = "https://bits-apogee.org" + reverse('tichallenge:viewSub', kwargs={'pk':sub.pk})
		worksheet.write(i+2, 21, url)

	workbook.close()
	filename = 'ExcelReport.xlsx'
	output.seek(0)
	response = HttpResponse(output.read(), content_type="application/ms-excel")
	response['Content-Disposition'] = 'attachment; filename=%s' % filename
	return response

@staff_member_required
def viewSubmission(request, pk):
	sub = TIChallengeSubmission.objects.get(pk=pk)
	response = HttpResponse(sub.solution, content_type='application/pdf')
	response['Content-Disposition'] = 'attachment; filename='+sub.solution.name
	return response