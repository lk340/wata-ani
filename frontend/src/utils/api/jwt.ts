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

export const headers = { headers: { Authorization: `Bearer ${localStorage.access}` } };

export function checkRefreshJWT(): void {
	async function REFRESH(): Promise<void> {
		try {
			if (localStorage.access && localStorage.refresh) {
				const exp = decryptJWTAccessTokenPayload(localStorage.access).exp;
				const tokenExpirationDate = new Date(exp * 1000);
				const now = new Date();
				const endpoint = "http://localhost:7000/api/token/refresh/";
				const data = { refresh: localStorage.refresh };
				// ↓↓↓ If the current date is past the access token's expiration date, refresh and create a new one. ↓↓↓ //
				if (now > tokenExpirationDate) {
					const response = await axios.post(endpoint, data, headers);
					localStorage.access = response.data.access;
				}
				headers.headers.Authorization = `Bearer ${localStorage.access}`;
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
