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
			{/* Logo // Title // Inputs */}
			<Styled.AuthFormLogoTitleInputs>
				<Styled.AuthFormLogo />
				<Styled.AuthFormTitle>{formType}</Styled.AuthFormTitle>
				<Styled.AuthFormInputs>
					<Input inputType="Username" />
					<Input inputType="Email" />
					<Input inputType="Password" />
					<Input inputType="Confirm Password" />
				</Styled.AuthFormInputs>
			</Styled.AuthFormLogoTitleInputs>

			{/* Submit Button // Redirect */}
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

// ============= //
// ↓↓↓ Input ↓↓↓ //
// ============= //

type InputProps = {
	inputType: "Username" | "Email" | "Password" | "Confirm Password";
};

const Input = (props: InputProps) => {
	const { inputType } = props;

	let inputIcon;
	switch (inputType) {
		case "Username":
			inputIcon = <Styled.AuthFormFieldInputIconUsername />;
			break;
		case "Email":
			inputIcon = <Styled.AuthFormFieldInputIconEmail />;
			break;
		default:
			inputIcon = <Styled.AuthFormFieldInputIconPassword />;
			break;
	}

	let inputField;
	switch (inputType) {
		case "Username":
			inputField = <Styled.AuthFormFieldInputUsername />;
			break;
		case "Email":
			inputField = <Styled.AuthFormFieldInputEmail />;
			break;
		case "Password":
			inputField = <Styled.AuthFormFieldInputPassword />;
			break;
		default:
			inputField = <Styled.AuthFormFieldInputPasswordConfirmation />;
			break;
	}

	return (
		<Styled.AuthFormFieldGroup>
			<Styled.AuthFormFieldTitle>{inputType}</Styled.AuthFormFieldTitle>
			<Styled.AuthFormFieldInput>
				{inputIcon}
				{inputField}
				<Styled.AuthFormFieldInputIconPasswordHide />
			</Styled.AuthFormFieldInput>
		</Styled.AuthFormFieldGroup>
	);
};
