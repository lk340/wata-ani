import styled, { css } from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

import passwordHideIcon from "@/icons/auth/password-hide.svg";
import passwordShowIcon from "@/icons/auth/password-show.svg";

// ================ //
// ↓↓↓ Settings ↓↓↓ //
// ================ //

export const SettingsInputContainer = styled(animated.div)`
	${Snippets.flex("row", "auto", "center")};
	${Snippets.size("400px", "50px")};
	margin-bottom: 30px;
	color: inherit;
	border-radius: ${Constants.borderRadius.components.navbarOption.create.form};
	font-size: ${Constants.fontSizes.components.navbarOption.create.form.input};
	outline: none;

	@media (max-width: 625px) {
		width: 100%;
	}
`;

type FieldTypeProps = {
	reveal_password?: string;
};

const fieldTypeStyles = css`
	flex: 1;
	height: 100%;
	margin: 0px 20px;
	color: inherit;
	background-color: ${Colors.NEUTRALS.transparent};
	border: none;
	font-size: ${Constants.fontSizes.components.navbarOption.create.form.input};
	outline: none;
`;

export const InputCurrentPassword = styled(animated.input).attrs(
	(props: FieldTypeProps) => ({
		type: props.reveal_password === "true" ? "text" : "password",
		placeholder: "Enter your current password.",
	}),
)<FieldTypeProps>`
	${fieldTypeStyles};
`;

export const InputNewPassword = styled(animated.input).attrs((props: FieldTypeProps) => ({
	type: props.reveal_password === "true" ? "text" : "password",
	placeholder: "Enter a new password.",
}))<FieldTypeProps>`
	${fieldTypeStyles};
`;

export const InputNewPasswordConfirmation = styled(animated.input).attrs(
	(props: FieldTypeProps) => ({
		type: props.reveal_password === "true" ? "text" : "password",
		placeholder: "Confirm new password.",
	}),
)<FieldTypeProps>`
	${fieldTypeStyles};
`;

// ============================= //
// ↓↓↓ Password Reveal Icons ↓↓↓ //
// ============================= //

export const InputFieldPasswordRevealIcons = styled("div")`
	padding-right: 20px;
	cursor: pointer;
`;

export const InputIconPasswordHide = styled(animated.img).attrs(() => ({
	src: passwordHideIcon,
	alt: "navbar options settings component password hide icon",
}))`
	${Snippets.square(`${Constants.size.components.authForm.icon.width}px`)};
`;

export const InputIconPasswordShow = styled(animated.img).attrs(() => ({
	src: passwordShowIcon,
	alt: "navbar options settings component password show icon",
}))`
	${Snippets.square(`${Constants.size.components.authForm.icon.width}px`)};
`;
