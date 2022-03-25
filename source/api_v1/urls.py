from django.urls import path

from api_v1.views import add, subtract

urlpatterns = [
    path("add/", add),
    path("subtract/", subtract),
]
