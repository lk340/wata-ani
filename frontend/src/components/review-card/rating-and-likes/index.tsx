import * as React from "react";

import * as Styled from "./rating-and-likes.styled";
import * as Springs from "./rating-and-likes.springs";

import { Rating } from "./rating";
import { Likes } from "./likes";

type Props = {
	userRating: number | "N/A";
	userRatingCount: number;
	currentUserRating: number;
	likes: number;
	belongsToCurrentUser: boolean;
};

export const RatingAndLikes = (props: Props) => {
	const {
		userRating,
		userRatingCount,
		currentUserRating,
		likes,
		belongsToCurrentUser,
	} = props;

	const animateRatingAndLikes = Springs.ratingAndLikes();

	return (
		<Styled.RatingAndLikes
			belongs_to_current_user={belongsToCurrentUser.toString()}
			style={animateRatingAndLikes}
		>
			<Rating
				userRating={userRating}
				userRatingCount={userRatingCount}
				currentUserRating={currentUserRating}
			/>
			<Likes likes={likes} />
		</Styled.RatingAndLikes>
	);
};
