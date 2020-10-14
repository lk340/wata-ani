from django import forms
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.core.exceptions import ValidationError

from . import models


class UserCreationForm(forms.ModelForm):
    # Form for creating new users.
    # Includes all required fields, plus a repeated password.

    password1 = forms.CharField(label="Password", widget=forms.PasswordInput)
    password2 = forms.CharField(
        label="Password confirmation", widget=forms.PasswordInput
    )

    class Meta:
        model = models.CustomUser
        fields = ("email", "username")

    def clean_password2(self):
        # Check that the two password entries match
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise ValidationError("Passwords don't match!")
        return password2

    def save(self, commit=True):
        # Save the provided password in hashed format
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user


class UserChangeForm(forms.ModelForm):
    # Form for updating users.
    # Includes all fields in the user but replaces password field with admin's password hash display field.

    password = ReadOnlyPasswordHashField()

    class Meta:
        model = models.CustomUser
        fields = (
            "email", "username", "password", "date_joined", "is_active", "is_admin", "is_staff", "is_superuser", "first_name", "last_name", "biography", "profile_picture"
        )

    def clean_password(self):
        # Regardless of what the user provides, return the initial value.
        # This is done here, rather than on the field, because the
        # field does not have access to the initial value
        return self.initial["password"]


class CustomUserAdmin(UserAdmin):
    form = UserChangeForm
    add_form = UserCreationForm

    # Columns that will be displayed in the admin panel.
    list_display = (
        "email", "username", "date_joined", "last_login", "is_admin", "is_staff", "first_name", "last_name"
    )

    # Affects searchable fields in the search bar in the admin panel.
    search_fields = ("email", "username", "first_name", "last_name")

    readonly_fields = ("date_joined", "last_login")

    # Setting the below to () means that I don't want it.
    #   e.g. I don't want any horizontal filtering options
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()

    # add_fieldsets is not a standard ModelAdmin attribute.
    # UserAdmin overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("email", "username", "password1", "password2", "first_name", "last_name"),
        }),
    )

    # model = models.CustomUser


admin.site.register(models.CustomUser, CustomUserAdmin)
