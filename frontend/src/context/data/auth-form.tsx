import * as React from "react";
import axios from "axios";

import * as Helpers from "@/context/helpers";

// axios.defaults.xsrfHeaderName = "X-CSRFToken"
// axios.defaults.xsrfCookieName = "CSRFToken"
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
		handleUsernameChange,
		handleEmailChange,
		handlePasswordChange,
		handlePasswordConfirmationChange,
		handleSubmit,
	};

	const api = {};

	return {
		authForm: { state, getters, setters, handlers, api },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <useAuthFormContext.Provider>{children}</useAuthFormContext.Provider>;
};
