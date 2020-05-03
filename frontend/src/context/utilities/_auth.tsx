import * as React from "react";
import axios from "axios";

import * as Helpers from "@/context/helpers";
import * as JWT from "@/utils/api/jwt";

type Data = {
	username: string;
	email?: string;
	password: string;
	password_confirmation?: string;
};

export type CurrentUser = {
	id: number;
	username: string;
	email: string;
};

type InputTypes = {
	username: string;
	email: string;
	password: string;
	passwordConfirmation: string;
};

type State = {
	currentUser: CurrentUser | null;
	username: string;
	email: string;
	password: string;
	passwordConfirmation: string;
	showPassword: boolean;
	disabled: boolean;
};

const initialState = Object.freeze<State>({
	currentUser: null,
	username: "",
	email: "",
	password: "",
	passwordConfirmation: "",
	showPassword: false,
	disabled: true,
});

export const useAuthContext = Helpers.createUseContext(() => {
	const [auth, _setAuth] = React.useState<State>({ ...initialState });

	// --- Getters --- //

	const getCurrentUser = (): CurrentUser | null => auth.currentUser;

	// --- Setters --- //

	const setAuth = (state: Partial<State>) => _setAuth({ ...auth, ...state });

	function setCurrentUser(id: number): void {
		async function GET(): Promise<void> {
			try {
				JWT.checkRefreshJWT();
				const endpoint = `http://localhost:7000/api/users/${id}/`;
				const headers = { headers: { Authorization: `Bearer ${localStorage.access}` } };
				const response = await axios.get(endpoint, headers);
				setAuth({ currentUser: response.data });
			} catch (error) {
				console.log("Error:", error);
			}
		}
		GET();
	}

	function setInput(type: keyof InputTypes): Function {
		return function inputType(event: React.ChangeEvent<HTMLInputElement>): void {
			const userInput = event.currentTarget.value;
			switch (type) {
				case "username":
					setAuth({ username: userInput });
					break;
				case "email":
					setAuth({ email: userInput });
					break;
				case "password":
					setAuth({ password: userInput });
					break;
				case "passwordConfirmation":
					setAuth({ passwordConfirmation: userInput });
					break;
				default:
					break;
			}
		};
	}

	const setShowPassword = (showPassword: boolean) => setAuth({ showPassword });

	const setDisabled = (disabled: boolean) => setAuth({ disabled });

	// --- API --- //

	function POST(data: Data, endpoint: string): void {
		async function AUTH(): Promise<void> {
			try {
				const response = await axios.post(endpoint, data);
				const accessToken = response.data.access_token;
				const refreshToken = response.data.refresh_token;
				localStorage.access = accessToken;
				localStorage.refresh = refreshToken;
				const currentUserID = response.data.user.id;
				setCurrentUser(currentUserID);
			} catch (error) {
				console.log("Error:", error);
			}
		}
		AUTH();
	}

	function signIn(username: string, password: string): void {
		const data = { username, password };
		const endpoint = "http://localhost:7000/api/auth/signin/";
		POST(data, endpoint);
	}

	function signUp(
		username: string,
		email: string,
		password: string,
		password_confirmation: string,
	): void {
		const data = { username, email, password, password_confirmation };
		const endpoint = "http://localhost:7000/api/auth/signup/";
		POST(data, endpoint);
	}

	function signOut(): void {
		if (localStorage.access && localStorage.refresh) {
			localStorage.removeItem("access");
			localStorage.removeItem("refresh");
		}
		setAuth({ currentUser: null });
	}

	function deleteAccount(): void {
		async function DELETE(): Promise<void> {
			try {
				const endpoint = `http://localhost:7000/api/users/${auth.currentUser.id}/`;
				const headers = { headers: { Authorization: `Bearer ${localStorage.access}` } };
				await axios.delete(endpoint, headers);
				signOut();
			} catch (error) {
				console.log("Error:", error);
			}
		}
		DELETE();
	}

	function changePassword(
		old_password: string,
		new_password1: string,
		new_password2: string,
	): void {
		async function POST(): Promise<void> {
			try {
				const endpoint = "http://localhost:7000/rest-auth/password/change/";
				const data = { old_password, new_password1, new_password2 };
				const headers = { headers: { Authorization: `Bearer ${localStorage.access}` } };
				const response = await axios.post(endpoint, data, headers);
				console.log(response.data.detail);
			} catch (error) {
				console.log("Errors:", error);
			}
		}
		POST();
	}

	// --- Exports --- //

	const state = auth;

	const getters = {
		getCurrentUser,
	};

	const setters = {
		setAuth,
		setCurrentUser,
		setInput,
		setShowPassword,
		setDisabled,
	};

	const api = {
		signIn,
		signUp,
		signOut,
		deleteAccount,
		changePassword,
	};

	return {
		auth: { state, getters, setters, api },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <useAuthContext.Provider>{children}</useAuthContext.Provider>;
};
