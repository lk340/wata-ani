import * as React from "react";

import * as Styled from "./rating-and-likes.styled";
import * as Springs from "./rating-and-likes.springs";

import { Rating } from "./rating";
import { Likes } from "./likes";

export const RatingAndLikes = () => {
	const animateRatingAndLikes = Springs.ratingAndLikes();

	return (
		<Styled.RatingAndLikes style={animateRatingAndLikes}>
			<Rating />
			<Likes />
		</Styled.RatingAndLikes>
	);
};
