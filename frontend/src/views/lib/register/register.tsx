import * as React from "react";

import * as Context from "@/context";
import * as Components from "@/components";
import * as Animations from "@/utils/style/animations";
import * as Constants from "@/utils/style/constants";

import * as Styled from "./register.styled";

export const Register = () => {
	Context.Theme.useThemeContext();

	const animateRegister = Animations.background(
		Constants.theme.background.light,
		Constants.theme.background.dark,
	);

	return (
		<Styled.Register style={animateRegister}>
			<Components.AuthForm formType="Registration" submitText="Register" />
		</Styled.Register>
	);
};
