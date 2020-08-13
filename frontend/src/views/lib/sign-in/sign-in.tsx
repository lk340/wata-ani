import * as React from "react";

import * as Components from "@/components";

import * as Styled from "./sign-in.styled";

export const SignIn = () => {
	return (
		<Styled.SignIn>
			<Components.AuthForm formType="Sign In" submitText="Sign In" />
		</Styled.SignIn>
	);
};
