import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

import likesHollow from "@/icons/home/authed/likes-hollow.svg";
import likesFilled from "@/icons/home/authed/likes-filled.svg";

/**
 * Review Card
 * Header
 * Rating & Likes
 * Rating
 * Likes
 * Content
 */

// =================== //
// ↓↓↓ Review Card ↓↓↓ //
// =================== //

export const ReviewCard = styled(animated.div)`
	position: relative;
	border-radius: ${Constants.borderRadius.components.reviewCard};
	height: ${Constants.size.components.reviewCard.height}px;
`;

// ============== //
// ↓↓↓ Header ↓↓↓ //
// ============== //

export const ReviewCardHeader = styled("div")`
	${Snippets.flex("row", "auto", "center")};
	height: 80px;
	padding: 0px 20px;
`;

export const ReviewCardProfilePicture = styled("img").attrs(() => ({
	// alt: "review card component profile picture",
}))`
	${Snippets.square("40px")};
	${Snippets.makeCircle()};
	margin-right: 20px;
	background-color: ${Colors.LIGHT.five};
`;

export const ReviewCardUsername = styled("p")`
	${Snippets.clearSpacing()};
	font-weight: bold;
`;

// ======================= //
// ↓↓↓ Rating & Likes ↓↓↓ //
// ======================= //

export const ReviewCardRatingAndLikes = styled(animated.div)`
	${Snippets.flex("row", "space-between", "center")};
	padding: 10px 20px;
`;

// --- Rating --- //

export const ReviewCardRatingContainer = styled("div")`
	${Snippets.flex("column")};
`;

export const ReviewCardRating = styled("div")`
	${Snippets.grid(3, "auto", 4, "auto", "center")};
`;

export const ReviewCardRatingValue = styled("h2")`
	${Snippets.clearSpacing()};
	color: ${Colors.PRIMARY_100};
	font-size: ${Constants.fontSizes.components.reviewCard.ratingValue};
	font-weight: bold;
`;

export const ReviewCardRatingFraction = styled("span")`
	display: block;
	color: ${Colors.LIGHT.five};
	font-size: ${Constants.fontSizes.components.reviewCard.ratingFraction};
	font-weight: bold;
`;

export const ReviewCardRatingCount = styled("span")`
	display: block;
	font-size: ${Constants.fontSizes.components.reviewCard.ratingCount};
`;

// --- Likes --- //

export const ReviewCardLikes = styled("div")`
	${Snippets.flexRowCenter()};
`;

export const ReviewCardLikesIconContainer = styled("div")`
	${Snippets.flexRowCenter()};
	position: relative;
`;

export const ReviewCardLikesIconHollow = styled("img").attrs(() => ({
	src: likesHollow,
	alt: "review card component likes icon hollow",
}))`
	${Snippets.square("16px")};
	cursor: pointer;
`;

export const ReviewCardLikesIconFilled = styled("img").attrs(() => ({
	src: likesFilled,
	alt: "review card component likes icon filled",
}))`
	${Snippets.square("16px")};
	position: absolute;
	cursor: pointer;
`;

export const ReviewCardLikesCount = styled("span")`
	display: block;
	margin-left: 10px;
	font-size: ${Constants.fontSizes.components.reviewCard.likesCount};
	font-weight: bold;
`;

// =============== //
// ↓↓↓ Content ↓↓↓ //
// =============== //

export const ReviewCardSeriesName = styled("p")`
	${Snippets.clearSpacing()};
	padding: 20px 20px 10px;
	color: ${Colors.PRIMARY_100};
	font-size: ${Constants.fontSizes.components.reviewCard.seriesName};
	font-weight: bold;
	line-height: ${Constants.lineHeights.body};
`;

export const ReviewCardTitleDateText = styled("div")`
	${Snippets.grid(1, "auto", 6)};
	padding: 0px 20px;
`;

export const ReviewCardTitle = styled("p")`
	${Snippets.clearSpacing()};
	font-size: ${Constants.fontSizes.components.reviewCard.cardTitle};
	font-weight: bold;
	line-height: ${Constants.lineHeights.body};
`;

export const ReviewCardDate = styled(animated.p)`
	${Snippets.clearSpacing()};
	font-size: ${Constants.fontSizes.components.reviewCard.cardDate};
`;

export const ReviewCardText = styled("p")`
	${Snippets.clearSpacing()};
	font-size: ${Constants.fontSizes.components.reviewCard.cardText};
	line-height: ${Constants.lineHeights.body};
`;
