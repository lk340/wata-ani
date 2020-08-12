import * as React from "react";

import * as Styled from "./auth-form.styled";
import { Input } from "./input";

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
				{/* Logo */}
				<Styled.AuthFormLogo />
				{/* Title */}
				<Styled.AuthFormTitle>{formType}</Styled.AuthFormTitle>
				{/* Inputs */}
				<Styled.AuthFormInputs>
					<Input inputType="Username" />
					<Input inputType="Email" />
					<Input inputType="Password" />
					<Input inputType="Confirm Password" />
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
