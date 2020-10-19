import styled from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

/**
 * Rating Form
 * Input Group
 * Submit Button
 */

// =================== //
// ↓↓↓ Rating Form ↓↓↓ //
// =================== //

export const RatingForm = styled(animated.form)`
	${Snippets.flex("row", "center", "center")};
	margin: 5px 0px;
	padding: 14px 20px;
	border-radius: ${Constants.borderRadius.components.post.ratingForm};

	@media (max-width: ${Constants.breakpoints.mobile}px) {
		display: none;
	}
`;

// =================== //
// ↓↓↓ Input Group ↓↓↓ //
// =================== //

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
// ↓↓↓ Submit Button ↓↓↓ //
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
