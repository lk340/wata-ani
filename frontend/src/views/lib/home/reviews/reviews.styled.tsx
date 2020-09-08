import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

import reviewImageLight from "@/images/home/review-card-light.svg";
import reviewImageDark from "@/images/home/review-card-dark.svg";

// =============== //
// ↓↓↓ Reviews ↓↓↓ //
// =============== //

export const Reviews = styled("div")`
	${Snippets.grid(2, "auto", 60, "center", "center")};
	margin: 140px 0px;

	@media (max-width: ${Constants.breakpoints.tablet}px) {
		padding: 0px ${Constants.sidePaddings.tablet}px;
	}

	@media (max-width: ${Constants.breakpoints.mobile}px) {
		padding: 0px ${Constants.sidePaddings.mobile}px;
	}
`;

// ============== //
// ↓↓↓ Images ↓↓↓ //
// ============== //

export const ReviewsImageContainer = styled("div")`
	position: relative;
`;

type Image = { mode: "light" | "dark" };

export const ReviewsImageLight = styled("img").attrs(() => ({
	src: reviewImageLight,
	alt: "home page review image light",
}))<Image>`
	display: ${(props) => (props.mode === "light" ? "block" : "none")};
`;

export const ReviewsImageDark = styled("img").attrs(() => ({
	src: reviewImageDark,
	alt: "home page review image dark",
}))<Image>`
	display: ${(props) => (props.mode === "light" ? "none" : "block")};
`;

// ============ //
// ↓↓↓ Copy ↓↓↓ //
// ============ //

export const ReviewsCopy = styled("div")`
	${Snippets.grid(1, "auto", 40)};
	max-width: 520px;
`;

export const ReviewsCopyTitle = styled("h2")`
	${Snippets.clearSpacing()};
`;

export const ReviewsCopyBodyContainer = styled("div")`
  ${Snippets.grid(1, "auto", 20)};
`;

export const ReviewsCopyBody = styled(animated.p)`
	${Snippets.clearSpacing()};
	line-height: ${Constants.lineHeights.pages.home.review}%;
`;
