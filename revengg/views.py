from django.shortcuts import render
from revengg.models import *
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse

def home(request):
    return render(request,'revengg/index.html')

@csrf_exempt
def create(request):
    resp = {}
    return JsonResponse({'status' : 0,'message' : 'Registration is closed'});
    # try:
    #     p = Participant.objects.get(email=request.POST['email'])
    #     resp = {'status' : 1,'time' : p.time}
    # except:
    #     p = Participant.objects.create(name=request.POST['name'], email=request.POST['email'], phone=request.POST['phone'],team_name=request.POST['team_name'])
    #     resp = {'status' : 1}
    # request.session['email'] = str(p.email)
    # return JsonResponse(resp);
    
@csrf_exempt
def questions(request):
    questions = []
    for q in Question.objects.all():
        obj = {'num' : q.number, 'ques' : q.statement, 'cat' : q.category ,'options' : []}
        for o in q.option_set.all():
            obj['options'].append({'number' : o.number, 'desc' : o.content,'type' : 'text'})
        questions.append(obj)
    return JsonResponse(questions, safe=False)
    
@csrf_exempt
def submit(request):
    return JsonResponse({'status' : 0, 'message' : 'Game is closed'});
    # score = 0
    # time = request.POST['time']
    # try:
    #     participant = Participant.objects.get(email=request.session.get('email'))
    # except:
    #     return JsonResponse({'status' : 1, 'message' : 'Session Expired.'})
    # questions = Question.objects.all()
    # for q in questions:
    #     if request.POST.get(str(q.number), False):
    #         option = int(request.POST.get(str(q.number)))
    #         options = [o.number for o in q.option_set.all()]
    #         if q.answer.number == option:
    #             score += 3
    #         elif option in options:
    #             score -= 1
    # participant.score = score
    # participant.time = time
    # participant.save()
    # return JsonResponse({'status' : 1, 'score' : score})



def revengg_excel(request):
    from time import gmtime, strftime
    import xlsxwriter
    try:
        import cStringIO as StringIO
    except ImportError:
        import StringIO
    entries = Participant.objects.filter().order_by('id')
    output = StringIO.StringIO()
    workbook = xlsxwriter.Workbook(output)
    worksheet = workbook.add_worksheet('new-spreadsheet')
    date_format = workbook.add_format({'num_format': 'mmmm d yyyy'})
    worksheet.write(0, 0, "Generated:")
    generated = strftime("%d-%m-%Y %H:%M:%S UTC", gmtime())
    worksheet.write(0, 1, generated)

    worksheet.write(1, 0, "ID")
    worksheet.write(1, 1, "Team Name")
    worksheet.write(1, 2, "Leader's Name")
    worksheet.write(1, 3, "Leader's Phone")
    worksheet.write(1, 4, "Leader's Email")
    worksheet.write(1, 5, "Score")

    for i, sub in enumerate(entries):
        """for each object in the date list, attribute1 & attribute2
        are written to the first & second column respectively,
        for the relevant row. The 3rd arg is a failure message if
        there is no data available"""

        worksheet.write(i+2, 0, sub.id)
        worksheet.write(i+2, 1, sub.team_name)
        worksheet.write(i+2, 2, sub.name)
        worksheet.write(i+2, 3, sub.phone)
        worksheet.write(i+2, 4, sub.email)
        worksheet.write(i+2, 5, sub.score)

    workbook.close()
    filename = 'ExcelReport.xlsx'
    output.seek(0)
    response = HttpResponse(output.read(), content_type="application/ms-excel")
    response['Content-Disposition'] = 'attachment; filename=%s' % filename
    return response
