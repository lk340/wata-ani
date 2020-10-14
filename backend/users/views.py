from django.contrib.auth import get_user_model
from django.http import Http404
from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response

from . import serializers
from posts.serializers import PostSerializer

from posts.models import Post
from ratings.models import Rating

User = get_user_model()


class UserList(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format=None):
        users = User.objects.all()
        serializer = serializers.UserSerializer(users, many=True)
        custom_data = {user["id"]: user for user in serializer.data}
        return Response(custom_data, status=status.HTTP_200_OK)


class UserDetail(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get_user(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        user = self.get_user(pk)
        serializer = serializers.UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def patch(self, request, pk, format=None):
        user = self.get_user(pk)
        serializer = serializers.UserSerializer(user, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

    def delete(self, request, pk, format=None):
        user = self.get_user(pk)
        user.delete()
        response_detail = {
            "detail": "Your account has been successfully deleted."
        }
        return Response(response_detail, status=status.HTTP_204_NO_CONTENT)


class UserPosts(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get_user(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        # user = self.get_user(pk)
        posts = Post.objects.get(author=pk)
        serializer = PostSerializer(posts)

        return Response(serializer.data, status=status.HTTP_200_OK)
        # return Response(serializer.data["posts"], status=status.HTTP_200_OK)


class UserPostRating(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, user_id, post_id, format=None):
        user = self.get_user(user_id)
        serializer = serializers.UserSerializer(user)
        user_rating_ids = serializer.data["ratings"]
        post_rating_ids = Post.objects.get(pk=post_id).user_ratings.all()
        user_post_rating = 0

        if len(user_rating_ids) > 0 and len(post_rating_ids) > 0:
            for user_rating_id in user_rating_ids:
                if user_rating_id in post_rating_ids:
                    user_post_rating = Rating.objects.get(
                        pk=user_rating_id).rating

        return Response(user_post_rating, status=status.HTTP_200_OK)
