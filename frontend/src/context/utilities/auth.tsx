import * as React from "react";
import * as Gatsby from "gatsby";
import axios from "axios";

import * as Helpers from "@/context/helpers";
import * as JWT from "@/utils/api/jwt";
import * as AuthTypes from "@/components/auth/auth.types";

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
} | null;

type State = {
	formType: AuthTypes.AuthFormType;
	username: string;
	email: string;
	password: string;
	passwordConfirmation: string;
	revealPassword: boolean;
	registrationError: string;
	signInError: string;
	currentUser: CurrentUser;
};

const initialState = Object.freeze<State>({
	formType: "register",
	username: "",
	email: "",
	password: "",
	passwordConfirmation: "",
	revealPassword: false,
	registrationError: "",
	signInError: "",
	currentUser: null,
});

export const useAuthContext = Helpers.createUseContext(() => {
	const [auth, _setAuth] = React.useState<State>({ ...initialState });

	// =============== //
	// ↓↓↓ Getters ↓↓↓ //
	// =============== //

	const getCurrentUser = (): CurrentUser => auth.currentUser;

	// =============== //
	// ↓↓↓ Setters ↓↓↓ //
	// =============== //

	const setAuth = (state: Partial<State>) => _setAuth({ ...auth, ...state });

	function setFormType(formType: AuthTypes.AuthFormType): void {
		setAuth({ formType });
	}

	function toggleRevealPassword(): void {
		setAuth({ revealPassword: !auth.revealPassword });
	}

	function clearErrors(): void {
		setAuth({
			registrationError: "",
			signInError: "",
		});
	}

	function setCurrentUser(id: number): void {
		async function GET(): Promise<void> {
			try {
				JWT.checkRefreshJWT();
				const endpoint = `http://localhost:7000/api/users/${id}/`;
				const response = await axios.get(endpoint, JWT.headers);
				setAuth({ currentUser: response.data });
				Gatsby.navigate("/dashboard");
			} catch (error) {
				console.log(error);
			}
		}
		GET();
	}

	// ================ //
	// ↓↓↓ Handlers ↓↓↓ //
	// ================ //

	function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>): void {
		const userInput = event.currentTarget.value;
		setAuth({ username: userInput });
	}

	function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>): void {
		const userInput = event.currentTarget.value;
		setAuth({ email: userInput });
	}

	function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>): void {
		const userInput = event.currentTarget.value;
		setAuth({ password: userInput });
	}

	function handlePasswordConfirmationChange(
		event: React.ChangeEvent<HTMLInputElement>,
	): void {
		const userInput = event.currentTarget.value;
		setAuth({ passwordConfirmation: userInput });
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
		event.preventDefault();
		if (auth.formType === "register") {
			register(auth.username, auth.email, auth.password, auth.passwordConfirmation);
		} else {
			signIn(auth.username, auth.password);
		}
	}

	// =========== //
	// ↓↓↓ API ↓↓↓ //
	// =========== //

	async function POST(
		endpoint: string,
		data: Data,
		formType: AuthTypes.AuthFormType,
	): Promise<void> {
		try {
			function validateStatus(status: number) {
				return status >= 200 && status < 500;
			}

			const response = await axios.post(endpoint, data, { validateStatus });

			clearErrors();

			const status = response.status;
			if (status >= 400 && status < 500) {
				if (formType === "register") setAuth({ registrationError: response.data.error });
				else setAuth({ signInError: response.data.non_field_errors });
			} else {
				localStorage.access = response.data.access_token;
				localStorage.refresh = response.data.refresh_token;
				const currentUserID = response.data.user.id;
				setCurrentUser(currentUserID);
			}
		} catch (error) {
			console.log(error);
		}
	}

	function register(
		username: string,
		email: string,
		password: string,
		password_confirmation: string,
	): void {
		const data = { username, email, password, password_confirmation };
		const endpoint = "http://localhost:7000/api/auth/register/";
		POST(endpoint, data, "register");
	}

	function signIn(username: string, password: string): void {
		const endpoint = "http://localhost:7000/api/auth/signin/";
		const data = { username, password };
		POST(endpoint, data, "sign in");
	}

	function signOut(): void {
		if (localStorage.access && localStorage.refresh) {
			localStorage.removeItem("access");
			localStorage.removeItem("refresh");
		}
		setAuth({ currentUser: null });
		Gatsby.navigate("/");
	}

	function deleteAccount(): void {
		async function DELETE(): Promise<void> {
			try {
				if (auth.currentUser) {
					const endpoint = `http://localhost:7000/api/users/${auth.currentUser.id}/`;
					await axios.delete(endpoint, JWT.headers);
					signOut();
				}
			} catch (error) {
				console.log(error);
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
				const response = await axios.post(endpoint, data, JWT.headers);
				console.log(response.data.detail);
			} catch (error) {
				console.log(error);
			}
		}
		POST();
	}

	// =============== //
	// ↓↓↓ Exports ↓↓↓ //
	// =============== //

	const state = auth;

	const getters = {
		getCurrentUser,
	};

	const setters = {
		setAuth,
		setFormType,
		setCurrentUser,
		toggleRevealPassword,
	};

	const handlers = {
		handleUsernameChange,
		handleEmailChange,
		handlePasswordChange,
		handlePasswordConfirmationChange,
		handleSubmit,
	};

	const api = {
		register,
		signIn,
		signOut,
		deleteAccount,
		changePassword,
	};

	return {
		auth: { state, getters, setters, handlers, api },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <useAuthContext.Provider>{children}</useAuthContext.Provider>;
};
