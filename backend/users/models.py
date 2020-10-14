from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _

from . import managers


# class CustomUser(AbstractUser):
#     pass


class CustomUser(AbstractBaseUser):
    email = models.EmailField(_("email address"), unique=True)
    username = models.CharField(_("username"), max_length=15, unique=True)
    date_joined = models.DateTimeField(_("date joined"), default=timezone.now)
    last_login = models.DateTimeField(_("last login"), auto_now=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    first_name = models.CharField(max_length=20, blank=True)
    last_name = models.CharField(max_length=20, blank=True)
    biography = models.TextField(max_length=300, blank=True)
    profile_picture = models.ImageField(
        default="default_profile_picture.png",
        upload_to="profile_pictures",
        blank=True
    )

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    # Simply tells this class where the user manager is / how to use the manager.
    objects = managers.CustomUserManager()

    def __str__(self):
        return f"Email: {self.email}"

    def has_perm(self, permission, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        # Always has module permissions (i.e. view the app_label).
        return True

    @property
    def user_is_staff(self):
        return self.is_admin

    def set_profile_picture(self):
        profile_picture = self.profile_picture
        if not profile_picture:
            self.profile_picture = "media/default_profile_picture.png"
