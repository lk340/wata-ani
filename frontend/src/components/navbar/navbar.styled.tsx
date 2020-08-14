import styled, { css, createGlobalStyle } from "styled-components";
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

export const Navbar = styled("div")`
	height: ${Constants.size.components.navbar.height};
	color: ${Constants.theme.text};
	background-color: ${Constants.theme.background};
	border-bottom: ${Constants.theme.components.navbar.borderBottom} 1px solid;

	@media (max-width: 1260px) {
		padding: 0px ${Constants.sidePaddings.tablet};
	}

	@media (max-width: 575px) {
		display: none;
	}
`;

export const NavbarMaxWidth = styled("div")`
	${Snippets.flex("row", "space-between", "center")};
	margin: 0px auto;
	max-width: ${Constants.globals.maxWidth};
	height: 100%;
	font-size: ${Constants.fontSizes.components.navbar.link};
`;

// ============= //
// ↓↓↓ Links ↓↓↓ //
// ============= //

export const NavbarLinks = styled("div")`
	${Snippets.flex()};
`;

export const NavbarLink = styled(Gatsby.Link)`
	${Snippets.clearAnchor()};
	${Snippets.flexRowCenter()};
`;

type FormProps = { user: string };

export const NavbarSignInLink = styled(Gatsby.Link).attrs(() => ({
	to: "/sign-in",
}))<FormProps>`
	${Snippets.flexRowCenter()};
	${Snippets.clearAnchor()};
	display: ${(props) => (props.user === "true" ? "none" : "flex")};
`;

export const NavbarRegisterLink = styled(Gatsby.Link).attrs(() => ({
	to: "/registration",
}))<FormProps>`
	${Snippets.flexRowCenter()};
	${Snippets.clearAnchor()};
	display: ${(props) => (props.user ? "none" : "flex")};
	margin-left: ${Constants.size.components.navbar.spacer};
	padding: 12px 18px;
	background-color: ${Constants.theme.components.navbar.registerButton};
	border-radius: ${Constants.borderRadius.components.navbar.register};
	cursor: pointer;
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
`;

type ProfileIconProps = { display: string };

export const NavbarProfileIcon = styled("img").attrs((props) => ({
	src: props.src,
	alt: "navbar component profile icon",
}))<ProfileIconProps>`
	${Snippets.square(Constants.size.components.navbar.icon)};
	${Snippets.circle()};
	display: ${(props) => props.display};
	margin-left: ${Constants.size.components.navbar.spacer};
	border: ${Constants.theme.components.navbar.profileIcon} solid 1px;
`;

type ThemeIconProps = { mode: string };

export const NavbarLightModeIcon = styled("img").attrs(() => ({
	src: lightMode,
	alt: "navbar component light theme button",
}))<ThemeIconProps>`
	${Snippets.square(Constants.size.components.navbar.icon)};
	display: ${(props) => (props.mode === "light" ? "none" : "block")};
`;

export const NavbarDarkModeIcon = styled("img").attrs(() => ({
	src: darkMode,
	alt: "navbar component dark theme button",
}))<ThemeIconProps>`
	${Snippets.square(Constants.size.components.navbar.icon)};
	display: ${(props) => (props.mode === "light" ? "block" : "none")};
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
	margin-right: ${Constants.size.components.navbar.spacer};
`;
