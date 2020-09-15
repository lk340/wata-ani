import styled from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

// ======================= //
// ↓↓↓ Rating & Likes ↓↓↓ //
// ======================= //

export const RatingAndLikes = styled(animated.div)`
	${Snippets.flex("row", "space-between", "center")};
	padding: 0px 20px;
	border-radius: ${Constants.borderRadius.components.reviewCard.ratingAndLikes};
`;
