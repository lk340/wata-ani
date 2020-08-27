import * as React from "react";

import * as Context from "@/context";
import * as Components from "@/components";

import * as Styled from "./hamburger.styled";
import * as Springs from "./hamburger.springs";

import { Lines } from "./lines";
import { ModalOptions } from "./modal-options";

export const Hamburger = () => {
	return (
		<Styled.Hamburger>
			<Lines />
			<HamburgerModal />
		</Styled.Hamburger>
	);
};

// ============= //
// ↓↓↓ Modal ↓↓↓ //
// ============= //

const HamburgerModal = () => {
	const { navbar } = Context.Navbar.useNavbarContext();
	const { theme } = Context.Theme.useThemeContext();

	const animateModal = Springs.modal(navbar.state.hamburgerOpen);
	const animateModalMainContainer = Springs.modalMainContainer(
		navbar.state.hamburgerOpen,
	);
	const animateModalMain = Springs.modalMain(theme.state.mode);

	return (
		<Styled.HamburgerModal style={animateModal}>
			{/* Main */}
			<Styled.HamburgerModalMainContainer style={animateModalMainContainer}>
				<Styled.HamburgerModalMain style={animateModalMain}>
					<ModalOptions />
				</Styled.HamburgerModalMain>
			</Styled.HamburgerModalMainContainer>

			{/* Theme Button */}
			<Styled.HamburgerModalThemeButton>
				<Components.ThemeButton />
			</Styled.HamburgerModalThemeButton>
		</Styled.HamburgerModal>
	);
};
