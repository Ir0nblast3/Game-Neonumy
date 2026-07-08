from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),

    path("add-score/", views.add_score),
    path("top10/", views.top10),
]