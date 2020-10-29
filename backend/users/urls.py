from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from . import views

urlpatterns = format_suffix_patterns([
    path("", views.UserList.as_view(), name="user_list"),
    path("<int:pk>/", views.UserDetail.as_view(), name="user_detail"),
    path("<int:pk>/posts/", views.UserPosts.as_view(), name="user_posts"),
    path("<int:user_id>/posts/<int:post_id>/", views.UserPostRating.as_view(), name="user_post_rating"),
    path("<str:username>/", views.GetUserByUsername.as_view(), name="get_user_by_username")
])
