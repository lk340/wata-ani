import styled, { css } from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

/**
 * Form
 * Form: Title & Character Count
 * Form: Error
 * Form: Input & Textarea
 * Form: Submit Button
 */

// ============ //
// ↓↓↓ Form ↓↓↓ //
// ============ //

export const CreateForm = styled("form")`
	${Snippets.flexColumnCenter()};
`;

export const CreateFormGroup = styled("div")`
	@media (max-width: 625px) {
		width: 100%;
	}
`;

// ====================================== //
// ↓↓↓ Form : Title & Character Count ↓↓↓ //
// ====================================== //

export const CreateFormTitle_Count = styled("div")`
	${Snippets.flex("row", "auto", "center")};
	margin-bottom: 10px;
`;

export const CreateFormTitle = styled("h3")`
	${Snippets.clearSpacing()};
	font-size: ${Constants.fontSizes.components.navbarOption.create.form.header};
	font-weight: bold;
`;

export const CreateFormCharacterCount = styled(animated.span)`
	display: block;
	margin-left: 10px;
	font-size: ${Constants.fontSizes.components.navbarOption.create.form.characterCount};
`;

// =================== //
// ↓↓↓ Form: Error ↓↓↓ //
// =================== //

export const CreateFormPersonalRatingError = styled(animated.h3)`
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

export const CreateFormSeriesTitleInput = styled(animated.input).attrs(() => ({
	placeholder: "Series title here (max 100 characters)",
}))`
	padding: 0px 20px;
	${inputStyles};
`;

export const CreateFormReviewTitleInput = styled(animated.input).attrs(() => ({
	placeholder: "Your title here (max 50 characters)",
}))`
	padding: 0px 20px;
	${inputStyles};
`;

export const CreateFormPersonalRatingInput = styled(animated.input).attrs(() => ({
	placeholder: "Your personal rating here",
}))`
	padding: 0px 20px;
	${inputStyles};
`;

export const CreateFormReviewTextarea = styled(animated.textarea).attrs(() => ({
	placeholder: "Your review here (max 500 characters)",
}))`
	${inputStyles};
	padding: 20px;
	height: 100px;
`;

// =========================== //
// ↓↓↓ Form: Submit Button ↓↓↓ //
// =========================== //

export const CreateFormSubmitButton = styled("button").attrs(() => ({
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
