import * as React from "react";

import * as Context from "@/context";
import * as Animations from "@/utils/style/animations";

import * as Styled from "./hamburger.styled";
import * as Springs from "./hamburger.springs";

export const Hamburger = () => {
	const { navbar } = Context.Navbar.useNavbarContext();
	const { theme } = Context.Theme.useThemeContext();

	// --- Line Animations --- //
	const animateLineTop = Springs.lineTop(navbar.state.hamburgerOpen);
	const animateLineMiddleOne = Springs.lineMiddle(navbar.state.hamburgerOpen, 45);
	const animateLineMiddleTwo = Springs.lineMiddle(navbar.state.hamburgerOpen, -45);
	const animateLineBottom = Springs.lineBottom(navbar.state.hamburgerOpen);

	// --- Modal Animations --- //
	const animateModal = Springs.modal(navbar.state.hamburgerOpen);
	const animateModalMain = Springs.modalMain(
		navbar.state.hamburgerOpen,
		theme.state.mode,
	);

	return (
		<Styled.Hamburger>
			{/* Lines */}
			<Styled.HamburgerLines onClick={navbar.setters.toggleHamburgerOpen}>
				<Styled.HamburgerLinesLine style={animateLineTop} />
				<Styled.HamburgerLinesLineMiddle style={animateLineMiddleOne} />
				<Styled.HamburgerLinesLineMiddle style={animateLineMiddleTwo} />
				<Styled.HamburgerLinesLine style={animateLineBottom} />
			</Styled.HamburgerLines>

			{/* Modal */}
			<Styled.HamburgerModal style={animateModal}>
				<Styled.HamburgerModalMain style={animateModalMain}>
					Hamburger Modal Main
				</Styled.HamburgerModalMain>
			</Styled.HamburgerModal>
		</Styled.Hamburger>
	);
};
