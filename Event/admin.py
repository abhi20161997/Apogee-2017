from django.contrib import admin
from .models import *
# Register your models here.

class ScheduleInline(admin.StackedInline):
	model = Schedule
	extra = 1

class TabInline(admin.StackedInline):
	model = Tab
	extra = 1

class EventAdmin(admin.ModelAdmin):
	list_display = ['id', 'name','org', 'category', 'tags', 'is_kernel']
	list_editable = ['tags']
	list_display_links = ['name']
	search_fields = ['name', 'tags']
	inlines = [ScheduleInline, TabInline,]
	def get_fields(self, request, obj=None):
		"""Excludes the organistaion field if user is not superuser."""
		return super(EventAdmin, self).get_fields(request, obj)
	
	def get_queryset(self, request):
		"""Shows events that are created by current user."""
		if hasattr(request.user, 'organization'):
			return super(EventAdmin, self).get_queryset(request).filter(org__user=request.user)
		return super(EventAdmin, self).get_queryset(request)

	def save_model(self, request, obj, form, change):
		"""Set user's organization as default if user is not superuser."""
		if hasattr(request.user, 'organization'):
			obj.org = Organization.objects.get(user=request.user)
		if obj.name.lower() not in obj.tags:
			obj.tags += ","+obj.name.lower()
		if obj.category.name.lower() not in obj.tags:
			obj.tags += ","+obj.category.name.lower()
		return super(EventAdmin, self).save_model(request, obj, form, change)

class EventCategoryAdmin(admin.ModelAdmin):
	list_display = ('name','weight',)
	list_editable = ('weight',)


class OrgAdmin(admin.ModelAdmin):
	list_display = ('user','name','cord')

class HeadingAdmin(admin.ModelAdmin):
	list_display = ('name', 'weight')


admin.site.register(Event, EventAdmin)
admin.site.register(EventCategory, EventCategoryAdmin)
admin.site.register(Heading, HeadingAdmin)
admin.site.register(Organization, OrgAdmin)

admin.site.register(ScheduleData)