import styled, { css } from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

import close from "@/icons/close.svg";

/**
 * Container / Wrapper
 * Header
 * Body
 * Form
 * Form: Title & Character Count
 * Form: Error
 * Form: Input & Textarea
 * Form: Submit Button
 */

// =========================== //
// ↓↓↓ Container / Wrapper ↓↓↓ //
// =========================== //

export const Container = styled(animated.div)`
	${Snippets.absolute("100%", "0%", "auto", "auto")};
	margin-right: ${Constants.size.components.navbar.spacer}px;

	@media (max-width: 625px) {
		${Snippets.fixed("0%", "0%", "0%", "0%", 2)};
		margin-right: 0px;
		padding: 50px 0px 80px;
		transform: translateY(0px) !important;
	}
`;

export const Wrapper = styled(animated.div)`
	${Snippets.flex("column")};
	border-radius: ${Constants.borderRadius.components.navbarOption.container};

	@media (max-width: 625px) {
		height: 100%;
		border: none !important;
		border-radius: 0rem;
	}
`;

// ============== //
// ↓↓↓ Header ↓↓↓ //
// ============== //

export const Header = styled(animated.div)`
	${Snippets.flex("row", "space-between", "center")};
	height: ${Constants.size.components.navbarOption.header}px;
	padding: 0px 30px;
	flex-shrink: 0;
`;

export const HeaderTitle = styled("h2")`
	${Snippets.clearSpacing()};
	color: inherit;
	font-size: ${Constants.fontSizes.components.navbarOption.header};
`;

export const HeaderClose = styled("img").attrs(() => ({
	src: close,
	alt: "navbar option component header close icon",
}))`
	${Snippets.square("20px")};
	cursor: pointer;
`;

// ============ //
// ↓↓↓ Body ↓↓↓ //
// ============ //

export const Body = styled("div")`
	flex: 1;
	padding: 30px;
	overflow-y: auto;
`;

// ============ //
// ↓↓↓ Form ↓↓↓ //
// ============ //

export const Form = styled("form")`
	${Snippets.flexColumnCenter()};
`;

export const FormGroup = styled("div")`
	@media (max-width: 625px) {
		width: 100%;
	}
`;

// ====================================== //
// ↓↓↓ Form : Title & Character Count ↓↓↓ //
// ====================================== //

export const FormTitle_Count = styled("div")`
	${Snippets.flex("row", "auto", "center")};
	margin-bottom: 10px;
`;

export const FormTitle = styled("h3")`
	${Snippets.clearSpacing()};
	font-size: ${Constants.fontSizes.components.navbarOption.create.form.header};
	font-weight: bold;
`;

export const FormCharacterCount = styled(animated.span)`
	display: block;
	margin-left: 10px;
	font-size: ${Constants.fontSizes.components.navbarOption.create.form.characterCount};
`;

// =================== //
// ↓↓↓ Form: Error ↓↓↓ //
// =================== //

export const FormError = styled(animated.h3)`
	${Snippets.clearSpacing()};
	margin-bottom: 10px;
	font-size: ${Constants.fontSizes.components.navbarOption.create.form.input};
	font-weight: normal;
`;

// ============================== //
// ↓↓↓ Form: Input & Textarea ↓↓↓ //
// ============================== //

const inputStyles = css`
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

export const FormInput = styled(animated.input)`
	${inputStyles};
	padding: 0px 20px;
`;

// =========================== //
// ↓↓↓ Form: Submit Button ↓↓↓ //
// =========================== //

export const FormSubmitButton = styled("button").attrs(() => ({
	type: "submit",
}))`
	${Snippets.flexRowCenter()};
	${inputStyles};
	margin: 0px;
	border: none;
	color: ${Colors.NEUTRALS.white_100};
	background-color: ${Colors.PRIMARY_100};
	cursor: pointer;

	@media (max-width: 625px) {
		margin-bottom: 30px;
	}
`;
