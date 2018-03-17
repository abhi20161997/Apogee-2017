
from django.conf.urls import url
from django.contrib import admin
from views import *

urlpatterns = [
    url(r'^dashboard/$', user_dashboard, name='dashboard'),
    url(r'^register/$', Register.as_view(), name='register'),
    url(r'^update/$', UpdateBankDetails.as_view(), name='update'),
    url(r'^login/$', loginView, name='login'),
    url(r'^logout/$', logoutView, name='logout'),
    url(r'^verify/(?P<token>\w+)/$', emailVerifyView, name='verify'),
    url(r'^createTeam/(?P<eventid>\d+)/$', createTeam, name='create team'),
    url(r'^joinTeam/(?P<eventid>\d+)/$', joinTeam, name='join team'),
    url(r'^payment/$', Payment.as_view(), name='payment'),
    url(r'^payment-success/$', paymentSuccess, name='payment-success'),
]
