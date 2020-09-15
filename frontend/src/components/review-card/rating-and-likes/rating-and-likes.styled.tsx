import styled from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

import likesHollow from "@/icons/home/authed/likes-hollow.svg";
import likesFilled from "@/icons/home/authed/likes-filled.svg";

/**
 * Rating & Likes
 * User Rating
 * Rating Form
 * Likes
 */

// ======================= //
// ↓↓↓ Rating & Likes ↓↓↓ //
// ======================= //

export const RatingAndLikes = styled(animated.div)`
	${Snippets.flex("row", "space-between", "center")};
	padding: 0px 20px;
	border-radius: ${Constants.borderRadius.components.reviewCard.ratingAndLikes};
`;

export const Rating = styled("div")`
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

// =================== //
// ↓↓↓ Rating Form ↓↓↓ //
// =================== //

export const RatingForm = styled(animated.form)`
	${Snippets.flex("row", "center", "center")};
	margin: 5px 0px;
	padding: 14px 20px;
	border-radius: ${Constants.borderRadius.components.reviewCard.ratingForm};
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

		border: red solid 1px;
	}
`;

type InputText = { margin: "true" | "false" };

export const RatingFormInputText = styled("span")<InputText>`
	display: block;
	margin-right: ${(props) => (props.margin === "true" ? "4px" : "0px")};
	font-size: ${Constants.fontSizes.components.reviewCard.ratingInputText};
	font-weight: bold;
`;

export const RatingFormSubmitButton = styled("button")`
	padding: 6px 10px;
	color: ${Colors.NEUTRALS.white_100};
	background-color: ${Colors.PRIMARY_100};
	border: none;
	border-radius: ${Constants.borderRadius.components.reviewCard.ratingSubmit};
	font-size: ${Constants.fontSizes.components.reviewCard.ratingSubmit};
	font-weight: bold;
	cursor: pointer;
`;

// ============= //
// ↓↓↓ Likes ↓↓↓ //
// ============= //

export const Likes = styled("div")`
	${Snippets.flexRowCenter()};
`;

export const LikesIconContainer = styled("div")`
	${Snippets.flexRowCenter()};
	position: relative;
`;

export const LikesIconHollow = styled("img").attrs(() => ({
	src: likesHollow,
	alt: "review card component likes icon hollow",
}))`
	${Snippets.square("16px")};
	cursor: pointer;
`;

export const LikesIconFilled = styled("img").attrs(() => ({
	src: likesFilled,
	alt: "review card component likes icon filled",
}))`
	${Snippets.square("16px")};
	position: absolute;
	cursor: pointer;
`;

export const LikesCount = styled(animated.span)`
	display: block;
	margin-left: 10px;
	color: ${Colors.LIGHT.five};
	font-size: ${Constants.fontSizes.components.reviewCard.likesCount};
	font-weight: bold;
`;
