from django.db import models
from django.utils.translation import ugettext_lazy as _

from posts.models import Post


class Tag(models.Model):
    title = models.CharField(_("Tag Title"), max_length=10)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
