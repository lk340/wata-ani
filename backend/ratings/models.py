from django.db import models
from django.contrib.auth import get_user_model
from django.utils.translation import ugettext_lazy as _

from posts.models import Post

User = get_user_model()


class Rating(models.Model):
    rating = models.IntegerField(_("Rating"))
    owner = models.ForeignKey(User, verbose_name=_("Rating Owner"), related_name="ratings", on_delete=models.CASCADE)
    post = models.ForeignKey(Post, verbose_name=_("Rating Post"), related_name="ratings", on_delete=models.CASCADE)
