import * as React from "react";

import * as Context from "@/context";

import { FormType } from "../auth-form";
import * as Styled from "./input.styled";
import * as Springs from "./input.springs";
import * as Helpers from "./helpers";

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

	return (
		<Styled.Input display={display}>
			<Styled.InputTitle>*{inputType}</Styled.InputTitle>
			<Styled.InputField style={animateInputField}>
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
