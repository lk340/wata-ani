import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./auth-form.styled";
import { Input } from "./input";

export type Props = {
	formType: "Registration" | "Sign In";
	submitText: "Register" | "Sign In";
};

export const AuthForm = (props: Props) => {
	const { formType, submitText } = props;

	const { authForm } = Context.AuthForm.useAuthFormContext();

	return (
		<Styled.AuthForm onSubmit={authForm.handlers.handleSubmit}>
			{/* Logo // Title // Inputs */}
			<Styled.AuthFormLogoTitleInputs>
				{/* Logo */}
				<Styled.AuthFormLogo />
				{/* Title */}
				<Styled.AuthFormTitle>{formType}</Styled.AuthFormTitle>
				{/* Inputs */}
				<Styled.AuthFormInputs>
					<Input onChange={authForm.handlers.handleUsernameChange} inputType="Username" />
					<Input onChange={authForm.handlers.handleEmailChange} inputType="Email" />
					<Input onChange={authForm.handlers.handlePasswordChange} inputType="Password" />
					<Input
						onChange={authForm.handlers.handlePasswordConfirmationChange}
						inputType="Confirm Password"
					/>
				</Styled.AuthFormInputs>
			</Styled.AuthFormLogoTitleInputs>

			{/* Submit Button // Redirect */}
			<Styled.AuthFormSubmitRedirect>
				{/* Submit Button */}
				<Styled.AuthFormSubmitButton>{submitText}</Styled.AuthFormSubmitButton>
				{/* Redirect */}
				<Styled.AuthFormRedirect>
					<Styled.AuthFormRedirectText>
						{formType === "Registration" ? "Already a member?" : "Need an account?"}
					</Styled.AuthFormRedirectText>
					&nbsp;
					<Styled.AuthFormRedirectLink form_type={formType}>
						{formType === "Registration" ? "Sign In" : "Register"}
					</Styled.AuthFormRedirectLink>
				</Styled.AuthFormRedirect>
			</Styled.AuthFormSubmitRedirect>
		</Styled.AuthForm>
	);
};
