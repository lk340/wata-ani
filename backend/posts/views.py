from django.shortcuts import render
from django.http import Http404
from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response

from . import models
from . import serializers
from . import permissions as CustomPermissions


class PostList(APIView):
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly, CustomPermissions.IsOwnerOrReadOnly
    )

    def get(self, request, format=None):
        post = models.Post.objects.all()
        serializer = serializers.PostSerializer(post, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

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
