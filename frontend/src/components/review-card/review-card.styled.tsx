import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

// =================== //
// ↓↓↓ Review Card ↓↓↓ //
// =================== //

export const ReviewCard = styled(animated.div)`
	padding: 20px;
	border-radius: ${Constants.borderRadius.components.reviewCard};
`;

export const ReviewCardHeader = styled("div")`
	${Snippets.flex("row", "auto", "center")};
	margin-bottom: 10px;
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

export const ReviewCardSeriesName = styled("p")`
	${Snippets.clearSpacing()};
	margin-bottom: 10px;
	color: ${Colors.PRIMARY_100};
	font-weight: bold;
`;

export const ReviewCardTitleDateContent = styled("div")`
	${Snippets.grid(1, "auto", 6)};
	margin-bottom: 20px;
`;

export const ReviewCardTitle = styled("p")`
	${Snippets.clearSpacing()};
	font-weight: bold;
`;

export const ReviewCardDate = styled(animated.p)`
	${Snippets.clearSpacing()};
`;

export const ReviewCardContent = styled("p")`
	${Snippets.clearSpacing()};
`;

export const ReviewCardRatingLikesContainer = styled("div")`
	${Snippets.flex("row", "space-between", "center")};
`;

export const ReviewCardRating = styled("div")``;

export const ReviewCardLikes = styled("div")``;
