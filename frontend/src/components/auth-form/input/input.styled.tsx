import styled, { css } from "styled-components";
import { animated } from "react-spring";

import * as Context from "@/context";
import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

import usernameIcon from "@/icons/auth/username.svg";
import emailIcon from "@/icons/auth/email.svg";
import passwordIcon from "@/icons/auth/password.svg";
import passwordHideIcon from "@/icons/auth/password-hide.svg";
import passwordShowIcon from "@/icons/auth/password-show.svg";

import { FormType } from "../auth-form";

/**
 * Input
 * Icons
 * Field Types
 * Error
 */

// ============= //
// ↓↓↓ Input ↓↓↓ //
// ============= //

type InputProps = { display: string };

export const Input = styled("div")<InputProps>`
	${Snippets.grid(1, "auto", 10)};
	display: ${(props) => props.display};
`;

export const InputTitle = styled("h2")`
	${Snippets.clearSpacing()};
	color: ${Colors.PRIMARY_100};
	font-size: ${Constants.fontSizes.components.authForm.inputTitle};
	font-weight: bold;

	@media (max-height: 620px) {
		display: none;
	}
`;

export const InputFieldContainer = styled(animated.div)`
	${Snippets.flex("row", "auto", "center")};
	height: 50px;
	padding-left: 20px;
	border-radius: ${Constants.borderRadius.components.authForm.input};
`;

// ============== //
// ↓↓↓  Icons ↓↓↓ //
// ============== //

export const InputIconUsername = styled("img").attrs(() => ({
	src: usernameIcon,
	alt: "auth form component username icon",
}))`
	${Snippets.square(`${Constants.size.components.authForm.icon.width}px`)};
`;

export const InputIconEmail = styled("img").attrs(() => ({
	src: emailIcon,
	alt: "auth form component email icon",
}))`
	${Snippets.square(`${Constants.size.components.authForm.icon.width}px`)};
`;

export const InputIconPassword = styled("img").attrs(() => ({
	src: passwordIcon,
	alt: "auth form component password icon",
}))`
	${Snippets.square(`${Constants.size.components.authForm.icon.width}px`)};
`;

// ===================================== //
// ↓↓↓ Icons - Password Reveal (eye) ↓↓↓ //
// ===================================== //

type PasswordRevealIconsProps = { input_type: string };

export const InputFieldPasswordRevealIcons = styled("div")<PasswordRevealIconsProps>`
	display: ${(props) => {
		const password = props.input_type === "Password";
		const confirmPassword = props.input_type === "Confirm Password";
		if (password || confirmPassword) return "block";
		else return "none";
	}};
	padding-right: 20px;
	cursor: pointer;
`;

export const InputIconPasswordHide = styled(animated.img).attrs(() => ({
	src: passwordHideIcon,
	alt: "auth form component password hide icon",
}))`
	${Snippets.square(`${Constants.size.components.authForm.icon.width}px`)};
`;

export const InputIconPasswordShow = styled(animated.img).attrs(() => ({
	src: passwordShowIcon,
	alt: "auth form component password show icon",
}))`
	${Snippets.square(`${Constants.size.components.authForm.icon.width}px`)};
`;

// =================== //
// ↓↓↓ Field Types ↓↓↓ //
// =================== //

const fieldTypeStyles = css`
	flex: 1;
	height: 100%;
	margin: 0px 20px;
	background-color: ${Colors.NEUTRALS.transparent};
	border: none;
	outline: none;

	::placeholder {
		color: ${Colors.LIGHT.five};
		font-size: ${Constants.fontSizes.components.authForm.inputPlaceholder};
		font-style: italic;
	}
`;

type FieldTypeProps = {
	reveal_password?: string;
	form_type?: FormType;
	window_width?: number;
	window_height: number;
};

export const InputUsernameOrEmail = styled(animated.input).attrs(
	(props: FieldTypeProps) => ({
		type: "text",
		placeholder:
			props.window_width < 335 && props.window_height <= 620
				? "*Username or Email"
				: props.window_height > 620
				? "WataAni"
				: "*Enter your username or email",
		required: props.form_type === "Registration" ? false : true,
	}),
)<FieldTypeProps>`
	${fieldTypeStyles};
`;

export const InputUsername = styled(animated.input).attrs((props: FieldTypeProps) => ({
	type: "text",
	placeholder: props.window_height > 620 ? "WataAni" : "*Username",
	required: props.form_type === "Registration" ? true : false,
	"data-testid": "auth form component username input field",
}))<FieldTypeProps>`
	${fieldTypeStyles};
`;

export const InputEmail = styled(animated.input).attrs((props: FieldTypeProps) => ({
	type: "email",
	placeholder: props.window_height > 620 ? "wata@ani.com" : "*Email",
	required: props.form_type === "Registration" ? true : false,
}))<FieldTypeProps>`
	${fieldTypeStyles};
`;

export const InputPassword = styled(animated.input).attrs((props: FieldTypeProps) => ({
	type: props.reveal_password === "true" ? "text" : "password",
	placeholder: props.window_height > 620 ? "aBcD!@#$123" : "*Password",
	required: true,
}))<FieldTypeProps>`
	${fieldTypeStyles};
`;

export const InputPasswordConfirmation = styled(animated.input).attrs(
	(props: FieldTypeProps) => ({
		type: props.reveal_password === "true" ? "text" : "password",
		placeholder: props.window_height > 620 ? "aBcD!@#$123" : "*Confirm Password",
		required: props.form_type === "Registration" ? true : false,
	}),
)<FieldTypeProps>`
	${fieldTypeStyles};
`;

// ============= //
// ↓↓↓ Error ↓↓↓ //
// ============= //

type ErrorProps = {
	mode: Context.Theme.Mode;
	error: string | undefined;
};

export const InputError = styled("p")<ErrorProps>`
	${Snippets.clearSpacing()};
	display: ${(props) => {
		const { error } = props;
		if (error !== undefined && error !== "") return "block";
		else return "none";
	}};
	color: ${(props) => {
		return props.mode === "light" ? Colors.ALERTS.error.light : Colors.ALERTS.error.dark;
	}};
	font-size: ${Constants.fontSizes.components.authForm.inputError};
`;
