import styled from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

// ======================= //
// ↓↓↓ Rating & Likes ↓↓↓ //
// ======================= //

type RatingAndLikesProps = { belongs_to_current_user: string };

export const RatingAndLikes = styled(animated.div)<RatingAndLikesProps>`
	${Snippets.flex("row", "space-between", "center")};
	display: ${(props) => {
		const { belongs_to_current_user } = props;
		if (belongs_to_current_user === "true") return "none";
		else return "flex";
	}};
	margin: 0px 20px;
	padding: 0px 20px;
	border-radius: ${Constants.borderRadius.components.post.ratingAndLikes};
`;
