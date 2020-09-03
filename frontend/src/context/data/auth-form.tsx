import * as React from "react";

import * as Helpers from "@/context/helpers";
import * as Actions from "@/redux/actions";
import * as Types from "@/utils/types";
import { FormType } from "@/components/auth-form/auth-form";

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

type State = {
	username: string;
	email: string;
	password: string;
	passwordConfirmation: string;
	revealPassword: boolean;
	errors: string[];
	currentUser: CurrentUser | null;
};

const initialState = Object.freeze<State>({
	username: "",
	email: "",
	password: "",
	passwordConfirmation: "",
	revealPassword: false,
	errors: [],
	currentUser: null,
});

export const useAuthFormContext = Helpers.createUseContext(() => {
	const [authForm, _setAuthForm] = React.useState<State>({ ...initialState });

	// =============== //
	// ↓↓↓ Setters ↓↓↓ //
	// =============== //

	const setAuthForm = (state: Partial<State>) => _setAuthForm({ ...authForm, ...state });

	function toggleRevealPassword(): void {
		setAuthForm({ revealPassword: !authForm.revealPassword });
	}

	function setUser(currentUser: CurrentUser): void {
		setAuthForm({ currentUser });
	}

	// =============== //
	// ↓↓↓ Handlers ↓↓↓ //
	// =============== //

	function handleUsernameOrEmailChange(event: Types.Input): void {
		const usernameOrEmail = event.currentTarget.value;
		setAuthForm({ username: usernameOrEmail });
	}

	function handleUsernameChange(event: Types.Input): void {
		const username = event.currentTarget.value;
		setAuthForm({ username });
	}

	function handleEmailChange(event: Types.Input): void {
		const email = event.currentTarget.value;
		setAuthForm({ email });
	}

	function handlePasswordChange(event: Types.Input): void {
		const password = event.currentTarget.value;
		setAuthForm({ password });
	}

	function handlePasswordConfirmationChange(event: Types.Input): void {
		const passwordConfirmation = event.currentTarget.value;
		setAuthForm({ passwordConfirmation });
	}

	function handleSubmit(
		event: Types.Submit,
		formType: FormType,
		dispatch: Function,
		authErrors: string[],
	): void {
		event.preventDefault();

		if (formType === "Registration") {
			const data = {
				username: authForm.username,
				email: authForm.email,
				password1: authForm.password,
				password2: authForm.passwordConfirmation,
			};
			Actions.Session.register(data, dispatch, authErrors);
		} else {
			const data = {
				username: authForm.username,
				password: authForm.password,
			};
			Actions.Session.signIn(data, dispatch, authErrors);
		}
	}

	// =============== //
	// ↓↓↓ Exports ↓↓↓ //
	// =============== //

	const state = authForm;

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
		authForm: { state, setters, handlers },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <useAuthFormContext.Provider>{children}</useAuthFormContext.Provider>;
};
