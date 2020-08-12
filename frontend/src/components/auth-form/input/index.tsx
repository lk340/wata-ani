import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./input.styled";
import * as Springs from "./input.springs";

type InputProps = {
	inputType: "Username" | "Email" | "Password" | "Confirm Password";
	onChange: React.ChangeEventHandler;
};

export const Input = (props: InputProps) => {
	const { inputType, onChange } = props;

	const { authForm } = Context.AuthForm.useAuthFormContext();

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
		) : (
			<Styled.InputPasswordConfirmation
				onChange={onChange}
				reveal_password={authForm.state.revealPassword}
			/>
		);

	return (
		<Styled.Input>
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
