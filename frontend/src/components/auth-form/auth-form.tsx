import * as React from "react";

import * as Styled from "./auth-form.styled";

export type Props = {
	formType: "Registration" | "Sign In";
};

export const AuthForm = (props: Props) => {
	const { formType } = props;

	return (
		<Styled.AuthForm>
			<Styled.AuthFormLogo />
			<Styled.AuthFormTitle>{formType}</Styled.AuthFormTitle>
		</Styled.AuthForm>
	);
};
