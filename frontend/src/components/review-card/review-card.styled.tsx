import styled from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

/**
 * Review Card
 * Header
 * Modal Button
 * Series Title
 * Title & Date & Text
 * Author Rating
 * Tags
 */

// =================== //
// ↓↓↓ Review Card ↓↓↓ //
// =================== //

export const ReviewCard = styled(animated.div)`
	position: relative;
	padding: 20px 0px;
	max-width: ${Constants.size.components.reviewCard.maxWidth}px;
	width: 100%;
	/* height: ${Constants.size.components.reviewCard.height}px; */
	border-radius: ${Constants.borderRadius.components.reviewCard.card};
	overflow-x: hidden;

	/* @media (max-width: ${Constants.breakpoints.mobile}px) {
		height: 475px;
	} */
`;

// ============== //
// ↓↓↓ Header ↓↓↓ //
// ============== //

export const ReviewCardHeader = styled("div")`
	${Snippets.flex("row", "space-between", "center")};
	margin-bottom: 20px;
	padding: 0px 20px;
`;

export const ReviewCardProfilePicture_Username = styled("div")`
	${Snippets.flex("row", "auto", "center")};
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

// ==================== //
// ↓↓↓ Modal Button ↓↓↓ //
// ==================== //

type ModalButtonProps = { belongs_to_current_user: string };

export const ReviewCardModalButtonDotContainer = styled("div")<ModalButtonProps>`
	${Snippets.flexColumnCenter()};
	${Snippets.square("16px")};
	display: ${(props) => {
		const { belongs_to_current_user } = props;
		if (belongs_to_current_user === "true") return "flex";
		else return "none";
	}};
	cursor: pointer;
`;

export const ReviewCardModalButtonDot = styled("div")`
	${Snippets.square("4px")};
	${Snippets.makeCircle()};
	background-color: ${Colors.LIGHT.five};
`;

// ==================== //
// ↓↓↓ Series Title ↓↓↓ //
// ==================== //

type SeriesTitleProps = { belongs_to_current_user: string };

export const ReviewCardSeriesTitle = styled("p")<SeriesTitleProps>`
	${Snippets.clearSpacing()};
	padding: ${(props) => {
		const { belongs_to_current_user } = props;
		if (belongs_to_current_user === "true") return "10px 20px";
		else return "20px 20px 10px";
	}};
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

// ===================== //
// ↓↓↓ Author Rating ↓↓↓ //
// ===================== //

type AuthorRating = { tagLength: number };

export const ReviewCardAuthorRating = styled("div")<AuthorRating>`
	display: flex;
	margin: ${(props) => (props.tagLength > 0 ? "10px 0px 26px" : "10px 0px 0px")};
	padding: 0px 20px;
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

// ============ //
// ↓↓↓ Tags ↓↓↓ //
// ============ //

type Tag = { length: number };

export const ReviewCardTagContainer = styled("div")<Tag>`
	${Snippets.flex("row", "auto", "center")};
	display: ${(props) => (props.length > 0 ? "flex" : "none")};
	overflow-y: auto;
	padding-left: 20px;

	@media (max-width: ${Constants.breakpoints.mobile}px) {
		${Snippets.hideScrollbar()};
	}
`;

export const ReviewCardTagKeyWrapper = styled("div")`
	flex-shrink: 0;
`;

export const ReviewCardTag = styled(animated.div)`
	margin-right: 10px;
	padding: 10px 14px;
	border-radius: ${Constants.borderRadius.components.reviewCard.tag};
	font-size: ${Constants.fontSizes.components.reviewCard.tag};
`;
