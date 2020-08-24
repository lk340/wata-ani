import os
from datetime import timedelta
from django.core.management.utils import get_random_secret_key

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = ")g$v283hh5j-(82_n^4fac(uv4_0_81a6)9@ctql7i0*n0s4g0"

# SECURITY WARNING: don"t run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "django.contrib.sites",

    # Django REST Framework
    "rest_framework",
    "rest_framework.authtoken",

    # User Authentication
    "dj_rest_auth",
    "dj_rest_auth.registration",

    # Used in tandem with dj_rest_auth for email verification & authentication
    "allauth",
    "allauth.account",
    "allauth.socialaccount",
    # "allauth.socialaccount.providers.facebook",
    # "allauth.socialaccount.providers.google",
    # "allauth.socialaccount.providers.twitter",

    "jwt_auth.apps.JwtAuthConfig",

    # Cross-Origin Resource Sharing for allowing frontend to communicate with backend
    "corsheaders",

    "users.apps.UsersConfig",
]

# ====================== #
# ↓↓↓ REST Framework ↓↓↓ #
# ====================== #

REST_FRAMEWORK = {
    "DEFAULT_PERMISSION_CLASSES": ("rest_framework.permissions.IsAuthenticated",),
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework.authentication.SessionAuthentication",
        # "rest_framework.authentication.TokenAuthentication",
        # "rest_framework_simplejwt.authentication.JWTAuthentication",
        "dj_rest_auth.jwt_auth.JWTCookieAuthentication"
    ),
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.LimitOffsetPagination",
    "PAGE_SIZE": 20,
}

# ========================= #
# ↓↓↓ Custom User Model ↓↓↓ #
# ========================= #

AUTH_USER_MODEL = "users.CustomUser"

# ================= #
# ↓↓↓ REST Auth ↓↓↓ #
# ================= #

SITE_ID = 1
OLD_PASSWORD_FIELD_ENABLED = True
REST_USE_JWT = True
JWT_AUTH_COOKIE = "jacLs1NGQZN07D92L8PVwOi"
# JWT_AUTH_SAMESITE = False
# JWT_AUTH_COOKIE_ENFORCE_CSRF_ON_UNAUTHENTICATED = True

REST_AUTH_SERIALIZERS = {
    "USER_DETAILS_SERIALIZER": "users.serializers.UserSerializer"
}

# ================ #
# ↓↓↓ All Auth ↓↓↓ #
# ================ #

ACCOUNT_AUTHENTICATION_METHOD = "username_email"
ACCOUNT_UNIQUE_EMAIL = True
ACCOUNT_EMAIL_REQUIRED = True
# change "optional" to "mandatory" to mandate email verification.
ACCOUNT_EMAIL_VERIFICATION = "mandatory"
ACCOUNT_CONFIRM_EMAIL_ON_GET = True
# Change these to set custom page to redirect user after email verification.
ACCOUNT_EMAIL_CONFIRMATION_ANONYMOUS_REDIRECT_URL = "/"
ACCOUNT_EMAIL_CONFIRMATION_AUTHENTICATED_REDIRECT_URL = "/"
ACCOUNT_EMAIL_CONFIRMATION_EXPIRE_DAYS = 1
ACCOUNT_LOGIN_ATTEMPTS_LIMIT = 3
ACCOUNT_LOGIN_ATTEMPTS_TIMEOUT = 600
ACCOUNT_LOGIN_ON_EMAIL_CONFIRMATION = True
ACCOUNT_LOGOUT_ON_PASSWORD_CHANGE = True
ACCOUNT_USERNAME_BLACKLIST = (
    "shit", "fuck", "bitch", "ass", "cunt", "bastard", "damn", "penis", "dick", "vagina", "pussy", "labia", "testicles", "tits", "boobs", "breasts", "hentai", "yaoi", "yuri"
)
ACCOUNT_USER_MODEL_EMAIL_FIELD = "email"
ACCOUNT_USER_MODEL_USERNAME_FIELD = "username"
ACCOUNT_USERNAME_REQUIRED = True

# =========== #
# ↓↓↓ JWT ↓↓↓ #
# =========== #

SIMPLE_JWT = {
    # "ACCESS_TOKEN_LIFETIME": timedelta(minutes=5),
    # "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
    "ACCESS_TOKEN_LIFETIME": timedelta(days=1),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=2),
    "ROTATE_REFRESH_TOKENS": True,
    "BLACKLIST_AFTER_ROTATION": True,

    "ALGORITHM": "HS256",
    # "SIGNING_KEY": settings.SECRET_KEY,
    "SIGNING_KEY": get_random_secret_key(),
    "VERIFYING_KEY": None,
    "AUDIENCE": None,
    "ISSUER": None,

    "AUTH_HEADER_TYPES": ("Bearer",),
    "USER_ID_FIELD": "id",
    "USER_ID_CLAIM": "user_id",

    "AUTH_TOKEN_CLASSES": ("rest_framework_simplejwt.tokens.AccessToken", "dj_rest_auth.jwt_auth.JWTCookieAuthentication"),
    "TOKEN_TYPE_CLAIM": "token_type",

    "JTI_CLAIM": "jti",

    "SLIDING_TOKEN_REFRESH_EXP_CLAIM": "refresh_exp",
    "SLIDING_TOKEN_LIFETIME": timedelta(minutes=5),
    "SLIDING_TOKEN_REFRESH_LIFETIME": timedelta(days=1),
}

# ======================= #
# ↓↓↓ Cookie Settings ↓↓↓ #
# ======================= #

CSRF_COOKIE_NAME = "Co6kpjZ4jUn61vnF15QRXu"
CSRF_COOKIE_HTTPONLY = True

SESSION_COOKIE_HTTPONLY = True
SESSION_COOKIE_PATH = "/;HttpOnly"

SESSION_ENGINE = "django.contrib.sessions.backends.signed_cookies"

# ===================== #
# ↓↓↓ Email Service ↓↓↓ #
# ===================== #

EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"

AUTHENTICATION_BACKENDS = (
    # required for logging into Django admin, regardless of "allauth"
    "django.contrib.auth.backends.ModelBackend",
    # adds allauth authentication methods, such as login by email
    "allauth.account.auth_backends.AuthenticationBackend",
)

# ============ #
# ↓↓↓ CORS ↓↓↓ #
# ============ #

# Don"t forget to add "corseheaders.middle.CorsMiddleware" within MIDDLEWARE settings as well.
CORS_ORIGIN_ALLOW_ALL = False

# Whitelists front-end port.
CORS_ORIGIN_WHITELIST = (
    "http://localhost:8000",
)

CORS_ORIGIN_REGEX_WHITELIST = [
    "http://localhost:8000",
]

MIDDLEWARE_CLASSES = (
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.common.BrokenLinkEmailsMiddleware",
)

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "backend.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "backend.wsgi.application"


# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": "wata_ani_test",
        "USER": "wata_ani_test_user",
        "PASSWORD": "password",
        "HOST": "localhost",
        "PORT": "5432",
    }
}


# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

STATIC_URL = "/static/"

# Full path to the directory, where we'd like Django to store our uploaded files.
# For performance reasons, these files are stored in the filesystem and NOT in the database.
MEDIA_ROOT = os.path.join(BASE_DIR, "media")

# Public URL of the directory in which our media files are stored (remember, in the filesystem).
# In other words, it tells Django to search ONLY through the "media" directory to find media files.
MEDIA_URL = "/media/"
