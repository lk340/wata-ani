from rest_framework import serializers

from . import models


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Rating
        fields = ("id", "rating", "owner", "post")
