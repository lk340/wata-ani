import styled, { css } from "styled-components";
import { animated } from "react-spring";
import * as Gatsby from "gatsby";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

import logoJapanese from "@/images/logo/japanese.svg";
import lightMode from "@/icons/navbar/light-mode.svg";
import darkMode from "@/icons/navbar/dark-mode.svg";

/**
 * Navbar
 * Links
 * Icons (images)
 * Buttons
 */

// ============== //
// ↓↓↓ Navbar ↓↓↓ //
// ============== //

export const Navbar = styled(animated.div)`
	height: ${Constants.size.components.navbar.height};

	@media (max-width: 1260px) {
		padding: 0px ${Constants.sidePaddings.tablet};
	}

	@media (max-width: 575px) {
		height: 50px;
		padding: 0px ${Constants.sidePaddings.mobile};
	}
`;

export const NavbarMaxWidth = styled("div")`
	${Snippets.flex("row", "space-between", "center")};
	${Snippets.fillContainer()};
	margin: 0px auto;
	max-width: ${Constants.globals.maxWidth};
	font-size: ${Constants.fontSizes.components.navbar.link};
`;

// ============= //
// ↓↓↓ Links ↓↓↓ //
// ============= //

export const NavbarLinks = styled("div")`
	${Snippets.flex()};

	@media (max-width: 575px) {
		display: none;
	}
`;

export const NavbarLink = styled(Gatsby.Link)`
	${Snippets.flexRowCenter()};
	${Snippets.clearAnchor()};
`;

type FormProps = { user: string };

export const NavbarSignInLink = styled(Gatsby.Link).attrs(() => ({
	to: "/sign-in",
}))<FormProps>`
	${Snippets.flexRowCenter()};
	${Snippets.clearAnchor()};
	display: ${(props) => (props.user === "true" ? "none" : "flex")};
`;

export const NavbarRegisterLinkContainer = styled(animated.div)<FormProps>`
	${Snippets.flexRowCenter()};
	display: ${(props) => (props.user === "true" ? "none" : "flex")};
	margin-left: ${Constants.size.components.navbar.spacer};
	border-radius: ${Constants.borderRadius.components.navbar.register};
	cursor: pointer;
`;

export const NavbarRegisterLink = styled(Gatsby.Link).attrs(() => ({
	to: "/registration",
}))`
	${Snippets.clearAnchor()};
	padding: 12px 18px;
`;

// ====================== //
// ↓↓↓ Icons (images) ↓↓↓ //
// ====================== //

export const NavbarLogoIcon = styled("img").attrs(() => ({
	src: logoJapanese,
	alt: "navbar component logo",
}))`
	${Snippets.square("40px")};
	display: block;
	border-radius: ${Constants.borderRadius.components.authForm.logo};

	@media (max-width: 575px) {
		${Snippets.square("20px")};
		border-radius: 0.1875rem;
	}
`;

type ProfileIconProps = { display: string };

export const NavbarProfileIcon = styled("img").attrs((props) => ({
	src: props.src,
	alt: "navbar component profile icon",
}))<ProfileIconProps>`
	${Snippets.square(Constants.size.components.navbar.icon)};
	${Snippets.makeCircle()};
	display: ${(props) => props.display};
	margin-left: ${Constants.size.components.navbar.spacer};
	border: ${Constants.theme.components.navbar.profileIcon} solid 1px;
`;

export const NavbarLightModeIcon = styled(animated.img).attrs(() => ({
	src: lightMode,
	alt: "navbar component light theme button",
}))`
	${Snippets.square(Constants.size.components.navbar.icon)};
	position: absolute;
`;

export const NavbarDarkModeIcon = styled("img").attrs(() => ({
	src: darkMode,
	alt: "navbar component dark theme button",
}))`
	${Snippets.square(Constants.size.components.navbar.icon)};
`;

// =============== //
// ↓↓↓ Buttons ↓↓↓ //
// =============== //

const buttonStyles = css`
	${Snippets.flexRowCenter()};
	margin-left: ${Constants.size.components.navbar.spacer};
	cursor: pointer;
`;

type ButtonProps = { display?: string };

export const NavbarModalButton = styled("div")<ButtonProps>`
	${buttonStyles};
	display: ${(props) => props.display || "flex"};
`;

export const NavbarThemeButton = styled("div")`
	${buttonStyles};
	position: relative;
	margin-right: ${Constants.size.components.navbar.spacer};
`;
