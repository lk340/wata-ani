import * as React from "react";
import axios from "axios";

import * as Helpers from "@/context/helpers";
import * as Types from "@/utils/types";

type State = {
	username: string;
	email: string;
	currentPassword: string;
	newPassword: string;
	newPasswordConfirm: string;
	usernameError: string;
	emailError: string;
	currentPasswordError: string;
	newPasswordError: string;
	newPasswordConfirmError: string;
};

const initialState = Object.freeze<State>({
	username: "",
	email: "",
	currentPassword: "",
	newPassword: "",
	newPasswordConfirm: "",
	usernameError: "",
	emailError: "",
	currentPasswordError: "",
	newPasswordError: "",
	newPasswordConfirmError: "",
});

export const useNavbarOptionsSettings = Helpers.createUseContext(() => {
	const [navbarOptionsSettings, _setNavbarOptionsSettings] = React.useState<State>({
		...initialState,
	});

	const {
		username,
		email,
		currentPassword,
		newPassword,
		newPasswordConfirm,
		usernameError,
		emailError,
		currentPasswordError,
		newPasswordError,
		newPasswordConfirmError,
	} = navbarOptionsSettings;

	// ====================== //
	// ↓↓↓ Error Handling ↓↓↓ //
	// ====================== //

	React.useEffect(() => handleUsernameError(), [username]);
	React.useEffect(() => handleEmailError(), [email]);
	// React.useEffect(() => handleCurrentPasswordError(), [currentPassword]);
	React.useEffect(() => handleNewPasswordError(), [newPassword]);
	// React.useEffect(() => handleNewPasswordConfirmError(), [newPasswordConfirm]);

	// =============== //
	// ↓↓↓ Setters ↓↓↓ //
	// =============== //

	function setNavbarOptionsSettings(state: Partial<State>): void {
		_setNavbarOptionsSettings({ ...navbarOptionsSettings, ...state });
	}

	function clearErrors(): void {
		setNavbarOptionsSettings({
			usernameError: "",
			emailError: "",
			currentPasswordError: "",
			newPasswordError: "",
			newPasswordConfirmError: "",
		});
	}

	// ================ //
	// ↓↓↓ Handlers ↓↓↓ //
	// ================ //

	// --- Error Handlers --- //
	function handleUsernameError(): void {
		if (username === "") {
			setNavbarOptionsSettings({ usernameError: "" });
		} else if (username.length > 15) {
			setNavbarOptionsSettings({ usernameError: "Max 15 characters!" });
		} else if (username.length < 15) {
			setNavbarOptionsSettings({ usernameError: "" });
		} else {
			setNavbarOptionsSettings({ usernameError: "" });
		}
	}

	function handleEmailError(): void {
		if (email === "") {
			setNavbarOptionsSettings({ emailError: "" });
		} else if (email.length > 50) {
			setNavbarOptionsSettings({ emailError: "Max 50 characters!" });
		} else if (email.length < 50) {
			setNavbarOptionsSettings({ emailError: "" });
		} else {
			setNavbarOptionsSettings({ emailError: "" });
		}
	}

	// function handleCurrentPasswordError(): void {
	// 	if (currentPassword === "") {
	// 		setNavbarOptionsSettings({ currentPasswordError: "" });
	// 	} else if (currentPassword.length > 500) {
	// 		setNavbarOptionsSettings({ currentPasswordError: "Max 500 characters!" });
	// 	} else if (currentPassword.length < 500) {
	// 		setNavbarOptionsSettings({ currentPasswordError: "" });
	// 	} else {
	// 		setNavbarOptionsSettings({ currentPasswordError: "" });
	// 	}
	// }

	function handleNewPasswordError(): void {
		if (newPassword === "") {
			setNavbarOptionsSettings({ newPasswordError: "" });
		} else if (newPassword !== newPasswordConfirm) {
			setNavbarOptionsSettings({ newPasswordError: "New passwords don't match!" });
		} else {
			setNavbarOptionsSettings({ newPasswordError: "" });
		}
	}

	// function handleNewPasswordConfirmError(): void {
	// 	if (newPasswordConfirm === "") {
	// 		setNavbarOptionsSettings({ newPasswordConfirmError: "You must  set a rating!" });
	// 	} else if (newPasswordConfirm === "0") {
	// 		setNavbarOptionsSettings({ newPasswordConfirmError: "Must be between 1 and 10!" });
	// 	} else if (Number(newPasswordConfirm) < 1) {
	// 		setNavbarOptionsSettings({ newPasswordConfirmError: "Must be between 1 and 10!" });
	// 	} else if (Number(newPasswordConfirm) > 10) {
	// 		setNavbarOptionsSettings({ newPasswordConfirmError: "Must be between 1 and 10!" });
	// 	} else if (!Number(newPasswordConfirm)) {
	// 		setNavbarOptionsSettings({ newPasswordConfirmError: "Must be a number!" });
	// 	} else {
	// 		setNavbarOptionsSettings({ newPasswordConfirmError: "" });
	// 	}
	// }

	// --- Form Handlers --- //
	function handleChange(event: Types.Input, type: keyof State): void {
		const userInput = event.currentTarget.value;
		setNavbarOptionsSettings({ [`${type}`]: userInput });
	}

	function handleSubmit(
		event: Types.Submit,
		currentUserId: number,
		dispatch: Function,
		userErrorsRedux: any,
	): void {
		event.preventDefault();

		function checkNoErrors(): boolean {
			const noUsernameError = usernameError === "";
			const noEmailError = emailError === "";
			// const noCurrentPasswordError = currentPasswordError === "";
			const noNewPasswordError = newPasswordError === "";
			const noNewPasswordConfirmError = newPasswordConfirmError === "";

			return (
				noUsernameError && noEmailError && noNewPasswordError && noNewPasswordConfirmError
			);
		}

		if (currentUserId && checkNoErrors()) {
			const data = {};
		}

		clearErrors();
	}

	// =============== //
	// ↓↓↓ API ↓↓↓ //
	// =============== //

	// =============== //
	// ↓↓↓ Exports ↓↓↓ //
	// =============== //

	const state = navbarOptionsSettings;

	const getters = {};

	const setters = {
		setNavbarOptionsSettings,
	};

	const handlers = {
		handleChange,
		handleSubmit,
	};

	const api = {};

	return {
		navbarOptionsSettings: { state, getters, setters, handlers, api },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<useNavbarOptionsSettings.Provider>{children}</useNavbarOptionsSettings.Provider>
	);
};
