from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from . import views

urlpatterns = [
    path("", views.PostList.as_view(), name="post_list"),
    path("<int:pk>/", views.PostDetail.as_view(), name="post_detail")
]


urlpatterns = format_suffix_patterns(urlpatterns, allowed=("json", "html"))
