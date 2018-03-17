from main import views
from django.conf.urls import url, include

urlpatterns = [
    url(r'^$', views.mainWebsite, name="main"),
    url(r'^search$', views.search, name="search"),

    ]