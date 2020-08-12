import styled, { css, createGlobalStyle } from "styled-components";
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

export const Input = styled("div")`
	${Snippets.grid(1, "auto", 10)};
`;

export const InputTitle = styled("h1")`
	${Snippets.clearSpacing()};
	color: ${Colors.PRIMARY_100};
	font-weight: bold;
	font-size: ${Constants.fontSizes.components.authForm.inputTitle};
`;

export const InputFieldGroup = styled("div")`
	${Snippets.flex("row", "auto", "center")};
	${Snippets.size("400px", "50px")};
	padding: 0px 20px;
	background-color: ${Constants.theme.components.authForm.inputBackground};
	border: ${Constants.theme.components.authForm.inputBorder} solid 2px;
	border-radius: ${Constants.borderRadius.components.authForm.input};
`;

type InputFieldPasswordIconsProps = { input_type: string };

export const InputFieldPasswordIcons = styled("div")<InputFieldPasswordIconsProps>`
	display: ${(props) =>
		props.input_type === "Username"
			? "none"
			: props.input_type === "Email"
			? "none"
			: "block"};
	cursor: pointer;
`;

// ========================= //
// ↓↓↓ Input Field Icons ↓↓↓ //
// ========================= //

const inputIconStyles = css`
	${Snippets.square("20px")};
`;

export const InputIconUsername = styled("img").attrs(() => ({
	src: usernameIcon,
	alt: "auth form component username icon",
}))`
	${inputIconStyles};
`;

export const InputIconEmail = styled("img").attrs(() => ({
	src: emailIcon,
	alt: "auth form component email icon",
}))`
	${inputIconStyles};
`;

export const InputIconPassword = styled("img").attrs(() => ({
	src: passwordIcon,
	alt: "auth form component password icon",
}))`
	${inputIconStyles};
`;

type InputIconPasswordHideProps = { reveal_password: boolean };

export const InputIconPasswordHide = styled(animated.img).attrs(() => ({
	src: passwordHideIcon,
	alt: "auth form component password hide icon",
}))<InputIconPasswordHideProps>`
	${inputIconStyles};
`;

export const InputIconPasswordShow = styled(animated.img).attrs(() => ({
	src: passwordShowIcon,
	alt: "auth form component password show icon",
}))<InputIconPasswordHideProps>`
	${inputIconStyles};
`;

// ========================= //
// ↓↓↓ Input Field Types ↓↓↓ //
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
		font-style: italic;
	}
`;

export const InputUsername = styled("input").attrs(() => ({
	type: "text",
	placeholder: "WataAni",
	required: true,
}))`
	${inputTypeStyles};
`;

export const InputEmail = styled("input").attrs(() => ({
	type: "email",
	placeholder: "wata@ani.com",
	required: true,
}))`
	${inputTypeStyles};
`;

export const InputPassword = styled("input").attrs(
	(props: InputIconPasswordHideProps) => ({
		type: props.reveal_password ? "text" : "password",
		placeholder: "aBcD!@#$123",
		required: true,
	}),
)<InputIconPasswordHideProps>`
	${inputTypeStyles};
`;

export const InputPasswordConfirmation = styled("input").attrs(
	(props: InputIconPasswordHideProps) => ({
		type: props.reveal_password ? "text" : "password",
		placeholder: "aBcD!@#$123",
		required: true,
	}),
)<InputIconPasswordHideProps>`
	${inputTypeStyles};
`;
