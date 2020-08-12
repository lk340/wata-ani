import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";
import * as Gatsby from "gatsby";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

import logoJapanese from "@/images/logo/japanese.svg";

/**
 * Auth Form
 * Field Group
 * Submit Button
 * Redirect
 */

// ================= //
// ↓↓↓ Auth Form ↓↓↓ //
// ================= //

export const AuthForm = styled("form")`
	${Snippets.grid(1, "auto", 40)};
`;

export const AuthFormLogoTitleInputs = styled("div")`
	${Snippets.grid(1, "auto", 30, "center", "center")};
`;

export const AuthFormLogo = styled("img").attrs(() => ({
	src: logoJapanese,
	alt: "image",
}))`
	${Snippets.square("70px")};
	border-radius: ${Constants.borderRadius.components.authForm.logo};
`;

export const AuthFormTitle = styled("h1")`
	${Snippets.clearSpacing()};
	color: ${Constants.theme.text};
	font-size: ${Constants.fontSizes.components.authForm.title};
`;

export const AuthFormInputs = styled("div")`
	${Snippets.grid(1, "auto", 20)};
`;

// =================== //
// ↓↓↓ Field Group ↓↓↓ //
// =================== //

export const AuthFormFieldInput = styled("div")`
	${Snippets.flex("row", "auto", "center")};
	${Snippets.size("400px", "50px")};
	padding: 0px 20px;
	background-color: ${Constants.theme.components.authForm.inputBackground};
	border: ${Constants.theme.components.authForm.inputBorder} solid 2px;
	border-radius: ${Constants.borderRadius.components.authForm.input};
`;

// ===================== //
// ↓↓↓ Submit Button ↓↓↓ //
// ===================== //

export const AuthFormSubmitRedirect = styled("div")`
	${Snippets.grid(1, "auto", 20)};
`;

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
