from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from . import models


class CustomUserAdmin(UserAdmin):
    list_display = (
        "email", "username", "date_joined", "last_login", "first_name", "last_name", "is_admin", "is_staff"
    )

    # Affects searchable fields in the search bar in the admin panel.
    search_fields = ("email", "username", "first_name", "last-name")

    readonly_fields = ("date_joined", "last_login")

    # Setting the below to () means that I don't want it.
    #   e.g. I don't want any horizontal filtering options
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()

    # model = models.CustomUser


admin.site.register(models.CustomUser, CustomUserAdmin)
