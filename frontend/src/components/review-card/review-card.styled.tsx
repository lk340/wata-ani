import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

import ratingHollow from "@/icons/home/authed/rating-hollow.svg";
import ratingFilled from "@/icons/home/authed/rating-filled.svg";
import likesHollow from "@/icons/home/authed/likes-hollow.svg";
import likesFilled from "@/icons/home/authed/likes-filled.svg";
import close from "@/icons/close.svg";

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
`;

// ============== //
// ↓↓↓ Header ↓↓↓ //
// ============== //

export const ReviewCardHeader = styled("div")`
	${Snippets.flex("row", "auto", "center")};
	height: 80px;
	padding: 0px 20px;

	border: red solid 1px;
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

// ======================= //
// ↓↓↓ Rating & Likes ↓↓↓ //
// ======================= //

export const ReviewCardRatingAndLikes = styled(animated.div)`
	${Snippets.flex("row", "space-between", "center")};
	padding: 10px 20px;
`;

export const ReviewCardRatingContainer = styled("div")`
	${Snippets.flex("column")};
`;

export const ReviewCardRating = styled("div")`
	${Snippets.grid(3, "auto", 2, "center", "center")};
`;

export const ReviewCardRatingValue = styled("h2")`
	font-size: ${Constants.fontSizes.components.reviewCard.ratingValue};
`;

export const ReviewCardRatingFraction = styled("span")`
	display: block;
	font-size: ${Constants.fontSizes.components.reviewCard.ratingFraction};
`;

export const ReviewCardRatingUserCount = styled("span")`
	display: block;
	font-size: ${Constants.fontSizes.components.reviewCard.ratingUserCount};
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
	padding: 20px 20px 0px;
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
