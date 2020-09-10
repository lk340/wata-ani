import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

// =================== //
// ↓↓↓ Review Card ↓↓↓ //
// =================== //

export const ReviewCard = styled(animated.div)`
	border-radius: ${Constants.borderRadius.components.reviewCard};
`;

export const ReviewCardHeader = styled("div")``;

export const ReviewCardProfilePicture = styled("img")``;

export const ReviewCardUsername = styled("div")``;

export const ReviewCardSeriesName = styled("div")``;

export const ReviewCardTitle = styled("div")``;

export const ReviewCardDate = styled("div")``;

export const ReviewCardContent = styled("div")``;

export const ReviewCardRatingLikesContainer = styled("div")``;

export const ReviewCardRating = styled("div")``;

export const ReviewCardLikes = styled("div")``;
