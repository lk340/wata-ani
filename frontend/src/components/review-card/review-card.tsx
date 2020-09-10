import * as React from "react";

import * as Styled from "./review-card.styled";
import * as Springs from "./review-card.springs";

export const ReviewCard = () => {
	const animateReviewCard = Springs.reviewCard();

	return <Styled.ReviewCard style={animateReviewCard}>Review Card</Styled.ReviewCard>;
};
