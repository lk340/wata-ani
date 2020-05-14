from django.contrib.auth import get_user_model
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from . import serializers

User = get_user_model()


class UserSignUp(generics.GenericAPIView):
    serializer_class = serializers.UserSignUpSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        token = {
            "refresh": str(refresh),
            "access": str(refresh.access_token)
        }
        return Response({
            "user": serializers.UserSerializer(user, context=self.get_serializer_context()).data,
            "access_token": token["access"],
            "refresh_token": token["refresh"],
        })


class UserSignIn(generics.GenericAPIView):
    serializer_class = serializers.UserSignInSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        refresh = RefreshToken.for_user(user)
        token = {
            "refresh": str(refresh),
            "access": str(refresh.access_token)
        }
        return Response({
            "user": serializers.UserSerializer(user, context=self.get_serializer_context()).data,
            "access_token": token["access"],
            "refresh_token": token["refresh"],
        })
