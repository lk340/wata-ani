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
	${Snippets.flex("row", "space-between", "center")};
	position: relative;
	/* display: flex; */
	width: 100%;
`;

// ======================================= //
// ↓↓↓ Mobile Modal Form Toggle Button ↓↓↓ //
// ======================================= //

export const RatingToggleMobileFormButtonContainer = styled("div")`
	${Snippets.flexRowCenter()};
	display: none;

	@media (max-width: ${Constants.breakpoints.mobile}px) {
		display: flex;
	}
`;

export const RatingToggleMobileFormButton = styled("div")`
	padding: 6px 10px;
	color: ${Colors.NEUTRALS.white_100};
	background-color: ${Colors.PRIMARY_100};
	border: none;
	border-radius: ${Constants.borderRadius.components.post.ratingSubmit};
	font-size: ${Constants.fontSizes.components.post.ratingSubmit};
	font-weight: bold;
	cursor: pointer;
`;
