from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from . import views

urlpatterns = [
    path("", views.RatingList.as_view(), name="rating_list"),
    path("<int:pk>/", views.RatingDetail.as_view(), name="rating_detail")
]

urlpatterns = format_suffix_patterns(urlpatterns, allowed=("json", "html"))
