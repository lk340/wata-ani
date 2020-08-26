import styled from "styled-components";
import { animated } from "react-spring";
import * as Gatsby from "gatsby";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

import logoJapanese from "@/images/logo/japanese.svg";

/**
 * Auth Form
 * Logo, Title, & Inputs
 * Submit Button & Redirect
 * Submit Button
 * Redirect
 */

// ================= //
// ↓↓↓ Auth Form ↓↓↓ //
// ================= //

export const AuthForm = styled("form")`
	${Snippets.grid(1, "auto", 40)};
	width: 400px;

	@media (max-width: ${Constants.breakpoints.mobile}) {
		padding: 0px ${Constants.sidePaddings.mobile}px;
		width: 100%;
	}

	@media (max-height: 620px) {
		grid-gap: 20px;
	}
`;

// ============================= //
// ↓↓↓ Logo, Title, & Inputs ↓↓↓ //
// ============================= //

export const AuthFormLogoTitleInputs = styled("div")`
	${Snippets.grid(1, "auto", 30, "auto", "auto")};
`;

export const AuthFormLogo = styled("img").attrs(() => ({
	src: logoJapanese,
	alt: "image",
}))`
	${Snippets.square("70px")};
	margin: 0px auto;
	border-radius: ${Constants.borderRadius.components.authForm.logo};

	@media (max-height: 740px) {
		display: none;
	}
`;

export const AuthFormTitle = styled(animated.h1)`
	${Snippets.clearSpacing()};
	font-size: ${Constants.fontSizes.components.authForm.title};
	text-align: center;
`;

export const AuthFormInputs = styled("div")`
	${Snippets.grid(1, "auto", 20)};
`;

// ================================ //
// ↓↓↓ Submit Button & Redirect ↓↓↓ //
// ================================ //

export const AuthFormSubmitRedirect = styled("div")`
	${Snippets.grid(1, "auto", 20)};
`;

// ===================== //
// ↓↓↓ Submit Button ↓↓↓ //
// ===================== //

export const AuthFormSubmitButton = styled("button").attrs(() => ({
	type: "submit",
}))`
	${Snippets.flexRowCenter()};
	height: 50px;
	color: ${Colors.NEUTRALS.white_100};
	background-color: ${Colors.PRIMARY_100};
	border: none;
	border-radius: ${Constants.borderRadius.components.authForm.input};
	font-size: ${Constants.fontSizes.components.authForm.submit};
	font-weight: bold;
	outline: none;
	cursor: pointer;
`;

// ================ //
// ↓↓↓ Redirect ↓↓↓ //
// ================ //

export const AuthFormRedirect = styled(animated.p)`
	${Snippets.clearSpacing()};
	color: ${Constants.theme.text};
	font-size: ${Constants.fontSizes.components.authForm.redirect};
`;

type RedirectLink = { form_type: "Registration" | "Sign In" };

export const AuthFormRedirectLink = styled(Gatsby.Link).attrs((props: RedirectLink) => ({
	to: props.form_type === "Registration" ? "/sign-in" : "/registration",
}))<RedirectLink>`
	${Snippets.clearAnchor()};
	display: inline;
	color: ${Colors.PRIMARY_100};
	font-weight: bold;
	font-size: ${Constants.fontSizes.components.authForm.redirect};
`;
