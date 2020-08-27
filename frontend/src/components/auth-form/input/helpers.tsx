import * as React from "react";

import * as Animations from "@/utils/style/animations";

import * as Styled from "./input.styled";

import { FormType } from "../auth-form";
import { InputType } from "./index";

// Hides or shows certain input fields depending on whether we're dealing
// with a registration form or a sign in form.
export function generateDisplay(formType: FormType, inputType: InputType) {
	switch (true) {
		case formType === "Registration" && inputType === "Username Or Email":
			return "none";

		case formType === "Sign In" && inputType === "Username":
			return "none";

		case formType === "Sign In" && inputType === "Email":
			return "none";

		case formType === "Sign In" && inputType === "Confirm Password":
			return "none";

		default:
			return "grid";
	}
}

// Shows the icon that corresponds with the specific input field type.
// 	e.g. Username or Email field, Username input field, Email input field,
//	Password input field, Confirm Password input field.
export function generateIcon(inputType: InputType) {
	switch (inputType) {
		case "Username Or Email":
			return <Styled.InputIconUsername />;

		case "Username":
			return <Styled.InputIconUsername />;

		case "Email":
			return <Styled.InputIconEmail />;

		default:
			return <Styled.InputIconPassword />;
	}
}

// Renders specific input field depending on input field type.
export const Field = (
	inputType: InputType,
	onChange: React.ChangeEventHandler,
	formType: FormType,
	windowWidth: number,
	windowHeight: number,
	revealPassword: boolean,
) => {
	const animateInputText = Animations.text();

	let field;
	switch (inputType) {
		case "Username Or Email":
			field = (
				<Styled.InputUsernameOrEmail
					onChange={onChange}
					form_type={formType}
					window_width={windowWidth}
					window_height={windowHeight}
					style={animateInputText}
				/>
			);
			break;

		case "Username":
			field = (
				<Styled.InputUsername
					onChange={onChange}
					form_type={formType}
					window_height={windowHeight}
					style={animateInputText}
				/>
			);
			break;

		case "Email":
			field = (
				<Styled.InputEmail
					onChange={onChange}
					form_type={formType}
					window_height={windowHeight}
					style={animateInputText}
				/>
			);
			break;

		case "Password":
			// "Password" & "Confirm Password" case
			field = (
				<Styled.InputPassword
					onChange={onChange}
					reveal_password={revealPassword.toString()}
					window_height={windowHeight}
					style={animateInputText}
				/>
			);
			break;

		default:
			field = (
				<Styled.InputPasswordConfirmation
					onChange={onChange}
					reveal_password={revealPassword.toString()}
					window_height={windowHeight}
					form_type={formType}
					style={animateInputText}
				/>
			);
			break;
	}

	return field;
};
