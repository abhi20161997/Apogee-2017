from django.http import HttpResponse

from .views import deepgetattr
from portal.models import CampusAmbassador
from registration.models import Participant
from time import gmtime, strftime

import xlsxwriter
try:
	import cStringIO as StringIO
except ImportError:
	import StringIO

def ambassador_excel(request, **kwargs):
	entries = CampusAmbassador.objects.filter(**kwargs).order_by('id')
	output = StringIO.StringIO()
	workbook = xlsxwriter.Workbook(output)
	worksheet = workbook.add_worksheet('new-spreadsheet')
	date_format = workbook.add_format({'num_format': 'mmmm d yyyy'})
	worksheet.write(0, 0, "Generated:")
	generated = strftime("%d-%m-%Y %H:%M:%S UTC", gmtime())
	worksheet.write(0, 1, generated)

	worksheet.write(1, 0, "ID")
	worksheet.write(1, 1, "Name")
	worksheet.write(1, 2, "College")
	worksheet.write(1, 3, "Degree")
	worksheet.write(1, 4, "Year")
	worksheet.write(1, 5, "Phone")
	worksheet.write(1, 6, "Email")
	worksheet.write(1, 7, "Description")
	worksheet.write(1, 8, "Root Mail")
	worksheet.write(1, 9, "PCR Approved")

	for i, ca in enumerate(entries):
		"""for each object in the date list, attribute1 & attribute2
		are written to the first & second column respectively,
		for the relevant row. The 3rd arg is a failure message if
		there is no data available"""

		worksheet.write(i+2, 0, deepgetattr(ca, 'id', 'NA'))
		worksheet.write(i+2, 1, deepgetattr(ca, 'name', 'NA'))
		worksheet.write(i+2, 2, deepgetattr(ca, 'college.name', 'NA'))
		worksheet.write(i+2, 3, deepgetattr(ca, 'degree', 'NA'))
		worksheet.write(i+2, 4, deepgetattr(ca, 'year', 'NA'))
		worksheet.write(i+2, 5, deepgetattr(ca, 'phone', 'NA'))
		worksheet.write(i+2, 6, deepgetattr(ca, 'email', 'NA'))
		worksheet.write(i+2, 7, deepgetattr(ca, 'ambassador_quality', 'NA'))
		worksheet.write(i+2, 8, deepgetattr(ca, 'root_mail', 'NA'))
		worksheet.write(i+2, 9, deepgetattr(ca, 'pcr_approved', 'NA'))

	workbook.close()
	filename = 'ExcelReport.xlsx'
	output.seek(0)
	response = HttpResponse(output.read(), content_type="application/ms-excel")
	response['Content-Disposition'] = 'attachment; filename=%s' % filename
	return response



def dhiti_xlsx(request):
	a_list = []

	event= Event.objects.filter(name='Dhiti')
	entries = Participant.objects.filter(events__in=event)

	for p in entries:
		a_list.append({'obj': p})
	data = sorted(a_list, key=lambda k: k['obj'].id)
	output = StringIO.StringIO()
	workbook = xlsxwriter.Workbook(output)
	worksheet = workbook.add_worksheet('new-spreadsheet')
	date_format = workbook.add_format({'num_format': 'mmmm d yyyy'})
	worksheet.write(0, 0, "Generated:")
	from time import gmtime, strftime
	generated = strftime("%d-%m-%Y %H:%M:%S UTC", gmtime())
	worksheet.write(0, 1, generated)

	worksheet.write(1, 0, "ID")
	worksheet.write(1, 1, "Name")
	worksheet.write(1, 2, "College")
	worksheet.write(1, 3, "city")
	worksheet.write(1, 4, "phone_one")
	worksheet.write(1, 5, "Email")
	worksheet.write(1, 6, "Email Verified")
	worksheet.write(1, 7, "Pcr Approval")
	worksheet.write(1, 8, "Fee Paid")


	for i, row in enumerate(data):
		"""for each object in the date list, attribute1 & attribute2
		are written to the first & second column respectively,
		for the relevant row. The 3rd arg is a failure message if
		there is no data available"""

		worksheet.write(i+2, 0, deepgetattr(row['obj'], 'id', 'NA'))
		worksheet.write(i+2, 1, deepgetattr(row['obj'], 'name', 'NA'))
		worksheet.write(i+2, 2, deepgetattr(row['obj'], 'college.name', 'NA'))
		worksheet.write(i+2, 3, deepgetattr(row['obj'], 'city', 'NA'))
		worksheet.write(i+2, 4, deepgetattr(row['obj'], 'phone_one', 'NA'))
		worksheet.write(i+2, 5, deepgetattr(row['obj'], 'email_id', 'NA'))
		worksheet.write(i+2, 6, deepgetattr(row['obj'], 'email_verified', 'NA'))
		worksheet.write(i+2, 7, deepgetattr(row['obj'], 'pcr_approval', 'NA'))
		worksheet.write(i+2, 8, deepgetattr(row['obj'], 'fee_paid', 'NA'))


	workbook.close()
	filename = 'ExcelReport.xlsx'
	output.seek(0)
	response = HttpResponse(output.read(), content_type="application/ms-excel")
	response['Content-Disposition'] = 'attachment; filename=%s' % filename
	return response
	# amb_obs = CampusAmbassador.objects.all()
	# return render(request, 'pcradmin/xlsx_ambassadors.html', {'amb_list' : amb_obs})


