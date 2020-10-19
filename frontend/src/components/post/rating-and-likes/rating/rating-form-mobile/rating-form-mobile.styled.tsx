import styled from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

import close from "@/icons/close.svg";

/**
 * Rating Form
 * Input Group
 * Submit Button
 * Close
 */

// =================== //
// ↓↓↓ Rating Form ↓↓↓ //
// =================== //

export const RatingForm = styled(animated.form)`
	${Snippets.absolute("100%", "auto", "auto", "-20px")};
	${Snippets.grid(2, "auto", 30, "center", "center")};
	padding: 10px 20px;
	border-radius: ${Constants.borderRadius.components.post.ratingFormMobile};
`;

// =================== //
// ↓↓↓ Input Group ↓↓↓ //
// =================== //

export const RatingFormInput_Submit = styled("div")`
	display: flex;
`;

export const RatingFormInputGroup = styled("div")`
	${Snippets.flexRowCenter()};
	margin-right: 20px;
`;

export const RatingFormInput = styled(animated.input).attrs(() => ({
	placeholder: "8",
}))`
	${Snippets.flexRowCenter()};
	${Snippets.square("28px")};
	margin-right: 6px;
	color: inherit;
	border: none;
	border-radius: ${Constants.borderRadius.components.post.ratingInput};
	font-size: ${Constants.fontSizes.components.post.ratingInput};
	font-weight: bold;
	text-align: center;
	outline: none;

	::placeholder {
		color: ${Colors.LIGHT.five};
	}
`;

type InputText = { margin: "true" | "false" };

export const RatingFormInputText = styled("span")<InputText>`
	display: block;
	margin-right: ${(props) => (props.margin === "true" ? "4px" : "0px")};
	font-size: ${Constants.fontSizes.components.post.ratingInputText};
	font-weight: bold;
`;

// ===================== //
// ↓↓↓ Submit button ↓↓↓ //
// ===================== //

export const RatingFormSubmitButton = styled("button").attrs(() => ({
	type: "submit",
}))`
	padding: 6px 10px;
	color: ${Colors.NEUTRALS.white_100};
	background-color: ${Colors.PRIMARY_100};
	border: none;
	border-radius: ${Constants.borderRadius.components.post.ratingSubmit};
	font-size: ${Constants.fontSizes.components.post.ratingSubmit};
	font-weight: bold;
	cursor: pointer;
`;

// ============= //
// ↓↓↓ Close ↓↓↓ //
// ============= //

export const RatingFormClose = styled("img").attrs(() => ({
	src: close,
	alt: "review card component rating form mobile modal close button",
}))`
	${Snippets.square("16px")};
	cursor: pointer;
`;
