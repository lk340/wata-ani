import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

import ratingHollow from "@/icons/home/authed/rating-hollow.svg";
import ratingFilled from "@/icons/home/authed/rating-filled.svg";
import likesHollow from "@/icons/home/authed/likes-hollow.svg";
import likesFilled from "@/icons/home/authed/likes-filled.svg";

/**
 * Review Card
 * Header
 * Content
 * Rating & Likes
 * Rating
 * Likes
 * Rating Modal
 */

// =================== //
// ↓↓↓ Review Card ↓↓↓ //
// =================== //

export const ReviewCard = styled(animated.div)`
	position: relative;
	padding: 20px;
	border-radius: ${Constants.borderRadius.components.reviewCard};
`;

// ============== //
// ↓↓↓ Header ↓↓↓ //
// ============== //

export const ReviewCardHeader = styled("div")`
	${Snippets.flex("row", "auto", "center")};
	margin-bottom: 10px;
`;

export const ReviewCardProfilePicture = styled("img")`
	${Snippets.square("40px")};
	${Snippets.makeCircle()};
	margin-right: 20px;
`;

export const ReviewCardUsername = styled("p")`
	${Snippets.clearSpacing()};
	font-weight: bold;
`;

// =============== //
// ↓↓↓ Content ↓↓↓ //
// =============== //

export const ReviewCardSeriesName = styled("p")`
	${Snippets.clearSpacing()};
	margin-bottom: 10px;
	color: ${Colors.PRIMARY_100};
	font-weight: bold;
	line-height: ${Constants.lineHeights.body};
`;

export const ReviewCardTitleDateText = styled("div")`
	${Snippets.grid(1, "auto", 6)};
	margin-bottom: 20px;
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

// ======================= //
// ↓↓↓ Rating & Likes ↓↓↓ //
// ======================= //

export const ReviewCardRatingLikesContainer = styled("div")``;

export const ReviewCardIconContainer = styled("div")`
	${Snippets.flexRowCenter()};
	position: relative;
`;

export const ReviewCardCount = styled("span")`
	display: block;
	margin-left: 10px;
	color: ${Colors.PRIMARY_100};
	font-size: ${Constants.fontSizes.components.reviewCard.rating};
`;

const iconStyles = css`
	width: 14px;
	cursor: pointer;
`;

// ============== //
// ↓↓↓ Rating ↓↓↓ //
// ============== //

export const ReviewCardRatingContainer = styled("div")`
	${Snippets.flex("row", "auto", "center")};
	margin-bottom: 10px;
`;

export const ReviewCardRatingIconHollow = styled("img").attrs(() => ({
	src: ratingHollow,
	alt: "home page review card rating icon hollow",
}))`
	${iconStyles};
`;

export const ReviewCardRatingIconFilled = styled(animated.img).attrs(() => ({
	src: ratingFilled,
	alt: "home page review card rating icon filled",
}))`
	${iconStyles};
	position: absolute;
`;

// ============= //
// ↓↓↓ Likes ↓↓↓ //
// ============= //

export const ReviewCardLikesContainer = styled("div")`
	${Snippets.flex("row", "auto", "center")};
`;

export const ReviewCardLikesIconHollow = styled("img").attrs(() => ({
	src: likesHollow,
	alt: "home page review card likes icon hollow",
}))`
	${iconStyles};
`;

export const ReviewCardLikesIconFilled = styled(animated.img).attrs(() => ({
	src: likesFilled,
	alt: "home page review card likes icon filled",
}))`
	${iconStyles};
	position: absolute;
`;

// ==================== //
// ↓↓↓ Rating Modal ↓↓↓ //
// ==================== //

export const ReviewCardRatingModal = styled(animated.div)`
	${Snippets.absolute("0", "0", "0", "0", 2)};

	border: green solid 1px;
`;
