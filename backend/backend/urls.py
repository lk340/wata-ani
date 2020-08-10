from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path("admin/", admin.site.urls),

    # Only for localhost:7000 (dev environment)
    path("signin/", include("rest_framework.urls")),

    # Non-JWT token-based auth
    path("rest-auth/", include("rest_auth.urls")),
    # path("rest-auth/registration/", include("rest_auth.registration.urls")),

    # JWT token-based auth
    path("api/auth/", include("jwt_auth.urls"), name="jwt_auth"),

    # [POST]
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),

    # Users
    path("api/users/", include("users.urls"))
]

if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT
    )
