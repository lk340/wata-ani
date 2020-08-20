import axios from "axios";

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

export function register() {
	async function GET(): Promise<void> {
		const response = await axios.get("/user");
		return response.data;
	}
	GET();
}

export function signIn() {
	async function GET(): Promise<void> {
		const response = await axios.get("/user");
		return response.data;
	}
	GET();
}

export function signOut() {
	async function GET(): Promise<void> {
		const response = await axios.get("/user");
		return response.data;
	}
	GET();
}
