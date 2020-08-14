import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";
import * as Gatsby from "gatsby";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

import logoJapanese from "@/images/logo/japanese.svg";
import lightMode from "@/images/logo/light-mode.svg";
import darkMode from "@/images/logo/dark-mode.svg";

/**
 * Navbar
 * Links
 * Icons
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
	${Snippets.grid(5, "auto", 20, "auto", "center")};
`;

export const NavbarLink = styled(Gatsby.Link)`
	${Snippets.clearAnchor()};
`;

// ============= //
// ↓↓↓ Icons ↓↓↓ //
// ============= //

export const NavbarLogoIcon = styled("img").attrs(() => ({
	src: logoJapanese,
	alt: "navbar component logo",
}))`
  ${Snippets.size("40px")};
	border-radius: ${Constants.borderRadius.components.authForm.logo};
`;

export const NavbarHomeIcon = styled("img").attrs(() => ({
	src: "",
	alt: "",
}))``;

export const NavbarSearchIcon = styled("img").attrs(() => ({
	src: "",
	alt: "",
}))``;

export const NavbarModeIcon = styled("img").attrs(() => ({
	src: "",
	alt: "",
}))``;

// =============== //
// ↓↓↓ Buttons ↓↓↓ //
// =============== //

export const NavbarRegisterButton = styled("div")`
	${Snippets.flexRowCenter()};
	padding: 12px 18px;
`;
