from django.shortcuts import render
from django.http import Http404
from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response

from . import models
from . import serializers


class RatingList(APIView):
    def get(self, request, format=None):
        ratings = models.Rating.objects.all()
        serializer = serializers.RatingSerializer(ratings, many=True)
        custom_data = {rating["id"]: rating for rating in serializer.data}
        return Response(custom_data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = serializers.RatingSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class RatingDetail(APIView):
    def get_rating(self, pk):
        try:
            return models.Rating.objects.get(pk=pk)
        except models.Rating.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        rating = self.get_rating(pk)
        serializer = serializers.RatingSerializer(rating)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def patch(self, request, pk, format=None):
        rating = self.get_rating(pk)
        serializer = serializers.RatingSerializer(rating, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

    def delete(self, request, pk, format=None):
        rating = self.get_rating(pk)
        rating.delete()
        response_detail = {"detail": "Rating has been successfully deleted"}
        return Response(response_detail, status=status.HTTP_204_NO_CONTENT)
