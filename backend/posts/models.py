from django.db import models
from django.utils.translation import ugettext_lazy as _


class Post(models.Model):
    title = models.CharField(_("Post Title"), max_length=20)
    series_title = models.CharField(_("Series Title"), max_length=100)
    text = models.TextField(_("Post Text"), max_length=500)
    author_rating = models.IntegerField(_("Author Rating"))
    user_rating = models.IntegerField(_("User Rating"))
