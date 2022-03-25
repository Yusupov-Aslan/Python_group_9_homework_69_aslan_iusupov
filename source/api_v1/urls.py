from django.urls import path

from api_v1.views import add

urlpatterns = [
    path("add/", add),

]
