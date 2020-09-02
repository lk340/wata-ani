from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from allauth.account.views import confirm_email

urlpatterns = [
    path("admin/", admin.site.urls),

    # Only for localhost:7000 (dev environment)
    path("signin/", include("rest_framework.urls")),

    # AllAuth (user authentication)
    path("accounts/", include("allauth.urls")),
    # path(r"^accounts-rest/registration/account-confirm-email/(?P<key>.+)/$",
    #      confirm_email, name="account_confirm_email"),

    # dj-rest-auth (user authentication)
    path("auth/", include("dj_rest_auth.urls")),
    path("auth/registration/", include("dj_rest_auth.registration.urls")),

    # simple-jwt
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),

    # JWT-based auth
    # path("api/auth/", include("jwt_auth.urls"), name="jwt_auth"),

    # Users
    path("api/users/", include("users.urls")),

    # Tags
    path("api/tags/", include("tags.urls"))
]

if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT
    )
