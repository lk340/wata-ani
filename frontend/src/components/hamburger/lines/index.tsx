import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./lines.styled";
import * as Springs from "./lines.springs";

export const Lines = () => {
	const { navbar } = Context.Navbar.useNavbarContext();

	const animateLineTop = Springs.lineTop(navbar.state.hamburgerOpen);
	const animateLineMiddleOne = Springs.lineMiddle(navbar.state.hamburgerOpen, 45);
	const animateLineMiddleTwo = Springs.lineMiddle(navbar.state.hamburgerOpen, -45);
	const animateLineBottom = Springs.lineBottom(navbar.state.hamburgerOpen);

	return (
		<Styled.Lines onClick={navbar.setters.toggleHamburgerOpen}>
			<Styled.LinesLine style={animateLineTop} />
			<Styled.LinesLineMiddle style={animateLineMiddleOne} />
			<Styled.LinesLineMiddle style={animateLineMiddleTwo} />
			<Styled.LinesLine style={animateLineBottom} />
		</Styled.Lines>
	);
};
