import Cookies from "js-cookie";
import axios from "axios";

type JWTAccessTokenPayload = {
	exp: number;
	jti: string;
	token_type: string;
	user_id: number;
};

export function decryptJWTAccessTokenPayload(accessToken: string): JWTAccessTokenPayload {
	return JSON.parse(atob(accessToken.split(".")[1]));
}

// You only ever need to call checkRefreshJWT() whenever you're
// making an API call that requires an authorization header.

let accessToken = Cookies.get("jacLs1NGQZN07D92L8PVwOi");
const refreshToken = localStorage.refresh;

export const headers = { headers: { Authorization: `Bearer ${accessToken}` } };

export function checkRefreshJWT(): void {
	async function REFRESH(): Promise<void> {
		try {
			if (accessToken && refreshToken) {
				const dateTimeRightNow = new Date();
				const _exp = decryptJWTAccessTokenPayload(accessToken).exp;
				const tokenExpirationDate = new Date(_exp * 1000);

				const endpoint = "/api/token/refresh/";
				const data = { refresh: localStorage.refresh };

				// If the current date is past the access token's expiration date,
				// refresh and create a new one.
				if (dateTimeRightNow > tokenExpirationDate) {
					const response = await axios.post(endpoint, data);
					localStorage.access = response.data.access;
				}
			}
		} catch (error) {
			// ↓↓↓ //
			// If we enter this area, it means that the refresh token has expired.
			// In that case, we're going to have to remove the tokens from local storage.
			// User must sign in again manually.
			// ↓↓↓ //
			localStorage.removeItem("access");
			localStorage.removeItem("refresh");
			console.log(error);
		}
	}
	REFRESH();
}
