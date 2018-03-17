from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.generic import TemplateView
from registration.models import Participant
from django.contrib.admin.views.decorators import staff_member_required
from django.utils.decorators import method_decorator
from .models import *
# Create your views here.
class MessView(TemplateView):
	template_name='messportal/home.html'
	
	@method_decorator(staff_member_required)
	def get(self, request, *args, **kwargs):
		dates = []
		mbs = MessBill.objects.all()
		for i in range(22, 27):
			 if mbs.count() == 0:
				dates.append({'value':str(i)+' March'})
			 else:
				lastdate = mbs[mbs.count()-1].date
				dates.append({'value':str(i) +' March', 'selected': lastdate[:2] == str(i)})
		context = {'dates':dates}
		if 'status' in kwargs:
			context['status']=kwargs['status']
		return render(request, self.template_name, context)

	def post(self, request, *args, **kwargs):
		code = request.POST['code'].strip().replace("BITS", "")
		try:
			part = Participant.objects.get(id=code)
		except:
			return self.get(request, status=0)
		bitsid = request.POST['bitsid']
		item = request.POST['item']
		qty = int(request.POST['qty'])
		date = request.POST['date']
		bhavan = request.POST['bhavan']
		if item == "Breakfast":
			amount = 40*qty
		if item == "Lunch":
			amount = 60*qty
		if item == "Dinner":
			amount = 50*qty
		if "Worker" in item:
			amount = 0
		if not request.POST.get('total', False):		
			context = {
				'part' : part,
				'item' : item,
				'qty' : qty,
				'date' : date,
				'bhavan':bhavan,
				'bitsid':bitsid,
				'totalamt' : amount,
			}
			return render(request, 'messportal/createbill.html', context)
		bill = MessBill(item=item, date=date, buyer_id=code, qty=qty, amount=amount, created_by=bitsid, bhavan=bhavan)
		bill.n2000 = int(request.POST['n_2000'])
		bill.n500 = int(request.POST['n_500'])
		bill.n100 = int(request.POST['n_100'])
		bill.n50 = int(request.POST['n_50'])
		bill.n20 = int(request.POST['n_20'])
		bill.n10 = int(request.POST['n_10'])
		bill.save()
		balance = 0
	        given = 0
	        if bill.n2000 < 0:
	            balance += -(bill.n2000) * 2000
	        else:
	            given+= bill.n1000 * 2000
	        if bill.n500 < 0:
		    balance += -(bill.n500) * 500
	        else:
	            given+= bill.n500 * 500

	        if bill.n100 < 0:
	            balance += -(bill.n100) * 100
	        else:
	            given+= bill.n100 * 100

	        if bill.n50 < 0:
	            balance += -(bill.n50) * 50
	        else:
	            given+= bill.n50 * 50

	        if bill.n20 < 0:
	            balance += -(bill.n20) * 20 
	        else:
	            given+= bill.n20 * 20     
	        if bill.n10 < 0:
	            balance += -(bill.n10) * 10 
	        else:
	            given+= bill.n10 * 10
		bill.balance = balance
		bill.given = given
		bill.save()

		context = {
			'college' : part.college.name,
			'item' : item,
			'given' : given,
			'balance' : balance,
			'name' : part.name,
			'receiptno' : bill.id,
			'qty' : qty,
			'bhavan' : bhavan,
			'amount' : bill.amount
		}
		return render(request, 'messportal/receipt.html', context)


def bill_view(request):
	bills = MessBill.objects.all()
	rows = []
	for bill in bills:
		part = Participant.objects.get(id=bill.buyer_id)
		rows.append({'part':part, 'bill':bill})
	return render(request, 'messportal/billview.html', {'rows':rows})

def bill_print(request, billid):
	bill = MessBill.objects.get(id=billid)
	part = Participant.objects.get(id=bill.buyer_id)
	context = {
		'college' : part.college.name,
		'item' : bill.item,
		'given' : bill.given,
		'balance' : bill.balance,
		'name' : part.name,
		'receiptno' : bill.id,
		'qty' : bill.qty,
		'amount' : bill.amount,
		'bhavan' : bill.bhavan
	}
	return render(request, 'messportal/receipt.html', context)

def bill_delete(request, billid):
	MessBill.objects.get(id=billid).delete()
	return redirect('messportal:bills')

