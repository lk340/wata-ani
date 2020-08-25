import axios from "axios";

import * as AxiosHelpers from "@/utils/api/axios-helpers";

type JWTAccessTokenPayload = {
	exp: number;
	jti: string;
	token_type: string;
	user_id: number;
};

export function decryptAccessToken(accessToken: string): JWTAccessTokenPayload {
	return JSON.parse(atob(accessToken.split(".")[1]));
}

// You only ever need to call checkRefreshJWT() whenever you're
// making an API call that requires an authorization header.

export async function checkRefresh(): Promise<void> {
	try {
		const accessToken = localStorage.access;
		const refreshToken = localStorage.refresh;

		if (accessToken && refreshToken) {
			const _accessTokenExp = decryptAccessToken(accessToken).exp;
			const accessTokenExpirationDate = new Date(_accessTokenExp * 1000);
			const dateTimeRightNow = new Date();

			console.log("Access Token Expiration Date:", accessTokenExpirationDate);
			console.log("Date Time Right Now:", dateTimeRightNow);
			console.log("Date Comparison:", accessTokenExpirationDate < dateTimeRightNow);

			const endpoint = "/api/token/refresh/";
			const data = { refresh: refreshToken };
			const validateStatus = AxiosHelpers.validateStatus;

			if (accessTokenExpirationDate < dateTimeRightNow) {
				const response = await axios.post(endpoint, data, { validateStatus });

				// Success
				if (response.status < 400) {
					console.log(response);
					localStorage.access = response.data.access;
				}
				// Failure
				else {
					// ↓↓↓ //
					// If we enter this area, it means that the refresh token has expired.
					// In that case, we're going to have to remove the tokens from local storage.
					// User must sign in again manually.
					// ↓↓↓ //
					localStorage.removeItem("access");
					localStorage.removeItem("refresh");
					console.log(response);
				}
			}
		}
	} catch (error) {
		// Just in case.
		console.log(error);
	}
}

// export function checkRefreshJWT(): void {
// 	async function REFRESH(): Promise<void> {
// 		try {
// 			if (accessToken && refreshToken) {
// 				const dateTimeRightNow = new Date();
// 				const _exp = decryptAccessToken(accessToken).exp;
// 				const tokenExpirationDate = new Date(_exp * 1000);

// 				const endpoint = "/api/token/refresh/";
// 				const data = { refresh: localStorage.refresh };

// 				// If the current date is past the access token's expiration date,
// 				// refresh and create a new one.
// 				if (dateTimeRightNow > tokenExpirationDate) {
// 					const response = await axios.post(endpoint, data);
// 					localStorage.access = response.data.access;
// 				}
// 			}
// 		} catch (error) {
// 			// ↓↓↓ //
// 			// If we enter this area, it means that the refresh token has expired.
// 			// In that case, we're going to have to remove the tokens from local storage.
// 			// User must sign in again manually.
// 			// ↓↓↓ //
// 			localStorage.removeItem("access");
// 			localStorage.removeItem("refresh");
// 			console.log(error);
// 		}
// 	}
// 	REFRESH();
// }
