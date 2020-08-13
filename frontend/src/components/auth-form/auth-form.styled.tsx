import styled from "styled-components";
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
`;

export const AuthFormTitle = styled("h1")`
	${Snippets.clearSpacing()};
	color: ${Constants.theme.text};
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
	${Snippets.size("400px", "50px")};
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

export const AuthFormRedirect = styled("div")`
	${Snippets.flex()};
`;

export const AuthFormRedirectText = styled("p")`
	${Snippets.clearSpacing()};
	color: ${Constants.theme.text};
	font-size: ${Constants.fontSizes.components.authForm.redirect};
`;

type RedirectLink = { form_type: "Registration" | "Sign In" };

export const AuthFormRedirectLink = styled(Gatsby.Link).attrs((props: RedirectLink) => ({
	to: props.form_type === "Registration" ? "/sign-in" : "/registration",
}))<RedirectLink>`
	${Snippets.clearAnchor()};
	color: ${Colors.PRIMARY_100};
	font-weight: bold;
	font-size: ${Constants.fontSizes.components.authForm.redirect};
`;
