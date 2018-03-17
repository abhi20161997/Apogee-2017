from django.contrib import admin
from portal.models import *
# Register your models here.

admin.site.register(Project)
admin.site.register(Paper)
admin.site.register(Category)
admin.site.register(Association)
admin.site.register(Participant)
admin.site.register(College)
admin.site.register(CampusAmbassador)

class UpdateAdmin(admin.ModelAdmin):
	list_display = ['title', 'position']

	def get_queryset(self, *args, **kwargs):
		return super(UpdateAdmin, self).get_queryset(*args, **kwargs).order_by('position')

admin.site.register(Update, UpdateAdmin)
