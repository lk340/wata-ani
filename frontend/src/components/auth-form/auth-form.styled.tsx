import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";
import * as Gatsby from "gatsby";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

import logoJapanese from "@/images/logo/japanese.svg";
import usernameIcon from "@/icons/username.svg";
import emailIcon from "@/icons/email.svg";
import passwordIcon from "@/icons/password.svg";
import passwordHideIcon from "@/icons/password-hide.svg";
import passwordShowIcon from "@/icons/password-show.svg";

/**
 * Auth Form
 * Field Group
 * Field Input Icons
 * Field Input Types
 * Submit Button
 * Redirect
 */

// ================= //
// ↓↓↓ Auth Form ↓↓↓ //
// ================= //

export const AuthForm = styled("div")`
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

export const AuthFormFieldGroup = styled("div")`
	${Snippets.grid(1, "auto", 10)};
`;

export const AuthFormFieldTitle = styled("div")`
	${Constants.fontSizes.components.authForm.inputTitle};
	color: ${Colors.PRIMARY_100};
	font-weight: bold;
	font-size: ${Constants.fontSizes.components.authForm.inputTitle};
`;

export const AuthFormFieldInput = styled("div")`
	${Snippets.flex("row", "auto", "center")};
	${Snippets.size("400px", "50px")};
	padding: 0px 20px;
	background-color: ${Constants.theme.components.authForm.inputBackground};
	border: ${Constants.theme.components.authForm.inputBorder} solid 2px;
	border-radius: ${Constants.borderRadius.components.authForm.input};
`;

export const AuthFormFieldInputPasswordIcons = styled("div")``;

// ========================= //
// ↓↓↓ Field Input Icons ↓↓↓ //
// ========================= //

const inputIconStyles = css`
	${Snippets.square("20px")};
`;

export const AuthFormFieldInputIconUsername = styled("img").attrs(() => ({
	src: usernameIcon,
	alt: "auth form component username icon",
}))`
	${inputIconStyles};
`;

export const AuthFormFieldInputIconEmail = styled("img").attrs(() => ({
	src: emailIcon,
	alt: "auth form component email icon",
}))`
	${inputIconStyles};
`;

export const AuthFormFieldInputIconPassword = styled("img").attrs(() => ({
	src: passwordIcon,
	alt: "auth form component password icon",
}))`
	${inputIconStyles};
`;

export const AuthFormFieldInputIconPasswordHide = styled("img").attrs(() => ({
	src: passwordHideIcon,
	alt: "auth form component password hide icon",
}))`
	${inputIconStyles};
`;

export const AuthFormFieldInputIconPasswordShow = styled("img").attrs(() => ({
	src: passwordShowIcon,
	alt: "auth form component password show icon",
}))`
	${inputIconStyles};
`;

export const AuthFormFieldInputPasswordHideIcon = styled("div")``;

// ========================= //
// ↓↓↓ Field Input Types ↓↓↓ //
// ========================= //

const inputTypeStyles = css`
	flex: 1;
	height: 100%;
	padding: 0px 20px;
	color: ${Constants.theme.text};
	background-color: ${Colors.NEUTRALS.transparent};
	border: none;
	outline: none;

	::placeholder {
		color: ${Colors.LIGHT.five};
		font-size: ${Constants.fontSizes.components.authForm.inputPlaceholder};
	}
`;

export const AuthFormFieldInputUsername = styled("input").attrs(() => ({
	type: "text",
	placeholder: "Enter your username",
	required: true,
}))`
	${inputTypeStyles};
`;

export const AuthFormFieldInputEmail = styled("input").attrs(() => ({
	type: "email",
	placeholder: "Enter your email",
	required: true,
}))`
	${inputTypeStyles};
`;

export const AuthFormFieldInputPassword = styled("input").attrs(() => ({
	type: "password",
	placeholder: "Enter your password",
	required: true,
}))`
	${inputTypeStyles};
`;

export const AuthFormFieldInputPasswordConfirmation = styled("input").attrs(() => ({
	type: "password",
	placeholder: "Confirm your password",
	required: true,
}))`
	${inputTypeStyles};
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
