import * as React from "react";

import * as Context from "@/context";
import * as Components from "@/components";
import * as Animations from "@/utils/style/animations";
import * as Constants from "@/utils/style/constants";

import * as Styled from "./home.styled";

export const Home = () => {
	const { theme } = Context.Theme.useThemeContext();

	const animateBackground = Animations.background(
		theme.state.mode,
		Constants.theme.pages.home.background.light,
		Constants.theme.pages.home.background.dark,
	);

	return (
		<Styled.Home style={animateBackground}>
			<Components.Navbar />
			<Styled.HomeComponents>Home Components</Styled.HomeComponents>
			<Components.NavbarMobile />
		</Styled.Home>
	);
};
