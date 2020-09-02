from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from . import views

urlpatterns = [
    path("", views.TagList.as_view(), name="tag_list"),
    path("<int:pk>/", views.TagDetail.as_view(), name="tag_detail")
]

urlpatterns = format_suffix_patterns(urlpatterns, allowed=("json", "html"))
