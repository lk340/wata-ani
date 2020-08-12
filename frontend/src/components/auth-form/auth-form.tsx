import * as React from "react";

import * as Styled from "./auth-form.styled";

export type Props = {
	formType: "Registration" | "Sign In";
	submitText: "Register" | "Sign In";
};

export const AuthForm = (props: Props) => {
	const { formType, submitText } = props;

	return (
		<Styled.AuthForm>
			<Styled.AuthFormLogoTitleInputs>
				<Styled.AuthFormLogo />
				<Styled.AuthFormTitle>{formType}</Styled.AuthFormTitle>
				<Styled.AuthFormInputs>
					<UsernameInput />
					<EmailInput />
					<PasswordInput />
					<PasswordConfirmationInput />
				</Styled.AuthFormInputs>
			</Styled.AuthFormLogoTitleInputs>
			<Styled.AuthFormSubmitRedirect>
				<Styled.AuthFormSubmitButton>{submitText}</Styled.AuthFormSubmitButton>
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

const UsernameInput = () => {
	return (
		<Styled.AuthFormFieldGroup>
			<Styled.AuthFormFieldTitle>Username</Styled.AuthFormFieldTitle>
			<Styled.AuthFormFieldInput>
				<Styled.AuthFormFieldInputIconUsername />
				<Styled.AuthFormFieldInputUsername />
			</Styled.AuthFormFieldInput>
		</Styled.AuthFormFieldGroup>
	);
};

const EmailInput = () => {
	return (
		<Styled.AuthFormFieldGroup>
			<Styled.AuthFormFieldTitle>Email</Styled.AuthFormFieldTitle>
			<Styled.AuthFormFieldInput>
				<Styled.AuthFormFieldInputIconEmail />
				<Styled.AuthFormFieldInputUsername />
			</Styled.AuthFormFieldInput>
		</Styled.AuthFormFieldGroup>
	);
};

const PasswordInput = () => {
	return (
		<Styled.AuthFormFieldGroup>
			<Styled.AuthFormFieldTitle>Password</Styled.AuthFormFieldTitle>
			<Styled.AuthFormFieldInput>
				<Styled.AuthFormFieldInputIconPassword />
				<Styled.AuthFormFieldInputUsername />
				<Styled.AuthFormFieldInputIconPasswordHide />
			</Styled.AuthFormFieldInput>
		</Styled.AuthFormFieldGroup>
	);
};

const PasswordConfirmationInput = () => {
	return (
		<Styled.AuthFormFieldGroup>
			<Styled.AuthFormFieldTitle>Confirm Password</Styled.AuthFormFieldTitle>
			<Styled.AuthFormFieldInput>
				<Styled.AuthFormFieldInputIconPassword />
				<Styled.AuthFormFieldInputUsername />
				<Styled.AuthFormFieldInputIconPasswordHide />
			</Styled.AuthFormFieldInput>
		</Styled.AuthFormFieldGroup>
	);
};
