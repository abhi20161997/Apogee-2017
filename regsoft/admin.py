from django.contrib import admin
from regsoft.models import *
from Event.models import *
class RoomAdmin(admin.ModelAdmin):
	readonly_fields=('id',)
	list_display = ('id','room', 'bhavan','vacancy')
class BillAdmin(admin.ModelAdmin):
	readonly_fields=('id',)
	list_display = ('id','amount')

admin.site.register(Bill, BillAdmin)
admin.site.register(Room, RoomAdmin)
admin.site.register(Bhavan)
