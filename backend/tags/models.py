from django.db import models
from django.utils.translation import ugettext_lazy as _


class Tag(models.Model):
    title = models.CharField(verbose_name=_("Tag Title"), max_length=20)

    def __str__(self):
        return self.title
