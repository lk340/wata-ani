import axios from "axios";
import Cookies from "js-cookie";

import * as AuthTypes from "@/components/auth-form/auth-form.types";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const SIGN_OUT_CURRENT_USER = "SIGN_OUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

// ========================== //
// ↓↓↓ Register / Sign In ↓↓↓ //
// ========================== //

export type CurrentUser = {
	id: number;
	username: string;
	email: string;
	date_joined: string;
	last_login: string;
	first_name: string;
	last_name: string;
	profile_picture: string;
};

function receiveCurrentUser(currentUser: CurrentUser) {
	return {
		type: RECEIVE_CURRENT_USER,
		currentUser,
	};
}

// ================ //
// ↓↓↓ Sign Out ↓↓↓ //
// ================ //

function signOutCurrentUser() {
	return {
		type: SIGN_OUT_CURRENT_USER,
	};
}

// ============================= //
// ↓↓↓ Thunk Action Creators ↓↓↓ //
// ============================= //

type RegisterData = {
	username: string;
	email: string;
	password1: string;
	password2: string;
};

type SignInData = {
	username: string;
	password: string;
};

function POST(
	formType: AuthTypes.FormType,
	endpoint: string,
	data: RegisterData | SignInData,
): Promise<void> {
	async function API() {
		try {
			const validateStatus = (status: number) => status >= 200 && status < 500;
			const response = await axios.post(endpoint, data, { validateStatus });

			const status = response.status;
			if (status >= 400 && status < 500) {
				// Error Handling
				const responseErrors = Object.values(response.data) as string[];
				setAuthForm({ errors: responseErrors });

				console.log("Auth Errors:", authForm.errors);
				console.log("Response Errors:", responseErrors);
			} else {
				// Success handling
				if (formType === "Registration") {
					console.log("Response:", response);
				} else {
					Cookies.set("jacLs1NGQZN07D92L8PVwOi", response.data.access_token);
					localStorage.rt = response.data.refresh_token;
					setAuthForm({ user: response.data.user });

					console.log("LS Refresh Token:", localStorage.rt);
					console.log("Auth Form User:", authForm.user);
					console.log(
						"JWT Access Token:",
						JWT.decryptJWTAccessTokenPayload(Cookies.get("jacLs1NGQZN07D92L8PVwOi")),
					);
					console.log("Logged In!");
				}
			}
		} catch (error) {
			// Catching error (just in case)
			console.log(error);
		}
	}
	return API();
}

export function register(data: RegisterData) {
	async function POST(): Promise<void> {
		const response = await axios.get("/auth/registration/", { data });
		return response.data;
	}
	POST();
}

export function signIn(data: SignInData) {
	async function POST(): Promise<void> {
		const response = await axios.get("/auth/sign-in/", { data });
		return response.data;
	}
	POST();
}

export function signOut(id: number) {
	async function POST(): Promise<void> {
		const response = await axios.get(`/auth/sign-out/${id}/`);
		return response.data;
	}
	POST();
}
