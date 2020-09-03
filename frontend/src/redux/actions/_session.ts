import * as Gatsby from "gatsby";
import axios from "axios";

import * as AxiosHelpers from "@/utils/api/axios-helpers";

import { clearErrors } from "./_clear_errors";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const SIGN_OUT_CURRENT_USER = "SIGN_OUT_CURRENT_USER";
export const SESSION_ERRORS = "SESSION_ERRORS";

const validateStatus = AxiosHelpers.validateStatus;

// ========================== //
// ↓↓↓ Register / Sign In ↓↓↓ //
// ========================== //

export type CurrentUser = {
	id: number | null;
	username: string | null;
	email: string | null;
	date_joined: string | null;
	last_login: string | null;
	first_name: string | null;
	last_name: string | null;
	profile_picture: string | null;
};

// --- Used for both registration and sign in logic. --- //
export function receiveCurrentUser(currentUser: CurrentUser) {
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

// ============== //
// ↓↓↓ Errors ↓↓↓ //
// ============== //

export function sessionErrors(errors: string[]) {
	return {
		type: SESSION_ERRORS,
		errors,
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

async function POST(
	type: "register" | "sign in",
	endpoint: string,
	data: RegisterData | SignInData,
	dispatch: Function,
	authErrors: string[],
): Promise<void> {
	try {
		const response = await axios.post(endpoint, data, { validateStatus });

		// Success
		if (response.status < 400) {
			localStorage.refresh = response.data.refresh_token;
			localStorage.access = response.data.access_token;
			dispatch(receiveCurrentUser(response.data.user));
			if (authErrors.length > 0) dispatch(clearErrors());
			Gatsby.navigate("/");
		}
		// Failure
		else {
			if (type === "register") {
				console.log("Failure:", Object.values(response.data));

				const errors: string[] = [];
				Object.values(response.data).forEach((data: string[]) => errors.push(data[0]));
				dispatch(sessionErrors(errors));
			} else {
				dispatch(sessionErrors(response.data.non_field_errors));
			}
		}
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

// --- Registration --- //

export function register(
	data: RegisterData,
	dispatch: Function,
	authErrors: string[],
): void {
	// const endpoint = "/auth/registration/";
	const endpoint = "/api/auth/register/";
	POST("register", endpoint, data, dispatch, authErrors);
}

// --- Sign In --- //

export function signIn(data: SignInData, dispatch: Function, authErrors: string[]) {
	// const endpoint = "/auth/login/";
	const endpoint = "/api/auth/signin/";
	POST("sign in", endpoint, data, dispatch, authErrors);
}

// --- Sign Out --- //

export function signOut(dispatch: Function) {
	async function POST(): Promise<void> {
		try {
			if (localStorage.refresh) delete localStorage["refresh"];
			if (localStorage.access) delete localStorage["access"];

			dispatch(signOutCurrentUser());
		} catch (error) {
			// Dev debug log
			console.log(error);
		}
	}
	POST();
}
