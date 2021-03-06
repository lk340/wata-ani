from django.contrib.auth import get_user_model
from django.db import models
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _

from tags.models import Tag

User = get_user_model()


class Post(models.Model):
    title = models.CharField(verbose_name=_("Post Title"), max_length=50, blank=True)
    series_title = models.CharField(verbose_name=_("Series Title"), max_length=100, blank=True)
    review = models.TextField(verbose_name=_("Post Text"), max_length=500, blank=True)
    personal_rating = models.IntegerField(verbose_name=_("Personal Rating"), blank=True)
    date_created = models.DateTimeField(_("Date Created"), default=timezone.now)
    author = models.ForeignKey(User, verbose_name=_("Post Author"), related_name="posts", on_delete=models.CASCADE, blank=True)
    tags = models.ManyToManyField(Tag, verbose_name=_("Post Tags"), related_name="posts", blank=True)

    def __str__(self):
        return f"{self.author.username}'s Post: {self.title}"
    
