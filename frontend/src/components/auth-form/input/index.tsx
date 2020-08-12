import * as React from "react";

import * as Context from "@/context";

import * as AuthTypes from "../auth-form.types";
import * as InputTypes from "./input.types";
import * as Styled from "./input.styled";
import * as Springs from "./input.springs";

type InputProps = {
	formType: AuthTypes.FormType;
	inputType: InputTypes.InputType;
	onChange: React.ChangeEventHandler;
};

export const Input = (props: InputProps) => {
	const { formType, inputType, onChange } = props;

	const { authForm } = Context.AuthForm.useAuthFormContext();

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

	const inputIcon =
		inputType === "Username" ? (
			<Styled.InputIconUsername />
		) : inputType === "Email" ? (
			<Styled.InputIconEmail />
		) : (
			<Styled.InputIconPassword />
		);

	const inputField =
		inputType === "Username" ? (
			<Styled.InputUsername onChange={onChange} />
		) : inputType === "Email" ? (
			<Styled.InputEmail onChange={onChange} />
		) : inputType === "Password" ? (
			<Styled.InputPassword
				onChange={onChange}
				reveal_password={authForm.state.revealPassword}
			/>
		) : inputType === "Confirm Password" ? (
			<Styled.InputPasswordConfirmation
				onChange={onChange}
				reveal_password={authForm.state.revealPassword}
			/>
		) : (
			<Styled.InputUsernameOrEmail onChange={onChange} />
		);

	return (
		<Styled.Input display={display}>
			<Styled.InputTitle>*{inputType}</Styled.InputTitle>
			<Styled.InputFieldGroup>
				{inputIcon}
				{inputField}
				<Styled.InputFieldPasswordIcons
					onClick={authForm.setters.toggleRevealPassword}
					input_type={inputType}
				>
					<Styled.InputIconPasswordHide
						style={Springs.togglePasswordHideIcon(authForm.state.revealPassword)}
					/>
					<Styled.InputIconPasswordShow
						style={Springs.togglePasswordShowIcon(authForm.state.revealPassword)}
					/>
				</Styled.InputFieldPasswordIcons>
			</Styled.InputFieldGroup>
		</Styled.Input>
	);
};
