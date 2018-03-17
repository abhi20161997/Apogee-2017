from django.contrib import admin
from .models import *
# Register your models here.
class AicSubmissionAdmin(admin.ModelAdmin):
    list_display = ('id', 'leader', 'problem_statement')
    search_fields = ['leader.name']
    filter_horizontal = ['members']
admin.site.register(Participant)
admin.site.register(AicSubmission, AicSubmissionAdmin)