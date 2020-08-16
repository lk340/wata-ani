import * as React from "react";

import * as Context from "@/context";
import * as Components from "@/components";
import * as Animations from "@/utils/style/animations";
import * as Colors from "@/utils/style/colors";

import * as Styled from "./home.styled";

export const Home = () => {
	const { theme } = Context.Theme.useThemeContext();

	const animateBackground = Animations.background(
		theme.state.mode,
		Colors.LIGHT.one,
		Colors.DARK.two,
	);

	return (
		<Styled.Home style={animateBackground}>
			<Components.Navbar />
			<Styled.HomeComponents>Home Components</Styled.HomeComponents>
			<Components.NavbarMobile />
		</Styled.Home>
	);
};
