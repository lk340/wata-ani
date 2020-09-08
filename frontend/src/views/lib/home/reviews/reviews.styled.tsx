import styled from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

import reviewImageLight from "@/images/home/review-card-light.svg";
import reviewImageDark from "@/images/home/review-card-dark.svg";

/**
 * Reviews
 * Images
 * Copy
 */

// =============== //
// ↓↓↓ Reviews ↓↓↓ //
// =============== //

export const Reviews = styled("div")`
	${Snippets.flex("row", "center", "center")};
	margin: 340px 0px 140px;

	@media (max-width: 1260px) {
		padding: 0px ${Constants.sidePaddings.tablet}px;
	}

	@media (max-width: 1115px) {
		${Snippets.flex("column-reverse", "center", "center")};
		margin: 240px 0px 140px;
	}

	@media (max-width: 685px) {
		margin: 140px 0px;
	}

	@media (max-width: ${Constants.breakpoints.mobile}px) {
		margin: 100px 0px;
		padding: 0px ${Constants.sidePaddings.mobile}px;
	}
`;

// ============== //
// ↓↓↓ Images ↓↓↓ //
// ============== //

export const ReviewsImageContainer = styled("div")`
	position: relative;
	margin-right: 60px;
	max-width: 800px;

	@media (max-width: 1115px) {
		margin: 40px 0px 0px;
	}
`;

type Image = { mode: "light" | "dark" };

export const ReviewsImageLight = styled("img").attrs(() => ({
	src: reviewImageLight,
	alt: "home page review image light",
}))<Image>`
	display: ${(props) => (props.mode === "light" ? "block" : "none")};
	width: 100%;
`;

export const ReviewsImageDark = styled("img").attrs(() => ({
	src: reviewImageDark,
	alt: "home page review image dark",
}))<Image>`
	display: ${(props) => (props.mode === "light" ? "none" : "block")};
	width: 100%;
`;

// ============ //
// ↓↓↓ Copy ↓↓↓ //
// ============ //

export const ReviewsCopy = styled("div")`
	${Snippets.flex("column")};
	max-width: 520px;

	@media (max-width: 1115px) {
		${Snippets.flexColumnCenter()};
		max-width: 800px;
	}
`;

export const ReviewsCopyTitle = styled("h2")`
	${Snippets.clearSpacing()};
	margin-bottom: 40px;
	font-size: ${Constants.fontSizes.pages.home.reviews.title};

	@media (max-width: ${Constants.breakpoints.mobile}px) {
		align-self: flex-start;
	}
`;

export const ReviewsCopyBodyContainer = styled("div")`
	${Snippets.grid(1, "auto", 20)};
`;

export const ReviewsCopyBody = styled(animated.p)`
	${Snippets.clearSpacing()};
	font-size: ${Constants.fontSizes.pages.home.reviews.body};
	line-height: ${Constants.lineHeights.pages.home.review}%;
`;
