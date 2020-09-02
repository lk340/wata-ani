from django.shortcuts import render
from django.http import Http404
from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response

from . import models
from . import serializers


class TagList(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format=None):
        tags = models.Tag.objects.all()
        serializer = serializers.TagSerializer(tags, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = serializers.TagSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class TagDetail(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get_tag(self, pk):
        try:
            return models.Tag.objects.get(pk=pk)
        except models.Tag.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        tag = self.get_tag(pk)
        serializer = serializers.TagSerializer(tag)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def patch(self, request, pk, format=None):
        tag = self.get_tag(pk)
        serializer = serializers.TagSerializer(tag, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

    def delete(self, request, pk, format=None):
        tag = self.get_tag(pk)
        tag.delete()
        response_detail = {"detail": "Tag has successfully been deleted."}
        return Response(response_detail, status=status.HTTP_204_NO_CONTENT)
