import * as React from "react";
import * as ReactRedux from "react-redux";

import * as Context from "@/context";

import * as Styled from "./input.styled";
import * as Springs from "./input.springs";
import * as Helpers from "./helpers";

import { FormType } from "../auth-form";

export type InputType =
	| "Username Or Email"
	| "Username"
	| "Email"
	| "Password"
	| "Confirm Password";

type Props = {
	formType: FormType;
	inputType: InputType;
	onChange: React.ChangeEventHandler;
};

export const Input = (props: Props) => {
	const { formType, inputType, onChange } = props;

	const { authForm } = Context.AuthForm.useAuthFormContext();
	const { windows } = Context.Windows.useWindowsContext();
	const { theme } = Context.Theme.useThemeContext();

	const animateInputField = Springs.inputField();

	const display = Helpers.generateDisplay(formType, inputType);
	const icon = Helpers.generateIcon(inputType);
	const field = Helpers.Field(
		inputType,
		onChange,
		formType,
		windows.state.width,
		windows.state.height,
		authForm.state.revealPassword,
	);

	const sessionErrors = ReactRedux.useSelector((state) => state.errors.session);

	let error: string | undefined;
	switch (inputType) {
		case "Username Or Email":
			error = sessionErrors.filter((error: string) => error.includes("username"))[0];
			break;
		case "Username":
			error = sessionErrors.filter((error: string) => error.includes("username"))[0];
			break;
		case "Email":
			error = sessionErrors.filter((error: string) => error.includes("e-mail"))[0];
			break;
		case "Password":
			error = sessionErrors.filter((error: string) => error.includes("short"))[0];
			break;
		default:
			error = sessionErrors.filter((error: string) => error.includes("didn't match"))[0];
			break;
	}

	console.log("Error:", error);

	return (
		<Styled.Input display={display}>
			<Styled.InputTitle>*{inputType}</Styled.InputTitle>
			<Styled.InputFieldContainer style={animateInputField}>
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
			</Styled.InputFieldContainer>

			{/* Error */}
			<Styled.InputError mode={theme.state.mode} error={error}>
				{error}
			</Styled.InputError>
		</Styled.Input>
	);
};
