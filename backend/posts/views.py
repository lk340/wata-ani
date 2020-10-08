from django.shortcuts import render
from django.http import Http404
from rest_framework import permissions, status
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from rest_framework.views import APIView

from . import models
from . import serializers
from . import permissions as CustomPermissions

from ratings.models import Rating


class PostList(APIView):
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly, CustomPermissions.IsOwnerOrReadOnly
    )

    def get(self, request, format=None):
        posts = models.Post.objects.all()
        serializer = serializers.PostSerializer(posts, many=True)
        custom_data = {post["id"]: post for post in serializer.data}
        return Response(custom_data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = serializers.PostSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class PostDetail(APIView):
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly, CustomPermissions.IsOwnerOrReadOnly
    )

    def get_post(self, pk):
        try:
            return models.Post.objects.get(pk=pk)
        except models.Post.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        post = self.get_post(pk)
        serializer = serializers.PostSerializer(post)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def patch(self, request, pk, format=None):
        post = self.get_post(pk)
        serializer = serializers.PostSerializer(post, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

    def delete(self, request, pk, format=None):
        post = self.get_post(pk)
        post.delete()
        response_detail = {"detail": "Post has successfully been deleted."}
        return Response(response_detail, status=status.HTTP_204_NO_CONTENT)


class PostListDescending(APIView, LimitOffsetPagination):
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly, CustomPermissions.IsOwnerOrReadOnly
    )

    def get(self, request, format=None):
        posts = models.Post.objects.all().order_by("-date_created")
        paginated_posts = self.paginate_queryset(posts, request, view=self)
        serializer = serializers.PostSerializer(paginated_posts, many=True)
        return self.get_paginated_response(serializer.data)


class PostTags(APIView):
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly, CustomPermissions.IsOwnerOrReadOnly
    )

    def get_post(self, pk):
        try:
            return models.Post.objects.get(pk=pk)
        except models.Post.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        post = self.get_post(pk)
        serializer = serializers.PostSerializer(post)
        tags = serializer.data["tags"]
        return Response(tags, status=status.HTTP_200_OK)


class PostUserRatings(APIView):
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly, CustomPermissions.IsOwnerOrReadOnly
    )

    def get_post(self, pk):
        try:
            return models.Post.objects.get(pk=pk)
        except models.Post.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        post = self.get_post(pk)
        serializer = serializers.PostSerializer(post)
        user_ratings = serializer.data["user_ratings"]
        return Response(user_ratings, status=status.HTTP_200_OK)


class PostAverageUserRatings(APIView):
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly, CustomPermissions.IsOwnerOrReadOnly
    )

    def get_post(self, pk):
        try:
            return models.Post.objects.get(pk=pk)
        except models.Post.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        post = self.get_post(pk)
        serializer = serializers.PostSerializer(post)
        ratings = serializer.data["user_ratings"]
        ratings_count = len(ratings)
        total_ratings = 0
        average_rating = 0

        if ratings_count > 0:
            for rating in ratings:
                total_ratings += Rating.objects.get(id=rating).rating
            average_rating = total_ratings / ratings_count

        return Response(round(average_rating, 1), status=status.HTTP_200_OK)
