import styled from "styled-components";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

/**
 * Rating
 * Mobile Modal Form Toggle Button
 */

// ============== //
// ↓↓↓ Rating ↓↓↓ //
// ============== //

export const Rating = styled("div")`
	position: relative;
	display: flex;
`;

// ======================================= //
// ↓↓↓ Mobile Modal Form Toggle Button ↓↓↓ //
// ======================================= //

export const RatingToggleMobileFormButtonContainer = styled("div")`
	${Snippets.flexRowCenter()};
`;

export const RatingToggleMobileFormButton = styled("div")`
	display: none;
	padding: 6px 10px;
	color: ${Colors.NEUTRALS.white_100};
	background-color: ${Colors.PRIMARY_100};
	border: none;
	border-radius: ${Constants.borderRadius.components.reviewCard.ratingSubmit};
	font-size: ${Constants.fontSizes.components.reviewCard.ratingSubmit};
	font-weight: bold;
	cursor: pointer;

	@media (max-width: ${Constants.breakpoints.mobile}px) {
		display: block;
	}
`;
