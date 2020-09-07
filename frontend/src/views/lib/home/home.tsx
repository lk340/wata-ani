import * as React from "react";

import * as Context from "@/context";
import * as Components from "@/components";
import * as Animations from "@/utils/style/animations";
import * as Constants from "@/utils/style/constants";

import * as Styled from "./home.styled";
import * as Springs from "./home.springs";

export const Home = () => {
	Context.Theme.useThemeContext();

	const animateHome = Springs.home();

	return (
		<Styled.Home style={animateHome}>
			<Components.Navbar />
			<Styled.HomeComponents>
				<div>Home Components</div>
			</Styled.HomeComponents>
			<Components.NavbarMobile />
		</Styled.Home>
	);
};
