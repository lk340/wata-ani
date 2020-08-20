import axios from "axios";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const SIGN_OUT_CURRENT_USER = "SIGN_OUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

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

// ============== //
// ↓↓↓ Errors ↓↓↓ //
// ============== //

function receiveErrors(errors: any) {
	return {
		type: RECEIVE_ERRORS,
		errors,
	};
}

export function clearErrors() {
	return {
		type: CLEAR_ERRORS,
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
	endpoint: string,
	data: RegisterData | SignInData,
	dispatch: Function,
): Promise<void> {
	const validateStatus = (status: number) => status >= 200 && status < 500;
	try {
		const response = await axios.post(endpoint, data, { validateStatus });
		if (response.status < 400) dispatch(receiveCurrentUser(response.data.user));
		else dispatch(receiveErrors(response.data.errors));
	} catch (error) {
		// Just in case. Only really useful for development purposes.
		console.log(error);
	}
}

export function register(dispatch: Function, data: RegisterData): void {
	const endpoint = "/auth/registration/";
	POST(endpoint, data, dispatch);
}

export function signIn(dispatch: Function, data: SignInData) {
	const endpoint = "/auth/login/";
	POST(endpoint, data, dispatch);
}

export function signOut(dispatch: Function) {
	async function POST(): Promise<void> {
		try {
			const endpoint = "/auth/logout/";
			const response = await axios.post(endpoint);
			dispatch(signOutCurrentUser());
		} catch (error) {
			// Just in case. Only really useful for development purposes.
			console.log(error);
		}
	}
	POST();
}
