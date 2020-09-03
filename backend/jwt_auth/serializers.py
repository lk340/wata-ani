from django.contrib.auth import get_user_model, authenticate
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "id", "username", "email", "date_joined", "last_login", "first_name", "last_name", "profile_picture"
        )


class UserRegisterSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField(
        write_only=True,
        style={"input_type": "password"}
    )
    password_confirmation = serializers.CharField(
        write_only=True,
        style={"input_type": "password"},
        label="Confirm password"
    )

    class Meta:
        model = User
        fields = (
            "username",
            "email",
            "password",
            "password_confirmation"
        )
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        username = validated_data["username"]
        email = validated_data["email"]
        password = validated_data["password"]
        password_confirmation = validated_data["password_confirmation"]

        if (email and User.objects.filter(email=email).exclude(username=username).exists()):
            raise serializers.ValidationError({
                "email": "An account associated with that email already exists."
            })

        if password != password_confirmation:
            raise serializers.ValidationError({
                "password": "Your passwords don't match."
            })

        user = User(username=username, email=email)
        user.set_password(password)
        user.save()
        return user


class UserSignInSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError(
            "The username or password you entered was incorrect. Please try again.")
