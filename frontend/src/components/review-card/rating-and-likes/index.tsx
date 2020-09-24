import * as React from "react";

import * as Styled from "./rating-and-likes.styled";
import * as Springs from "./rating-and-likes.springs";
import * as ReviewCardTypes from "../_types";

import { Rating } from "./rating";
import { Likes } from "./likes";

type Props = ReviewCardTypes.RatingAndLikesProps &
	ReviewCardTypes.RatingProps &
	ReviewCardTypes.LikesProps;

export const RatingAndLikes = (props: Props) => {
	const animateRatingAndLikes = Springs.ratingAndLikes();

	return (
		<Styled.RatingAndLikes
			belongs_to_current_user={props.belongsToCurrentUser.toString()}
			style={animateRatingAndLikes}
		>
			<Rating
				postId={props.postId}
				userRating={props.userRating}
				userRatingCount={props.userRatingCount}
				currentUserRating={props.currentUserRating}
				userHasRated={props.userHasRated}
				ratingId={props.ratingId}
			/>
			{/* <Likes likes={likes} /> */}
		</Styled.RatingAndLikes>
	);
};
