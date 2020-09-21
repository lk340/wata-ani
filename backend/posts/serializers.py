from rest_framework import serializers

from . import models


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Post
        fields = (
            "id", "title", "series_title", "text", "personal_rating", "date_created", "author", "tags", "ratings"
        )
