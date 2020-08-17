import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./hamburger.styled";
import * as Springs from "./hamburger.springs";

export const Hamburger = () => {
	const { navbar } = Context.Navbar.useNavbarContext();

	const animateLineTop = Springs.lineTop(navbar.state.hamburger);
	const animateLineMiddle = Springs.lineMiddle(navbar.state.hamburger);
	const animateLineBottom = Springs.lineBottom(navbar.state.hamburger);

	return (
		<Styled.Hamburger onClick={navbar.setters.toggleHamburger}>
			<Styled.HamburgerLines>
				<Styled.HamburgerLinesLineTop style={animateLineTop} />
				<Styled.HamburgerLinesLineMiddle style={animateLineMiddle} />
				<Styled.HamburgerLinesLineBottom style={animateLineBottom} />
			</Styled.HamburgerLines>
		</Styled.Hamburger>
	);
};
