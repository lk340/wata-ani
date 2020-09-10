import * as React from "react";

import * as Styled from "./review-card.styled";
import * as Springs from "./review-card.springs";

export const ReviewCard = () => {
	const animateReviewCard = Springs.reviewCard();
	const animateCardDate = Springs.cardDate();

	return (
		<Styled.ReviewCard style={animateReviewCard}>
			<Styled.ReviewCardHeader>
				<Styled.ReviewCardUsername>WataAni</Styled.ReviewCardUsername>
			</Styled.ReviewCardHeader>
			<Styled.ReviewCardSeriesName>Neon Genesis Evangelion</Styled.ReviewCardSeriesName>
			<Styled.ReviewCardTitleDateContent>
				<Styled.ReviewCardTitle>
					"Timeless classic" is an understatement.
				</Styled.ReviewCardTitle>
				<Styled.ReviewCardDate style={animateCardDate}>
					August 3, 2020
				</Styled.ReviewCardDate>
				<Styled.ReviewCardContent>
					People refer to this piece as a timeless classic, but that description alone
					fails to accurately portray why it has withstood the test of time. Not only are
					its animation and character designs fluid and bold, but also, it experiments
					with the human psyche - how we react to our surroundings as people, not as a
					hyperbolic fictional character. It is this realism that allows us to see
					ourselves in the characters' shoes. Evangelion has set the standard for its
					descendants.
				</Styled.ReviewCardContent>
			</Styled.ReviewCardTitleDateContent>
		</Styled.ReviewCard>
	);
};
