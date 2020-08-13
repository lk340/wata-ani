import * as React from "react";
import axios from "axios";

import * as Helpers from "@/context/helpers";

// axios.defaults.xsrfHeaderName = "X-CSRFToken"
// axios.defaults.xsrfCookieName = "6kpjZ4jUn61vnF15QRXuC"
// axios.defaults.withCredentials = true

type State = {
	username: string;
	email: string;
	password: string;
	passwordConfirmation: string;
	revealPassword: boolean;
};

const initialState = Object.freeze<State>({
	username: "",
	email: "",
	password: "",
	passwordConfirmation: "",
	revealPassword: false,
});

export const useAuthFormContext = Helpers.createUseContext(() => {
	const [authForm, _setAuthForm] = React.useState<State>({ ...initialState });

	// =============== //
	// ↓↓↓ Getters ↓↓↓ //
	// =============== //

	// =============== //
	// ↓↓↓ Setters ↓↓↓ //
	// =============== //

	const setAuthForm = (state: Partial<State>) => _setAuthForm({ ...authForm, ...state });

	function toggleRevealPassword(): void {
		setAuthForm({ revealPassword: !authForm.revealPassword });
	}

	// =============== //
	// ↓↓↓ Handlers ↓↓↓ //
	// =============== //

	function handleUsernameOrEmailChange(event: React.ChangeEvent<HTMLInputElement>): void {
		const usernameOrEmail = event.currentTarget.value;
		setAuthForm({ username: usernameOrEmail });
	}

	function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>): void {
		const username = event.currentTarget.value;
		setAuthForm({ username });
	}

	function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>): void {
		const email = event.currentTarget.value;
		setAuthForm({ email });
	}

	function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>): void {
		const password = event.currentTarget.value;
		setAuthForm({ password });
	}

	function handlePasswordConfirmationChange(
		event: React.ChangeEvent<HTMLInputElement>,
	): void {
		const passwordConfirmation = event.currentTarget.value;
		setAuthForm({ passwordConfirmation });
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
		event.preventDefault();

		console.log("Submitted!");
	}

	// =============== //
	// ↓↓↓ API ↓↓↓ //
	// =============== //

	type RegisterData = {
		username: string;
		email: string;
		password1: string;
		password2: string;
	};

	function register(
		username: string,
		email: string,
		password1: string,
		password2: string,
	): Promise<void> {
		const data: RegisterData = { username, email, password1, password2 };
		async function POST() {
			const response = await axios.post("http://localhost:7000/auth/registration/");
			console.log(response.data);
		}
		return POST();
	}

	type SignInData = {
		username: string;
		password: string;
	};

	function signIn(username: string, password: string): Promise<void> {
		const data: SignInData = { username, password };
		async function POST() {
			const response = await axios.post("http://localhost:7000/auth/login/");
			console.log(response.data);
		}
		return POST();
	}

	// =============== //
	// ↓↓↓ Exports ↓↓↓ //
	// =============== //

	const state = authForm;

	const getters = {};

	const setters = {
		setAuthForm,
		toggleRevealPassword,
	};

	const handlers = {
		handleUsernameOrEmailChange,
		handleUsernameChange,
		handleEmailChange,
		handlePasswordChange,
		handlePasswordConfirmationChange,
		handleSubmit,
	};

	const api = {
		register,
		signIn,
	};

	return {
		authForm: { state, getters, setters, handlers, api },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <useAuthFormContext.Provider>{children}</useAuthFormContext.Provider>;
};
