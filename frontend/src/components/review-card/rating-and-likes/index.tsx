import * as React from "react";

import * as Styled from "./rating-and-likes.styled";
import * as Springs from "./rating-and-likes.springs";

import { Rating } from "./rating";
import { Likes } from "./likes";

type Props = {
	rating: number | "N/A";
	ratingUserCount: number;
	likes: number;
};

export const RatingAndLikes = (props: Props) => {
	const { rating, ratingUserCount, likes } = props;

	const animateRatingAndLikes = Springs.ratingAndLikes();

	return (
		<Styled.RatingAndLikes style={animateRatingAndLikes}>
			<Rating rating={rating} ratingUserCount={ratingUserCount} />
			<Likes likes={likes} />
		</Styled.RatingAndLikes>
	);
};
