import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

import close from "@/icons/close.svg";

/**
 * Create
 * Header
 * Body
 * Form
 * Form: Title & Character Count
 * Form: Error
 * Form: Input & Textarea
 * Form: Submit Button
 */

// ============== //
// ↓↓↓ Create ↓↓↓ //
// ============== //

const navbarMobileHeight = Constants.size.components.navbar.height / 2;
const navbarMobileOptionsHeight = Constants.size.components.navbarMobile.height;
const totalMobileHeight = navbarMobileHeight + navbarMobileOptionsHeight;

export const CreateContainer = styled(animated.div)`
	${Snippets.absolute("100%", "0%", "auto", "auto")};
	margin-right: ${Constants.size.components.navbar.spacer}px;
	border-radius: ${Constants.borderRadius.components.navbarOption.container};

	@media (max-width: 625px) {
		${Snippets.fixed("auto", "0%", "auto", "0%", 2)};
		margin-right: 0px;
		height: ${`calc(100vh - ${totalMobileHeight}px)`};
		border-radius: 0rem;
		transform: translateY(0px) !important;
	}

	border: red solid 1px;
`;

export const Create = styled(animated.div)`
	${Snippets.flex("column")};
	border-radius: ${Constants.borderRadius.components.navbarOption.container};

	@media (max-width: 625px) {
		border: none !important;
		border-radius: 0rem;

		border: red solid 1px !important;
	}
`;

// ============== //
// ↓↓↓ Header ↓↓↓ //
// ============== //

export const CreateHeader = styled(animated.div)`
	${Snippets.flex("row", "space-between", "center")};
	height: ${Constants.size.components.navbarOption.header}px;
	padding: 0px 30px;

	border: blue solid 1px !important;
`;

export const CreateHeaderTitle = styled("h2")`
	${Snippets.clearSpacing()};
	color: inherit;
	font-size: ${Constants.fontSizes.components.navbarOption.header};
`;

export const CreateHeaderClose = styled("img").attrs(() => ({
	src: close,
	alt: "navbar option component header close icon",
}))`
	${Snippets.square("20px")};
	cursor: pointer;
`;

// ============ //
// ↓↓↓ Body ↓↓↓ //
// ============ //

export const CreateBody = styled("div")`
	flex: 1;
	padding: 30px;

	border: blue solid 1px !important;
`;

// ============ //
// ↓↓↓ Form ↓↓↓ //
// ============ //

export const CreateBodyForm = styled("form")`
	${Snippets.flexColumnCenter()};
`;

export const CreateBodyFormGroup = styled("div")`
	@media (max-width: 625px) {
		width: 100%;
	}
`;

// ====================================== //
// ↓↓↓ Form : Title & Character Count ↓↓↓ //
// ====================================== //

export const CreateBodyFormTitle_Count = styled("div")`
	${Snippets.flex("row", "auto", "center")};
	margin-bottom: 10px;

	@media (max-width: 625px) {
		display: none;
	}
`;

export const CreateBodyFormTitle = styled("h3")`
	${Snippets.clearSpacing()};
	font-size: ${Constants.fontSizes.components.navbarOption.create.form.header};
	font-weight: bold;
`;

export const CreateBodyFormCharacterCount = styled(animated.span)`
	display: block;
	margin-left: 10px;
	font-size: ${Constants.fontSizes.components.navbarOption.create.form.characterCount};
`;

// =================== //
// ↓↓↓ Form: Error ↓↓↓ //
// =================== //

export const CreateBodyFormPersonalRatingError = styled(animated.h3)`
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

export const CreateBodyFormSeriesTitleInput = styled(animated.input).attrs(() => ({
	placeholder: "Series title here (max 100 characters)",
}))`
	padding: 0px 20px;
	${inputStyles};
`;

export const CreateBodyFormReviewTitleInput = styled(animated.input).attrs(() => ({
	placeholder: "Your title here (max 50 characters)",
}))`
	padding: 0px 20px;
	${inputStyles};
`;

export const CreateBodyFormPersonalRatingInput = styled(animated.input).attrs(() => ({
	placeholder: "Your personal rating here",
}))`
	padding: 0px 20px;
	${inputStyles};
`;

export const CreateBodyFormReviewTextarea = styled(animated.textarea).attrs(() => ({
	placeholder: "Your review here (max 500 characters)",
}))`
	${inputStyles};
	padding: 20px;
	height: 100px;
`;

// =========================== //
// ↓↓↓ Form: Submit Button ↓↓↓ //
// =========================== //

export const CreateBodyFormSubmitButton = styled("button").attrs(() => ({
	type: "submit",
}))`
	${Snippets.flexRowCenter()};
	${inputStyles};
	border: none;
	color: ${Colors.NEUTRALS.white_100};
	background-color: ${Colors.PRIMARY_100};
	cursor: pointer;
`;
