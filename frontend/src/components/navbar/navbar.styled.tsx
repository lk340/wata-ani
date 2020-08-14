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

	border: red solid 1px;
`;

export const NavbarMaxWidth = styled("div")`
	${Snippets.flex("row", "space-between", "center")};
	margin: 0px auto;
	max-width: ${Constants.globals.maxWidth};
	height: 100%;
	font-size: ${Constants.fontSizes.components.navbar.link};

	border: blue solid 1px;
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

export const NavbarProfileIcon = styled("img").attrs((props) => ({
	src: props.src,
	alt: "navbar component profile icon",
}))`
	${Snippets.square(Constants.size.components.navbar.icon)};
	${Snippets.circle()};
	display: block;
	border: ${Constants.theme.components.navbar.profileIcon} solid 1px;
`;

type ThemeProps = { mode: string };

export const NavbarThemeButtonLightIcon = styled("img").attrs(() => ({
	src: lightMode,
	alt: "navbar component light theme button",
}))<ThemeProps>`
	${Snippets.square(Constants.size.components.navbar.icon)};
	display: ${(props) => (props.mode === "light" ? "none" : "block")};
`;

export const NavbarThemeButtonDarkIcon = styled("img").attrs(() => ({
	src: darkMode,
	alt: "navbar component dark theme button",
}))<ThemeProps>`
	${Snippets.square(Constants.size.components.navbar.icon)};
	display: ${(props) => (props.mode === "light" ? "block" : "none")};
`;

// =============== //
// ↓↓↓ Buttons ↓↓↓ //
// =============== //

const buttonStyles = css`
	${Snippets.flexRowCenter()};
	cursor: pointer;
`;

export const NavbarModalButton = styled("div")`
	${buttonStyles};
`;

export const NavbarThemeButton = styled("div")`
	${buttonStyles};
`;

export const NavbarRegisterButton = styled("div")`
	${buttonStyles};
	padding: 12px 18px;
	background-color: ${Constants.theme.components.navbar.registerButton};
	border-radius: ${Constants.borderRadius.components.navbar.register};
`;
