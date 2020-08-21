import * as React from "react";
import axios from "axios";

import * as Helpers from "@/context/helpers";
import * as FormTypes from "@/utils/types/form";
import * as AuthTypes from "@/components/auth-form/auth-form.types";
import * as Actions from "@/redux/actions";

type User = {
	id: number;
	username: string;
	email: string;
	date_joined: string;
	last_login: string;
	first_name: string;
	last_name: string;
	profile_picture: string;
};

type State = {
	username: string;
	email: string;
	password: string;
	passwordConfirmation: string;
	revealPassword: boolean;
	errors: string[];
	user: User | null;
};

const initialState = Object.freeze<State>({
	username: "",
	email: "",
	password: "",
	passwordConfirmation: "",
	revealPassword: false,
	errors: [],
	user: null,
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

	function setUser(userId: number): Promise<void> {
		async function GET() {
			try {
				const response = await axios.get(`/api/users/${userId}/`);
				setAuthForm({ user: response.data });
			} catch (error) {
				console.log(error);
			}
		}
		return GET();
	}

	// =============== //
	// ↓↓↓ Handlers ↓↓↓ //
	// =============== //

	function handleUsernameOrEmailChange(event: FormTypes.Input): void {
		const usernameOrEmail = event.currentTarget.value;
		setAuthForm({ username: usernameOrEmail });
	}

	function handleUsernameChange(event: FormTypes.Input): void {
		const username = event.currentTarget.value;
		setAuthForm({ username });
	}

	function handleEmailChange(event: FormTypes.Input): void {
		const email = event.currentTarget.value;
		setAuthForm({ email });
	}

	function handlePasswordChange(event: FormTypes.Input): void {
		const password = event.currentTarget.value;
		setAuthForm({ password });
	}

	function handlePasswordConfirmationChange(event: FormTypes.Input): void {
		const passwordConfirmation = event.currentTarget.value;
		setAuthForm({ passwordConfirmation });
	}

	function handleSubmit(
		event: FormTypes.Submit,
		formType: AuthTypes.FormType,
		dispatch: Function,
	): void {
		event.preventDefault();

		if (formType === "Registration") {
			const data = {
				username: authForm.username,
				email: authForm.email,
				password1: authForm.password,
				password2: authForm.passwordConfirmation,
			};
			Actions.Session.register(data, dispatch);
		} else {
			const data = {
				username: authForm.username,
				password: authForm.password,
			};
			Actions.Session.signIn(data, dispatch);
		}
	}

	// =============== //
	// ↓↓↓ Exports ↓↓↓ //
	// =============== //

	const state = authForm;

	const getters = {};

	const setters = {
		setAuthForm,
		toggleRevealPassword,
		setUser,
	};

	const handlers = {
		handleUsernameOrEmailChange,
		handleUsernameChange,
		handleEmailChange,
		handlePasswordChange,
		handlePasswordConfirmationChange,
		handleSubmit,
	};

	return {
		authForm: { state, getters, setters, handlers },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <useAuthFormContext.Provider>{children}</useAuthFormContext.Provider>;
};
