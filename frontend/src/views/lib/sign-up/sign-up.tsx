import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./sign-up.styled";

export const SignUp = () => {
	const { auth } = Context.Auth.useAuthContext();
	const { showPassword, disabled } = auth.state;
	const { setInput } = auth.setters;

	return (
		<Styled.SignUp>
			<Styled.SignUpForm>
				<Styled.SignUpFormUsernameInput onChange={() => setInput("username")()} />
				<Styled.SignUpFormEmailInput onChange={() => setInput("email")()} />
				<Styled.SignUpFormPasswordInput onChange={() => setInput("password")()} />
				<Styled.SignUpFormPasswordConfirmationInput onChange={() => setInput("passwordConfirmation")()} />
				<Styled.SignUpFormSubmit disabled={disabled}>Sign Up</Styled.SignUpFormSubmit>
			</Styled.SignUpForm>
		</Styled.SignUp>
	);
};
