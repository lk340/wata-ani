import * as React from "react";

import * as Context from "@/context";

import * as Types from "./auth-form.types";
import * as Styled from "./auth-form.styled";
import { Input } from "./input";

type Props = {
	formType: Types.FormType;
	submitText: "Register" | "Sign In";
};

export const AuthForm = (props: Props) => {
	const { formType, submitText } = props;

	const { authForm } = Context.AuthForm.useAuthFormContext();

	return (
		<Styled.AuthForm onSubmit={authForm.handlers.handleSubmit}>
			{/* Logo, Title, & Inputs */}
			<Styled.AuthFormLogoTitleInputs>
				{/* Logo */}
				<Styled.AuthFormLogo />
				{/* Title */}
				<Styled.AuthFormTitle>{formType}</Styled.AuthFormTitle>
				{/* Inputs */}
				<InputFields formType={formType} submitText={submitText} />
			</Styled.AuthFormLogoTitleInputs>

			{/* Submit Button & Redirect */}
			<SubmitButtonAndRedirect formType={formType} submitText={submitText} />
		</Styled.AuthForm>
	);
};

// ==================== //
// ↓↓↓ Input Fields ↓↓↓ //
// ==================== //

const InputFields = (props: Props) => {
	const { formType } = props;

	const { authForm } = Context.AuthForm.useAuthFormContext();

	return (
		<Styled.AuthFormInputs>
			<Input
				onChange={authForm.handlers.handleUsernameOrEmailChange}
				formType={formType}
				inputType="Username Or Email"
			/>

			<Input
				onChange={authForm.handlers.handleUsernameChange}
				formType={formType}
				inputType="Username"
			/>
			<Input
				onChange={authForm.handlers.handleEmailChange}
				formType={formType}
				inputType="Email"
			/>
			<Input
				onChange={authForm.handlers.handlePasswordChange}
				formType={formType}
				inputType="Password"
			/>
			<Input
				onChange={authForm.handlers.handlePasswordConfirmationChange}
				formType={formType}
				inputType="Confirm Password"
			/>
		</Styled.AuthFormInputs>
	);
};

// ===================================== //
// ↓↓↓ Submit Button & Redirect Link ↓↓↓ //
// ===================================== //

const SubmitButtonAndRedirect = (props: Props) => {
	const { formType, submitText } = props;

	return (
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
	);
};