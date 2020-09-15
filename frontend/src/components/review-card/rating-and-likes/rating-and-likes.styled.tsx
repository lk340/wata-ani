import styled from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

import close from "@/icons/close.svg";

/**
 * Rating & Likes
 * Rating
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
