import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./hamburger.styled";
import * as Springs from "./hamburger.springs";

export const Hamburger = () => {
	const { navbar } = Context.Navbar.useNavbarContext();

	const animateLineTop = Springs.lineTop(navbar.state.hamburgerOpen);
	const animateLineMiddleOne = Springs.lineMiddle(navbar.state.hamburgerOpen, 45);
	const animateLineMiddleTwo = Springs.lineMiddle(navbar.state.hamburgerOpen, -45);
	const animateLineBottom = Springs.lineBottom(navbar.state.hamburgerOpen);

	return (
		<Styled.Hamburger onClick={navbar.setters.toggleHamburgerOpen}>
			<Styled.HamburgerLines>
				<Styled.HamburgerLinesLine style={animateLineTop} />
				<Styled.HamburgerLinesLineMiddle style={animateLineMiddleOne} />
				<Styled.HamburgerLinesLineMiddle style={animateLineMiddleTwo} />
				<Styled.HamburgerLinesLine style={animateLineBottom} />
			</Styled.HamburgerLines>
		</Styled.Hamburger>
	);
};
