from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import ugettext_lazy as _


class CustomUserManager(BaseUserManager):
    # Manager for our custom user. Makes sure that email and username fields are required.

    def create_user(self, email, username, password):
        # Normalizing the email lowercases the domain part of it, which prevents multiple registrations with same email.
        # This functionality is only available in the BaseUserManager class.

        if not email:
            raise ValueError(_("The user must have an email address."))
        if not username:
            raise ValueError(_("The user must have a username."))

        email = self.normalize_email(email)
        username = self.username
        user = self.model(
            email=self.normalize_email(email),
            username=username,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password):
        user = self.create_user(email, username, password)
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user
