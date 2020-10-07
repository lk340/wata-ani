from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from . import views

urlpatterns = [
    path("", views.PostList.as_view(), name="post_list"),
    path("<int:pk>/", views.PostDetail.as_view(), name="post_detail"),
    path("<int:pk>/tags/", views.PostTags.as_view(), name="post_tags"),
    path("<int:pk>/ratings/", views.PostUserRatings.as_view(), name="post_user_ratings"),
    path("<int:pk>/average-ratings/", views.PostAverageUserRatings.as_view(), name="post_average_user_ratings")
]


urlpatterns = format_suffix_patterns(urlpatterns, allowed=("json", "html"))
