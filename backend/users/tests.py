from django.urls import reverse
from rest_framework import status

from _helpers.test_set_up import TestSetUp


class UserListTestCase(TestSetUp):
    user_list_endpoint = reverse("api-user-list")

    def test_get_users_unauthenticated(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer blahBlahToken")
        response = self.client.get(self.user_list_endpoint)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_get_users_authenticated(self):
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {self.token}")
        response = self.client.get(self.user_list_endpoint)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class UserDetailTestCase(TestSetUp):
    def generate_user_detail_endpoint(self):
        self.user_detail_endpoint = reverse("api-user-detail", kwargs={"pk": self.user.id})

    def test_get_user_unauthenticated(self):
        self.generate_user_detail_endpoint()
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer blahBlahToken")
        response = self.client.get(self.user_detail_endpoint)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_get_user_authenticated(self):
        self.generate_user_detail_endpoint()
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {self.token}")
        response = self.client.get(self.user_detail_endpoint)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_patch_user_unauthenticated(self):
        self.generate_user_detail_endpoint()
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer blahBlahToken")

        response = self.client.get(self.user_detail_endpoint)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

        data = {"username": "foobarUser", "email": "foobar@user.com"}
        response = self.client.patch(self.user_detail_endpoint, data)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_patch_user_authenticated(self):
        self.generate_user_detail_endpoint()
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {self.token}")

        response = self.client.get(self.user_detail_endpoint)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["username"], "testUser")
        self.assertEqual(response.data["email"], "test@user.com")

        data = {"username": "foobarUser", "email": "foobar@user.com"}
        response = self.client.patch(self.user_detail_endpoint, data)
        self.assertEqual(response.status_code, status.HTTP_202_ACCEPTED)
        self.assertEqual(response.data["username"], "foobarUser")
        self.assertEqual(response.data["email"], "foobar@user.com")

    def test_delete_user_unauthenticated(self):
        self.generate_user_detail_endpoint()
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer blahBlahToken")
        response = self.client.delete(self.user_detail_endpoint)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_delete_user_authenticated(self):
        self.generate_user_detail_endpoint()
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {self.token}")
        response = self.client.delete(self.user_detail_endpoint)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(response.data["detail"], "Your account has been successfully deleted.")
