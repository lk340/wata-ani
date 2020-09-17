import styled from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

/**
 * Review Card
 * Header
 * Series Name
 * Title & Date & Text
 * Author Rating
 */

// =================== //
// ↓↓↓ Review Card ↓↓↓ //
// =================== //

export const ReviewCard = styled(animated.div)`
	position: relative;
	border-radius: ${Constants.borderRadius.components.reviewCard.card};
	max-width: ${Constants.size.components.reviewCard.maxWidth}px;
	/* height: ${Constants.size.components.reviewCard.height}px; */
	padding: 20px;

	/* @media (max-width: ${Constants.breakpoints.mobile}px) {
		height: 475px;
	} */
`;

// ============== //
// ↓↓↓ Header ↓↓↓ //
// ============== //

export const ReviewCardHeader = styled("div")`
	${Snippets.flex("row", "auto", "center")};
	height: 80px;
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

// =================== //
// ↓↓↓ Series Name ↓↓↓ //
// =================== //

export const ReviewCardSeriesName = styled("p")`
	${Snippets.clearSpacing()};
	padding: 20px 0px 10px;
	color: ${Colors.PRIMARY_100};
	font-size: ${Constants.fontSizes.components.reviewCard.seriesName};
	font-weight: bold;
	line-height: ${Constants.lineHeights.body};
`;

// =========================== //
// ↓↓↓ Title & Date & Text ↓↓↓ //
// =========================== //

export const ReviewCardTitleDateText = styled("div")`
	${Snippets.grid(1, "auto", 6)};
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

// ===================== //
// ↓↓↓ Author Rating ↓↓↓ //
// ===================== //

export const ReviewCardAuthorRating = styled("div")`
	${Snippets.flex("row", "auto", "center")};
	margin-top: 20px;
`;

export const ReviewCardAuthorRatingText = styled("span")`
	display: block;
	font-size: ${Constants.fontSizes.components.reviewCard.authorRating.text};
`;

export const ReviewCardAuthorRatingValue = styled("span")`
	display: block;
	color: ${Colors.PRIMARY_100};
	font-size: ${Constants.fontSizes.components.reviewCard.authorRating.value};
	font-weight: bold;
`;
