"""apogee17 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from microsoftsummit.views import MSPList

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^portal/', include('portal.urls', namespace='portal')),
    url(r'^event/', include('Event.urls', namespace='event')),
    url(r'^manage/', include('cms.urls', namespace='cms')),
    url(r'^', include('main.urls', namespace='main')),
    url(r'^intro/', include('intro.urls', namespace='intro')),
    url(r'^aarohan/', include('aarohan.urls', namespace='aarohan')),
    url(r'^main/', include('main.urls', namespace='main')),
    url(r'^api/', include('registration.urls', namespace='registration')),
    url(r'^aic/', include('aic.urls', namespace='aic')),
    url(r'^tichallenge/', include('tichallenge.urls', namespace='tichallenge')),
    url(r'^revengg/', include('revengg.urls', namespace='revengg')),
    url(r'^pcradmin/', include('pcradmin.urls', namespace='pcradmin')),
    url(r'^regsoft/', include('regsoft.urls', namespace='regsoft')),
    url(r'^ems/', include('ems.urls', namespace='ems')),
    url(r'^msps/', include('microsoftsummit.urls', namespace='msps')),
    url(r'^mess/', include('messportal.urls', namespace='messportal')),
]
