import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

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
 */

// ================= //
// ↓↓↓ Auth Form ↓↓↓ //
// ================= //

export const AuthForm = styled("div")`
	${Snippets.grid(1, "auto", 30, "center", "center")};

	border: red solid 1px;
`;

export const AuthFormLogo = styled("img").attrs(() => ({
	src: logoJapanese,
	alt: "image",
}))`
	${Snippets.square(Constants.size.components.authForm.logo.width)};
	border-radius: ${Constants.borderRadius.components.authForm.logo};
`;

export const AuthFormTitle = styled("h1")`
	${Snippets.clearSpacing()};
	color: ${Constants.theme.text};
	font-size: ${Constants.fontSizes.components.authForm.title};
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
`;

export const AuthFormFieldInput = styled("div")`
	${Snippets.flex()};
`;

// ========================= //
// ↓↓↓ Field Input Icons ↓↓↓ //
// ========================= //

export const AuthFormFieldInputIconUsername = styled("img").attrs(() => ({
	src: usernameIcon,
	alt: "auth form component username icon",
}))``;

export const AuthFormFieldInputIconEmail = styled("img").attrs(() => ({
	src: emailIcon,
	alt: "auth form component email icon",
}))``;

export const AuthFormFieldInputIconPassword = styled("img").attrs(() => ({
	src: passwordIcon,
	alt: "auth form component password icon",
}))``;

export const AuthFormFieldInputIconPasswordHide = styled("img").attrs(() => ({
	src: passwordHideIcon,
	alt: "auth form component password hide icon",
}))``;

export const AuthFormFieldInputIconPasswordShow = styled("img").attrs(() => ({
	src: passwordShowIcon,
	alt: "auth form component password show icon",
}))``;

export const AuthFormFieldInputPasswordHideIcon = styled("div")``;

// ========================= //
// ↓↓↓ Field Input Types ↓↓↓ //
// ========================= //

export const AuthFormFieldInputUsername = styled("input").attrs(() => ({
	type: "text",
	placeholder: "Enter your username",
}))`
	flex: 1;
	height: 100%;
`;

export const AuthFormFieldInputEmail = styled("input").attrs(() => ({
	type: "email",
	placeholder: "Enter your email",
}))`
	flex: 1;
	height: 100%;
`;

export const AuthFormFieldInputPassword = styled("input").attrs(() => ({
	type: "password",
	placeholder: "Enter your password",
}))`
	flex: 1;
	height: 100%;
`;

export const AuthFormFieldInputPasswordConfirmation = styled("input").attrs(() => ({
	type: "password",
	placeholder: "Confirm your password",
}))`
	flex: 1;
	height: 100%;
`;

// ===================== //
// ↓↓↓ Submit Button ↓↓↓ //
// ===================== //

export const AuthFormSubmitButton = styled("button").attrs(() => ({
	type: "submit",
}))``;
