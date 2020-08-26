import * as React from "react";

import * as Animations from "@/utils/style/animations";

import * as Styled from "./submit-button-and-redirect.styled";
import { Props } from "../auth-form";

export const SubmitButtonAndRedirect = (props: Props) => {
	const { formType, submitText } = props;

	const animateRedirect = Animations.text();

	return (
		<Styled.SubmitButtonAndRedirect>
			{/* Submit Button */}
			<Styled.SubmitButton>{submitText}</Styled.SubmitButton>

			{/* Redirect */}
			<Styled.Redirect style={animateRedirect}>
				{formType === "Registration" ? "Already a member?" : "Need an account?"}&nbsp;
				{/* Link */}
				<Styled.RedirectLink form_type={formType}>
					{formType === "Registration" ? "Sign In" : "Register"}
				</Styled.RedirectLink>
			</Styled.Redirect>
		</Styled.SubmitButtonAndRedirect>
	);
};
