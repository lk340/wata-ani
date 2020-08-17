import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./hamburger.styled";
import * as Springs from "./hamburger.springs";

export const Hamburger = () => {
	const { navbar } = Context.Navbar.useNavbarContext();

	const animateLineTop = Springs.lineTop(navbar.state.hamburgerOpen);
	const animateLineMiddle = Springs.lineMiddle(navbar.state.hamburgerOpen);
	const animateLineBottom = Springs.lineBottom(navbar.state.hamburgerOpen);

	return (
		<Styled.Hamburger onClick={navbar.setters.toggleHamburgerOpen}>
			<Styled.HamburgerLines>
				<Styled.HamburgerLinesLineTop style={animateLineTop} />
				<Styled.HamburgerLinesLineMiddle style={animateLineMiddle} />
				<Styled.HamburgerLinesLineBottom style={animateLineBottom} />
			</Styled.HamburgerLines>
		</Styled.Hamburger>
	);
};
