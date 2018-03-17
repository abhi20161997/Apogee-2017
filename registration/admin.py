from django.contrib import admin

from .models import Participant, College
from regsoft.models import RegsoftDetails
# Register your models here.
class RegsoftInline(admin.TabularInline):
	model = RegsoftDetails

class ParticipantAdmin(admin.ModelAdmin):
	inlines = [RegsoftInline]

admin.site.register(Participant, ParticipantAdmin)
admin.site.register(College)

