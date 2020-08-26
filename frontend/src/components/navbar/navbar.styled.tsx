import styled, { css } from "styled-components";
import { animated } from "react-spring";
import * as Gatsby from "gatsby";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

import logoJapanese from "@/images/logo/japanese.svg";

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
	height: ${Constants.size.components.navbar.height}px;

	@media (max-width: 1260px) {
		padding: 0px ${Constants.sidePaddings.tablet}px;
	}

	@media (max-width: 575px) {
		height: 50px;
		padding: 0px ${Constants.sidePaddings.mobile}px;
	}
`;

export const NavbarMaxWidth = styled("div")`
	${Snippets.flex("row", "space-between", "center")};
	${Snippets.fillContainer()};
	margin: 0px auto;
	max-width: ${Constants.globals.maxWidth}px;
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

export const NavbarProfileIcon = styled(animated.img).attrs((props) => ({
	src: props.src,
	alt: "navbar component profile icon",
}))<ProfileIconProps>`
	${Snippets.square(`${Constants.size.components.navbar.icon}px`)};
	${Snippets.makeCircle()};
	display: ${(props) => props.display};
	margin-left: ${Constants.size.components.navbar.spacer}px;
`;

// =============== //
// ↓↓↓ Buttons ↓↓↓ //
// =============== //

const buttonStyles = css`
	${Snippets.flexRowCenter()};
	margin-left: ${Constants.size.components.navbar.spacer}px;
	cursor: pointer;
`;

type ButtonProps = { display: string };

export const NavbarModalButton = styled("div")<ButtonProps>`
	${Snippets.flexRowCenter()};
	display: ${(props) => (props.display === "true" ? "flex" : "none")};
	margin-left: ${Constants.size.components.navbar.spacer}px;
	cursor: pointer;
`;
