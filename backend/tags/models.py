from django.db import models
from django.utils.translation import ugettext_lazy as _


class Tag(models.Model):
    genre = models.CharField(verbose_name=_("Tag Genre"), max_length=20)

    def __str__(self):
        return self.genre
