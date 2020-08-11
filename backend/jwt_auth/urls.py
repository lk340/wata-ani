from django.urls import path

from . import views

urlpatterns = [
    path("register/", views.UserRegister.as_view(), name="register"),
    path("signin/", views.UserSignIn.as_view(), name="signin"),
]
