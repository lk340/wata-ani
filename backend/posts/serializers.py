from django.contrib.auth import get_user_model
from rest_framework import serializers

from . import models

User = get_user_model()


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Post
        fields = (
            "id", "title", "series_title", "text", "personal_rating", "user_rating", "author", "tags"
        )
