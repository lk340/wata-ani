import styled, { css } from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

import close from "@/icons/close.svg";

/**
 * Rating
 * User Rating
 * Form
 * Mobile Modal Form Toggle Button
 * Modal Form (mobile)
 */

// ============== //
// ↓↓↓ Rating ↓↓↓ //
// ============== //

export const Rating = styled("div")`
	position: relative;
	display: flex;
`;

// =================== //
// ↓↓↓ User Rating ↓↓↓ //
// =================== //

export const UserRatingContainer = styled("div")`
	${Snippets.flex("column", "center", "auto")};
	margin-right: 20px;
	padding: 10px 0px;
`;

export const UserRating = styled("div")`
	${Snippets.grid(3, "auto", 4, "auto", "center")};
`;

export const UserRatingValue = styled("h2")`
	${Snippets.clearSpacing()};
	color: ${Colors.PRIMARY_100};
	font-size: ${Constants.fontSizes.components.reviewCard.ratingValue};
	font-weight: bold;
`;

export const UserRatingFraction = styled("span")`
	display: block;
	color: ${Colors.LIGHT.five};
	font-size: ${Constants.fontSizes.components.reviewCard.ratingFraction};
	font-weight: bold;
`;

export const UserRatingCount = styled("span")`
	display: block;
	font-size: ${Constants.fontSizes.components.reviewCard.ratingCount};
`;

// ============ //
// ↓↓↓ Form ↓↓↓ //
// ============ //

export const RatingFormDesktop = styled(animated.form)`
	${Snippets.flex("row", "center", "center")};
	margin: 5px 0px;
	padding: 14px 20px;
	border-radius: ${Constants.borderRadius.components.reviewCard.ratingForm};

	@media (max-width: ${Constants.breakpoints.mobile}px) {
		display: none;
	}
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
	border-radius: ${Constants.borderRadius.components.reviewCard.ratingInput};
	font-size: ${Constants.fontSizes.components.reviewCard.ratingInput};
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
	font-size: ${Constants.fontSizes.components.reviewCard.ratingInputText};
	font-weight: bold;
`;

const buttonStyles = css`
	padding: 6px 10px;
	color: ${Colors.NEUTRALS.white_100};
	background-color: ${Colors.PRIMARY_100};
	border: none;
	border-radius: ${Constants.borderRadius.components.reviewCard.ratingSubmit};
	font-size: ${Constants.fontSizes.components.reviewCard.ratingSubmit};
	font-weight: bold;
	cursor: pointer;
`;

export const RatingFormSubmitButton = styled("button").attrs(() => ({
	type: "submit",
}))`
	${buttonStyles};
`;

// ======================================= //
// ↓↓↓ Mobile Modal Form Toggle Button ↓↓↓ //
// ======================================= //

export const RatingFormMobileButtonContainer = styled("div")`
	${Snippets.flexRowCenter()};
`;

type OpenMobile = { open: string };

export const RatingFormMobileButton = styled("div")<OpenMobile>`
	${buttonStyles};
	display: none;

	@media (max-width: ${Constants.breakpoints.mobile}px) {
		display: block;
	}
`;

export const RatingFormMobileClose = styled("img").attrs(() => ({
	src: close,
	alt: "review card component rating form mobile modal close button",
}))`
	${Snippets.square("16px")};
	cursor: pointer;
`;

// =========================== //
// ↓↓↓ Modal Form (mobile) ↓↓↓ //
// =========================== //

export const RatingFormMobile = styled(animated.form)`
	${Snippets.absolute("100%", "auto", "auto", "-20px")};
	transform: translateY(10px);
	display: none;
	padding: 10px 20px;
	border-radius: ${Constants.borderRadius.components.reviewCard.ratingFormMobile};

	@media (max-width: ${Constants.breakpoints.mobile}px) {
		${Snippets.grid(2, "auto", 30, "center", "center")};
	}
`;

export const RatingFormMobileInputSubmit = styled("div")`
	display: flex;
`;