def RENG_xlsx(request):
	a_list = []

	event= Event.objects.filter(name='Reverse Engineering')
	entries = Participant.objects.filter(events__in=event)

	for p in entries:
		a_list.append({'obj': p})
	data = sorted(a_list, key=lambda k: k['obj'].id)
	output = StringIO.StringIO()
	workbook = xlsxwriter.Workbook(output)
	worksheet = workbook.add_worksheet('new-spreadsheet')
	date_format = workbook.add_format({'num_format': 'mmmm d yyyy'})
	worksheet.write(0, 0, "Generated:")
	from time import gmtime, strftime
	generated = strftime("%d-%m-%Y %H:%M:%S UTC", gmtime())
	worksheet.write(0, 1, generated)

	worksheet.write(1, 0, "ID")
	worksheet.write(1, 1, "Name")
	worksheet.write(1, 2, "College")
	worksheet.write(1, 3, "city")
	worksheet.write(1, 4, "phone_one")
	worksheet.write(1, 5, "Email")
	worksheet.write(1, 6, "Email Verified")
	worksheet.write(1, 7, "Pcr Approval")
	worksheet.write(1, 8, "Fee Paid")


	for i, row in enumerate(data):
		"""for each object in the date list, attribute1 & attribute2
		are written to the first & second column respectively,
		for the relevant row. The 3rd arg is a failure message if
		there is no data available"""

		worksheet.write(i+2, 0, deepgetattr(row['obj'], 'id', 'NA'))
		worksheet.write(i+2, 1, deepgetattr(row['obj'], 'name', 'NA'))
		worksheet.write(i+2, 2, deepgetattr(row['obj'], 'college.name', 'NA'))
		worksheet.write(i+2, 3, deepgetattr(row['obj'], 'city', 'NA'))
		worksheet.write(i+2, 4, deepgetattr(row['obj'], 'phone_one', 'NA'))
		worksheet.write(i+2, 5, deepgetattr(row['obj'], 'email_id', 'NA'))
		worksheet.write(i+2, 6, deepgetattr(row['obj'], 'email_verified', 'NA'))
		worksheet.write(i+2, 7, deepgetattr(row['obj'], 'pcr_approval', 'NA'))
		worksheet.write(i+2, 8, deepgetattr(row['obj'], 'fee_paid', 'NA'))


	workbook.close()
	filename = 'ExcelReport.xlsx'
	output.seek(0)
	response = HttpResponse(output.read(), content_type="application/ms-excel")
	response['Content-Disposition'] = 'attachment; filename=%s' % filename
	return response






def innover_xlsx(request):
	a_list = []

	event= Event.objects.filter(name='Innover')
	entries = Participant.objects.filter(events__in=event)

	for p in entries:
		a_list.append({'obj': p})
	data = sorted(a_list, key=lambda k: k['obj'].id)
	output = StringIO.StringIO()
	workbook = xlsxwriter.Workbook(output)
	worksheet = workbook.add_worksheet('new-spreadsheet')
	date_format = workbook.add_format({'num_format': 'mmmm d yyyy'})
	worksheet.write(0, 0, "Generated:")
	from time import gmtime, strftime
	generated = strftime("%d-%m-%Y %H:%M:%S UTC", gmtime())
	worksheet.write(0, 1, generated)

	worksheet.write(1, 0, "ID")
	worksheet.write(1, 1, "Name")
	worksheet.write(1, 2, "College")
	worksheet.write(1, 3, "city")
	worksheet.write(1, 4, "phone_one")
	worksheet.write(1, 5, "Email")
	worksheet.write(1, 6, "Email Verified")
	worksheet.write(1, 7, "Pcr Approval")
	worksheet.write(1, 8, "Fee Paid")


	for i, row in enumerate(data):
		"""for each object in the date list, attribute1 & attribute2
		are written to the first & second column respectively,
		for the relevant row. The 3rd arg is a failure message if
		there is no data available"""

		worksheet.write(i+2, 0, deepgetattr(row['obj'], 'id', 'NA'))
		worksheet.write(i+2, 1, deepgetattr(row['obj'], 'name', 'NA'))
		worksheet.write(i+2, 2, deepgetattr(row['obj'], 'college.name', 'NA'))
		worksheet.write(i+2, 3, deepgetattr(row['obj'], 'city', 'NA'))
		worksheet.write(i+2, 4, deepgetattr(row['obj'], 'phone_one', 'NA'))
		worksheet.write(i+2, 5, deepgetattr(row['obj'], 'email_id', 'NA'))
		worksheet.write(i+2, 6, deepgetattr(row['obj'], 'email_verified', 'NA'))
		worksheet.write(i+2, 7, deepgetattr(row['obj'], 'pcr_approval', 'NA'))
		worksheet.write(i+2, 8, deepgetattr(row['obj'], 'fee_paid', 'NA'))


	workbook.close()
	filename = 'ExcelReport.xlsx'
	output.seek(0)
	response = HttpResponse(output.read(), content_type="application/ms-excel")
	response['Content-Disposition'] = 'attachment; filename=%s' % filename
	return response

def participant_excel(request):
	a_list = []
	output = StringIO.StringIO()
	workbook = xlsxwriter.Workbook(output)
	worksheet = workbook.add_worksheet('part_apogee')
	plist = Participant.objects.filter(msp=None)

	worksheet.write(0, 0, "Name")
	worksheet.write(0, 1, "Gender")
	worksheet.write(0, 2, "phone")
	worksheet.write(0, 3, "email")
	worksheet.write(0, 4, "college")

	rowno = 1

	for x in plist:
		collegep = x.college
		colno = 1
		worksheet.write(rowno, 0, x.name)
		worksheet.write(rowno, 1, x.gender)
		worksheet.write(rowno, 2, x.phone)
		worksheet.write(rowno, 3, x.email)
		worksheet.write(rowno, 4, collegep.name)
		rowno+=1

	workbook.close()
	filename = 'part_apogee.xlsx'
	output.seek(0)
	response = HttpResponse(output.read(), content_type="application/ms-excel")
	response['Content-Disposition'] = 'attachment; filename=%s' % filename
	return response
