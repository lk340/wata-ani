import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./sign-up.styled";

export const SignUp = () => {
	const { auth } = Context.Auth.useAuthContext();

	React.useEffect(() => {
		auth.state.username !== "" &&
		auth.state.email !== "" &&
		auth.state.password !== "" &&
		auth.state.passwordConfirmation !== ""
			? auth.setters.setDisabled(false)
			: auth.setters.setDisabled(true);
	}, [
		auth.state.username,
		auth.state.email,
		auth.state.password,
		auth.state.passwordConfirmation,
	]);

	return (
		<Styled.SignUp>
			<Styled.SignUpForm onSubmit={auth.handlers.handleSubmit}>
				<Styled.SignUpFormTitle>Sign Up</Styled.SignUpFormTitle>
				<Styled.SignUpFormError>{auth.state.error}</Styled.SignUpFormError>
				<Styled.SignUpFormUsernameInput onChange={auth.handlers.handleUsernameChange} />
				<Styled.SignUpFormEmailInput onChange={auth.handlers.handleEmailChange} />
				<Styled.SignUpFormPasswordInput onChange={auth.handlers.handlePasswordChange} />
				<Styled.SignUpFormPasswordConfirmationInput
					onChange={auth.handlers.handlePasswordConfirmationChange}
				/>
				<Styled.SignUpFormSubmit disabled={auth.state.disabled}>
					Sign Up
				</Styled.SignUpFormSubmit>
			</Styled.SignUpForm>
		</Styled.SignUp>
	);
};
