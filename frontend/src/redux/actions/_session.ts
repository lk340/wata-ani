import axios from "axios";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const SIGN_OUT_CURRENT_USER = "SIGN_OUT_CURRENT_USER";
export const SESSION_ERRORS = "SESSION_ERRORS";

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

// --- Used for both registration and sign in logic. --- //
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

function sessionErrors(errors: any) {
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
	endpoint: string,
	data: RegisterData | SignInData,
	dispatch: Function,
): Promise<void> {
	try {
		const validateStatus = (status: number) => status >= 200 && status < 500;
		const response = await axios.post(endpoint, data, { validateStatus });

		// Success
		if (response.status < 400) {
			localStorage.refresh = response.data.refresh_token;
			dispatch(receiveCurrentUser(response.data.user));
		}
		// Failure
		else dispatch(sessionErrors(response.data.errors));
	} catch (error) {
		// Just in case.
		console.log(error);
	}
}

// --- Registration --- //

export function register(data: RegisterData, dispatch: Function): void {
	const endpoint = "/auth/registration/";
	POST(endpoint, data, dispatch);
}

// --- Sign In --- //

export function signIn(data: SignInData, dispatch: Function) {
	const endpoint = "/auth/login/";
	POST(endpoint, data, dispatch);

	console.log("Signed In!");
}

// --- Sign Out --- //

export function signOut(dispatch: Function) {
	async function POST(): Promise<void> {
		try {
			const endpoint = "/auth/logout/";
			const response = await axios.post(endpoint);

			if (localStorage.refresh) delete localStorage["refresh"];

			debugger;

			dispatch(signOutCurrentUser());
		} catch (error) {
			// Just in case.
			console.log(error);
		}
	}
	POST();
}
