import * as React from "react";

import * as Components from "@/components";

import * as Styled from "./register.styled";

export const Register = () => {
	return (
		<Styled.Register>
			<Components.AuthForm formType="Registration" />
		</Styled.Register>
	);
};
