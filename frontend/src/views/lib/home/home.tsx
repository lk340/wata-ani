import * as React from "react";

import * as Context from "@/context";
import * as Components from "@/components";

import * as Styled from "./home.styled";
import * as Springs from "./home.springs";
import { CTA } from "./CTA";

export const Home = () => {
	Context.Theme.useThemeContext();

	const animateHome = Springs.home();

	return (
		<Styled.Home style={animateHome}>
			{/* Navbar */}
			<Components.Navbar />

			{/* Components (sections) */}
			<Styled.HomeComponents>Home Components</Styled.HomeComponents>

			{/* CTA Section */}
			<CTA />

			{/* Footer */}
			<Components.Footer />

			{/* Navbar Mobile */}
			<Components.NavbarMobile />
		</Styled.Home>
	);
};
