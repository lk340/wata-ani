import * as React from "react";

import * as Context from "@/context";
import * as Components from "@/components";
import * as Animations from "@/utils/style/animations";
import * as Constants from "@/utils/style/constants";

import * as Styled from "./sign-in.styled";

export const SignIn = () => {
	Context.Theme.useThemeContext();

	const animateBackground = Animations.background(
		Constants.theme.background.light,
		Constants.theme.background.dark,
	);

	return (
		<Styled.SignIn style={animateBackground}>
			<Components.AuthForm formType="Sign In" submitText="Sign In" />
		</Styled.SignIn>
	);
};
