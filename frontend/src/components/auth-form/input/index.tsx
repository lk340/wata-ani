import * as React from "react";

import * as Context from "@/context";

import * as AuthTypes from "../auth-form.types";
import * as Styled from "./input.styled";
import * as Springs from "./input.springs";

type InputProps = {
	formType: AuthTypes.FormType;
	inputType: "Username Or Email" | "Username" | "Email" | "Password" | "Confirm Password";
	onChange: React.ChangeEventHandler;
};

export const Input = (props: InputProps) => {
	const { formType, inputType, onChange } = props;

	const { authForm } = Context.AuthForm.useAuthFormContext();
	const { windows } = Context.Windows.useWindowsContext();

	// Hides or shows certain input fields depending on whether we're dealing
	// with a registration form or a sign in form.
	const display =
		formType === "Registration" && inputType === "Username Or Email"
			? "none"
			: formType === "Sign In" && inputType === "Username"
			? "none"
			: formType === "Sign In" && inputType === "Email"
			? "none"
			: formType === "Sign In" && inputType === "Confirm Password"
			? "none"
			: "grid";

	// Shows the icon that corresponds with the specific input field type.
	// 	e.g. Username or Email field, Username input field, Email input field,
	//	Password input field, Confirm Password input field.
	let icon;
	switch (inputType) {
		case "Username Or Email":
			icon = <Styled.InputIconUsername />;
			break;
		case "Username":
			icon = <Styled.InputIconUsername />;
			break;
		case "Email":
			icon = <Styled.InputIconEmail />;
			break;
		default:
			icon = <Styled.InputIconPassword />;
			break;
	}

	// Renders specific input field depending on input field type.
	let field;
	switch (inputType) {
		case "Username Or Email":
			field = (
				<Styled.InputUsernameOrEmail
					onChange={onChange}
					form_type={formType}
					window_height={windows.state.height}
				/>
			);
			break;
		case "Username":
			field = (
				<Styled.InputUsername
					onChange={onChange}
					form_type={formType}
					window_height={windows.state.height}
				/>
			);
			break;
		case "Email":
			field = (
				<Styled.InputEmail
					onChange={onChange}
					form_type={formType}
					window_height={windows.state.height}
				/>
			);
			break;
		case "Password":
			// "Password" & "Confirm Password" case
			field = (
				<Styled.InputPassword
					onChange={onChange}
					reveal_password={authForm.state.revealPassword}
					window_height={windows.state.height}
				/>
			);
			break;
		default:
			field = (
				<Styled.InputPasswordConfirmation
					onChange={onChange}
					reveal_password={authForm.state.revealPassword}
					window_height={windows.state.height}
					form_type={formType}
				/>
			);
			break;
	}

	return (
		<Styled.Input display={display}>
			<Styled.InputTitle>*{inputType}</Styled.InputTitle>
			<Styled.InputField>
				{icon}
				{field}

				{/* Eye icons for showing or hiding typed-in password. */}
				<Styled.InputFieldPasswordRevealIcons
					onClick={authForm.setters.toggleRevealPassword}
					input_type={inputType}
				>
					<Styled.InputIconPasswordHide
						style={Springs.togglePasswordHideIcon(authForm.state.revealPassword)}
					/>
					<Styled.InputIconPasswordShow
						style={Springs.togglePasswordShowIcon(authForm.state.revealPassword)}
					/>
				</Styled.InputFieldPasswordRevealIcons>
			</Styled.InputField>
		</Styled.Input>
	);
};
