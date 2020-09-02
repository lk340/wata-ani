from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

User = get_user_model()


class TestSetUp(APITestCase):
    def setUp(self):
        un, em, pw = "testUser", "test@user.com", "testPassword"
        self.user = User.objects.create_user(username=un, email=em, password=pw)

        # sign_in_endpoint = reverse("api-auth-sign-in")
        sign_in_endpoint = reverse("user_detail")
        credentials = {"username": "testUser", "password": "testPassword"}

        self.user.is_active = False
        self.user.save()
        inactive_response = self.client.post(sign_in_endpoint, credentials)
        self.assertEqual(inactive_response.status_code,status.HTTP_400_BAD_REQUEST)

        self.user.is_active = True
        self.user.save()
        active_response = self.client.post(sign_in_endpoint, credentials)
        self.assertEqual(active_response.status_code, status.HTTP_200_OK)

        self.token = active_response.data["access_token"]
