import styled, { css } from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

import usernameIcon from "@/icons/username.svg";
import emailIcon from "@/icons/email.svg";
import passwordIcon from "@/icons/password.svg";
import passwordHideIcon from "@/icons/password-hide.svg";
import passwordShowIcon from "@/icons/password-show.svg";

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
	font-weight: bold;
	font-size: ${Constants.fontSizes.components.authForm.inputTitle};
`;

export const InputField = styled("div")`
	${Snippets.flex("row", "auto", "center")};
	${Snippets.size("400px", "50px")};
	padding: 0px 20px;
	background-color: ${Constants.theme.components.authForm.inputBackground};
	border: ${Constants.theme.components.authForm.inputBorder} solid 2px;
	border-radius: ${Constants.borderRadius.components.authForm.input};
`;

// ============== //
// ↓↓↓  Icons ↓↓↓ //
// ============== //

export const InputIconUsername = styled("img").attrs(() => ({
	src: usernameIcon,
	alt: "auth form component username icon",
}))`
	${Snippets.square(Constants.size.components.authForm.icon.width)};
`;

export const InputIconEmail = styled("img").attrs(() => ({
	src: emailIcon,
	alt: "auth form component email icon",
}))`
	${Snippets.square(Constants.size.components.authForm.icon.width)};
`;

export const InputIconPassword = styled("img").attrs(() => ({
	src: passwordIcon,
	alt: "auth form component password icon",
}))`
	${Snippets.square(Constants.size.components.authForm.icon.width)};
`;

type PasswordRevealIconsProps = { input_type: string };

export const InputFieldPasswordRevealIcons = styled("div")<PasswordRevealIconsProps>`
	display: ${(props) => {
		return props.input_type === "Username"
			? "none"
			: props.input_type === "Email"
			? "none"
			: "block";
	}};
	cursor: pointer;
`;

export const InputIconPasswordHide = styled(animated.img).attrs(() => ({
	src: passwordHideIcon,
	alt: "auth form component password hide icon",
}))`
	${Snippets.square(Constants.size.components.authForm.icon.width)};
`;

export const InputIconPasswordShow = styled(animated.img).attrs(() => ({
	src: passwordShowIcon,
	alt: "auth form component password show icon",
}))`
	${Snippets.square(Constants.size.components.authForm.icon.width)};
`;

// =================== //
// ↓↓↓ Field Types ↓↓↓ //
// =================== //

const fieldTypeStyles = css`
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
		font-style: italic;
	}
`;

type FieldTypeProps = { reveal_password: boolean };

export const InputUsernameOrEmail = styled("input").attrs(() => ({
	type: "text",
	placeholder: "Enter your username or email",
	required: true,
}))`
	${fieldTypeStyles};
`;

export const InputUsername = styled("input").attrs(() => ({
	type: "text",
	placeholder: "WataAni",
	required: true,
}))`
	${fieldTypeStyles};
`;

export const InputEmail = styled("input").attrs(() => ({
	type: "email",
	placeholder: "wata@ani.com",
	required: true,
}))`
	${fieldTypeStyles};
`;

export const InputPassword = styled("input").attrs((props: FieldTypeProps) => ({
	type: props.reveal_password ? "text" : "password",
	placeholder: "aBcD!@#$123",
	required: true,
}))<FieldTypeProps>`
	${fieldTypeStyles};
`;

export const InputPasswordConfirmation = styled("input").attrs(
	(props: FieldTypeProps) => ({
		type: props.reveal_password ? "text" : "password",
		placeholder: "aBcD!@#$123",
		required: true,
	}),
)<FieldTypeProps>`
	${fieldTypeStyles};
`;