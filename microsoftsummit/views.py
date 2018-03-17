from django.shortcuts import render, redirect
from django.views.generic import ListView
from django.db.models import Q
from django.utils.decorators import method_decorator
from django.contrib.admin.views.decorators import staff_member_required
from django.http import HttpResponse

from .models import MSP
from time import gmtime, strftime
import xlsxwriter
try:
	import cStringIO as StringIO
except ImportError:
	import StringIO
# Create your views here.

@method_decorator(staff_member_required, name='dispatch')
class MSPList(ListView):
	model = MSP
	paginate_by = 40
	def get_queryset(self, *args, **kwargs):
		query = self.request.GET.get('query', False)
		qs = super(MSPList, self).get_queryset()
		if self.kwargs.get('passed', False):
			qs = qs.filter(entered=True)
		else:
			qs = qs.filter(entered=False)
		if query:
			query = map(lambda s: s.strip().replace("MSPS", "").strip("0"), query.split(';'))
			ret = qs.filter(Q(participant__name__icontains=query[0]) | Q(id__icontains=query[0]))
			for q in query:
				ret |= qs.filter(Q(participant__name__icontains=q) | Q(id__icontains=q))
			return ret
		return qs
	def get_context_data(self, *args, **kwargs):
		context = super(MSPList, self).get_context_data(*args, **kwargs)
		context['passed'] = self.kwargs.get('passed', False)
		context['query'] = self.request.GET.get('query', '')
		return context
	def post(self, request, *args, **kwargs):
		mspids = request.POST.getlist('mspid')
		msps = MSP.objects.filter(id__in=mspids)
		if request.POST.get('confirm', False):
			msps.update(entered=True)
		else:
			msps.update(entered=False)
		return redirect(".")



def MSPExcel(request, **kwargs):
	entries = MSP.objects.filter(entered=True)
	output = StringIO.StringIO()
	workbook = xlsxwriter.Workbook(output)
	worksheet = workbook.add_worksheet('new-spreadsheet')
	date_format = workbook.add_format({'num_format': 'mmmm d yyyy'})
	worksheet.write(0, 0, "Generated:")
	generated = strftime("%d-%m-%Y %H:%M:%S UTC", gmtime())
	worksheet.write(0, 1, generated)

	worksheet.write(1, 0, "Code")
	worksheet.write(1, 1, "Name")
	worksheet.write(1, 2, "College")
	worksheet.write(1, 3, "Phone")
	worksheet.write(1, 4, "Email")

	for i, msp in enumerate(entries):
		"""for each object in the date list, attribute1 & attribute2
		are written to the first & second column respectively,
		for the relevant row. The 3rd arg is a failure message if
		there is no data available"""

		worksheet.write(i+2, 0, msp.barcode)
		worksheet.write(i+2, 1, msp.participant.name)
		worksheet.write(i+2, 2, msp.participant.college.name)
		worksheet.write(i+2, 3, msp.participant.phone)
		worksheet.write(i+2, 4, msp.participant.email)

	workbook.close()
	filename = 'ExcelReport.xlsx'
	output.seek(0)
	response = HttpResponse(output.read(), content_type="application/ms-excel")
	response['Content-Disposition'] = 'attachment; filename=%s' % filename
	return response