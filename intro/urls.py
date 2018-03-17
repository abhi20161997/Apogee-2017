from intro import views
from django.conf.urls import url, include

urlpatterns = [
    url(r'^$', views.introWebsite),
    url(r'^register$', views.preregister),
    url(r'^excel/$', views.intro_excel),
    ]