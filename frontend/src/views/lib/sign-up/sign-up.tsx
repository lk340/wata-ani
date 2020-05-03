import * as React from "react";

import * as Wrappers from "@/wrappers";
import * as Context from "@/context";

import * as Styled from "./sign-up.styled";

export const SignUp = () => {
	const { auth } = Context.Auth.useAuthContext();
	const { showPassword, disabled } = auth.state;
	const { handleChange, handleSubmit } = auth.handlers;

	return (
		<Wrappers.Layout>
			<Styled.SignUp onSubmit={handleSubmit}>
				<Styled.SignUpUsernameInput onChange={() => handleChange("username")()} />
				<Styled.SignUpEmailInput onChange={() => handleChange("email")()} />
				<Styled.SignUpPasswordInput onChange={() => handleChange("password")()} />
				<Styled.SignUpPasswordConfirmationInput
					onChange={() => handleChange("passwordConfirmation")()}
				/>
				<Styled.SignUpSubmit disabled={disabled}>Sign Up</Styled.SignUpSubmit>
			</Styled.SignUp>
		</Wrappers.Layout>
	);
};
