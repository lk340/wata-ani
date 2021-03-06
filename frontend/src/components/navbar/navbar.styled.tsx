import styled, { createGlobalStyle } from "styled-components";
import { animated } from "react-spring";
import * as Gatsby from "gatsby";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

import logoJapanese from "@/images/logo/japanese.svg";

/**
 * Navbar
 * Global
 * Options
 * Navbar Logo Icon
 */

// ============== //
// ↓↓↓ Navbar ↓↓↓ //
// ============== //

export const Navbar = styled(animated.div).attrs(() => ({
	"data-testid": "navbar component",
}))`
	${Snippets.fixed("0", "0", "auto", "0", 22)};
	height: ${Constants.size.components.navbar.height}px;

	@media (max-width: 1260px) {
		padding: 0px ${Constants.sidePaddings.tablet}px;
	}

	@media (max-width: 625px) {
		height: 50px;
		padding: 0px ${Constants.sidePaddings.mobile}px;
	}
`;

export const NavbarMaxWidth = styled("div")`
	${Snippets.flex("row", "space-between", "center")};
	${Snippets.fillContainer()};
	position: relative;
	margin: 0px auto;
	max-width: ${Constants.globals.maxWidth}px;
	font-size: ${Constants.fontSizes.components.navbar.link};
`;

// ============== //
// ↓↓↓ Global ↓↓↓ //
// ============== //

type GlobalProps = { hamburger_open: string };

export const NavbarGlobalStyles = createGlobalStyle`
	body {
		overflow-y: ${(props: GlobalProps) =>
			props.hamburger_open === "true" ? "hidden" : "auto"};
	}
`;

// =============== //
// ↓↓↓ Options ↓↓↓ //
// =============== //

export const NavbarOption = styled(Gatsby.Link)`
	${Snippets.flexRowCenter()};
	${Snippets.clearAnchor()};
`;

type FormProps = { display: string };

export const NavbarSignInLink = styled(Gatsby.Link).attrs(() => ({
	to: "/sign-in",
}))<FormProps>`
	${Snippets.flexRowCenter()};
	${Snippets.clearAnchor()};
	display: ${(props) => (props.display === "true" ? "flex" : "none")};
`;

export const NavbarRegisterLinkContainer = styled(animated.div)<FormProps>`
	${Snippets.flexRowCenter()};
	display: ${(props) => (props.display === "true" ? "flex" : "none")};
	margin-left: ${Constants.size.components.navbar.spacer}px;
	border-radius: ${Constants.borderRadius.components.navbar.register};
	cursor: pointer;
`;

export const NavbarRegisterLink = styled(Gatsby.Link).attrs(() => ({
	to: "/registration",
}))`
	${Snippets.clearAnchor()};
	padding: 12px 18px;
`;

export const NavbarOptionComponents = styled("div")`
	@media (max-width: 625px) {
		display: none;
	}
`;

// ======================== //
// ↓↓↓ Navbar Logo Icon ↓↓↓ //
// ======================== //

export const NavbarLogoIcon = styled("img").attrs(() => ({
	src: logoJapanese,
	alt: "navbar component logo",
}))`
	${Snippets.square("40px")};
	display: block;
	border-radius: ${Constants.borderRadius.components.authForm.logo};

	@media (max-width: 625px) {
		${Snippets.square("20px")};
		border-radius: 0.1875rem;
	}
`;
