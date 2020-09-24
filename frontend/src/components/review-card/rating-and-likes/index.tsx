import * as React from "react";

import * as Styled from "./rating-and-likes.styled";
import * as Springs from "./rating-and-likes.springs";

import { Rating } from "./rating";
import { Likes } from "./likes";

type Props = {
	postId: number;
	userRating: number | "N/A";
	userRatingCount: number;
	currentUserRating: number;
	likes: number;
	belongsToCurrentUser: boolean;
	userHasRated: boolean;
	ratingId: number;
};

export const RatingAndLikes = (props: Props) => {
	const {
		postId,
		userRating,
		userRatingCount,
		currentUserRating,
		likes,
		belongsToCurrentUser,
		userHasRated,
		ratingId,
	} = props;

	const animateRatingAndLikes = Springs.ratingAndLikes();

	return (
		<Styled.RatingAndLikes
			belongs_to_current_user={belongsToCurrentUser.toString()}
			style={animateRatingAndLikes}
		>
			<Rating
				postId={postId}
				userRating={userRating}
				userRatingCount={userRatingCount}
				currentUserRating={currentUserRating}
				userHasRated={userHasRated}
				ratingId={ratingId}
			/>
			{/* <Likes likes={likes} /> */}
		</Styled.RatingAndLikes>
	);
};
