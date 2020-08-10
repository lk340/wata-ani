from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import ugettext_lazy as _


class CustomUserManager(BaseUserManager):
    # Manager = interface that allows models to perform database queries.
    #   Every model has an underlying manager.
    # This is the manager for our custom user. It makes sure that the email and username fields are required.

    def create_user(self, email, username, password):
        # Normalizing the email lowercases its characters, which prevents multiple registrations with the same email.
        #   This functionality is only available in the BaseUserManager class.

        if not email:
            raise ValueError(_("The user must have an email address."))
        if not username:
            raise ValueError(_("The user must have a username."))

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