class ProfShow(TemplateView):
	template_name='messportal/profshow.html'
	
	def get(self, request, *args, **kwargs):
		dates=[]
		for i in range(22, 27):
			dates.append({'value':str(i)+' March'})
		context = {'dates':dates}
		if 'status' in kwargs:
			context['status']=kwargs['status']
		return render(request, self.template_name, context)

	def post(self, request, *args, **kwargs):
		code = request.POST['code'].strip().replace("BITS", "").strip("0")
		try:
			part = Participant.objects.get(id=code)
		except:
			return self.get(request, status=0)
		bitsid = request.POST['bitsid']
		item = request.POST['item']
		qty = int(request.POST['qty'])
		date = request.POST['date']
		stubno = request.POST['stubno']
		if "Entertainment" in item:
			amount = qty*450
		else:
			amount = qty*1000
		if not request.POST.get('total', False):		
			context = {
				'part' : part,
				'stubno' : stubno,
				'item' : item,
				'qty' : qty,
				'date' : date,
				'bitsid':bitsid,
				'totalamt' : amount,
			}
			return render(request, 'messportal/createbill.html', context)
		bill = ProfShowTicket(item=item, date=date, buyer_id=code, qty=qty, amount=amount, created_by=bitsid, stubno=stubno)
		bill.n2000 = int(request.POST['n_2000'])
		bill.n500 = int(request.POST['n_500'])
		bill.n100 = int(request.POST['n_100'])
		bill.n50 = int(request.POST['n_50'])
		bill.n20 = int(request.POST['n_20'])
		bill.n10 = int(request.POST['n_10'])
		bill.save()
		balance = 0
	        given = 0
	        if bill.n2000 < 0:
	            balance += -(bill.n2000) * 2000
	        else:
	            given+= bill.n2000 * 2000
	        if bill.n500 < 0:
		    balance += -(bill.n500) * 500
	        else:
	            given+= bill.n500 * 500

	        if bill.n100 < 0:
	            balance += -(bill.n100) * 100
	        else:
	            given+= bill.n100 * 100

	        if bill.n50 < 0:
	            balance += -(bill.n50) * 50
	        else:
	            given+= bill.n50 * 50

	        if bill.n20 < 0:
	            balance += -(bill.n20) * 20 
	        else:
	            given+= bill.n20 * 20     
	        if bill.n10 < 0:
	            balance += -(bill.n10) * 10 
	        else:
	            given+= bill.n10 * 10
		bill.balance = balance
		bill.given = given
		bill.save()
		context = {
			'college' : part.college.name,
			'item' : item,
			'given' : given,
			'stubno' : stubno,
			'balance' : balance,
			'name' : part.name,
			'receiptno' : bill.id,
			'qty' : qty,
			'amount' : bill.amount
		}
		return render(request, 'messportal/receipt.html', context)


def profshow_bill_view(request):
	bills = ProfShowTicket.objects.all()
	rows = []
	for bill in bills:
		part = Participant.objects.get(id=bill.buyer_id)
		rows.append({'part':part, 'bill':bill})
	return render(request, 'messportal/profshow_bill_view.html', {'rows':rows})

def profshow_bill_print(request, billid):
	bill = ProfShowTicket.objects.get(id=billid)
	part = Participant.objects.get(id=bill.buyer_id)
	context = {
		'college' : part.college.name,
		'stubno':bill.stubno,
		'item' : bill.item,
		'given' : bill.given,
		'balance' : bill.balance,
		'name' : part.name,
		'receiptno' : bill.id,
		'qty' : bill.qty,
		'amount' : bill.amount
	}
	return render(request, 'messportal/receipt.html', context)

def profshow_bill_delete(request, billid):
	ProfShowTicket.objects.get(id=billid).delete()
	return redirect('messportal:profshow bill list')

from time import gmtime, strftime

import xlsxwriter
try:
	import cStringIO as StringIO
except ImportError:
	import StringIO

def bills_excel(request, **kwargs):
	entries = MessBill.objects.filter(**kwargs).order_by('id')
	output = StringIO.StringIO()
	workbook = xlsxwriter.Workbook(output)
	worksheet = workbook.add_worksheet('MessBills')
	date_format = workbook.add_format({'num_format': 'mmmm d yyyy'})
	worksheet.write(0, 0, "Generated:")
	generated = strftime("%d-%m-%Y %H:%M:%S UTC", gmtime())
	worksheet.write(0, 1, generated)

	worksheet.write(1, 0, "Item")
	worksheet.write(1, 1, "Buyer")
	worksheet.write(1, 2, "Quantity")
	worksheet.write(1, 3, "Bhavan")
	worksheet.write(1, 4, "Amount")
	worksheet.write(1, 5, "Created By")

	for i, bill in enumerate(entries):
		"""for each object in the date list, attribute1 & attribute2
		are written to the first & second column respectively,
		for the relevant row. The 3rd arg is a failure message if
		there is no data available"""
		worksheet.write(i+2, 0, bill.item)
		worksheet.write(i+2, 1, Participant.objects.get(id=bill.buyer_id).name)
		worksheet.write(i+2, 2, bill.qty)
		worksheet.write(i+2, 3, bill.bhavan)
		worksheet.write(i+2, 4, bill.amount)
		worksheet.write(i+2, 5, bill.created_by)

	entries = ProfShowTicket.objects.filter(**kwargs).order_by('id')
	worksheet = workbook.add_worksheet('ProfShow-Workshops')
	date_format = workbook.add_format({'num_format': 'mmmm d yyyy'})
	worksheet.write(0, 0, "Generated:")
	generated = strftime("%d-%m-%Y %H:%M:%S UTC", gmtime())
	worksheet.write(0, 1, generated)

	worksheet.write(1, 0, "Item")
	worksheet.write(1, 1, "Buyer")
	worksheet.write(1, 2, "Quantity")
	worksheet.write(1, 3, "Amount")
	worksheet.write(1, 4, "Created By")

	for i, bill in enumerate(entries):
		"""for each object in the date list, attribute1 & attribute2
		are written to the first & second column respectively,
		for the relevant row. The 3rd arg is a failure message if
		there is no data available"""
		worksheet.write(i+2, 0, bill.item)
		worksheet.write(i+2, 1, Participant.objects.get(id=bill.buyer_id).name)
		worksheet.write(i+2, 2, bill.qty)
		worksheet.write(i+2, 3, bill.amount)
		worksheet.write(i+2, 4, bill.created_by)

	workbook.close()
	filename = 'ExcelReport.xlsx'
	output.seek(0)
	response = HttpResponse(output.read(), content_type="application/ms-excel")
	response['Content-Disposition'] = 'attachment; filename=%s' % filename
	return response
