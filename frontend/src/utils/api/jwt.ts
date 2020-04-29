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

export function checkRefreshJWT(): void {
	async function REFRESH(): Promise<void> {
		try {
			if (localStorage.access && localStorage.refresh) {
				const exp = decryptJWTAccessTokenPayload(localStorage.access).exp;
				const tokenExpirationDate = new Date(exp * 1000);
				const now = new Date();
				const endpoint = "http://localhost:7000/api/token/refresh/";
				const data = { refresh: localStorage.refresh };
				const headers = { headers: { Authorization: `Bearer ${localStorage.access}` } };
				if (now > tokenExpirationDate) {
					const response = await axios.post(endpoint, data, headers);
					localStorage.access = response.data.access;
				}
			}
		} catch (error) {
			console.log("Error:", error);
		}
	}
	REFRESH();
}
