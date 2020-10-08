import * as React from "react";

import * as Actions from "@/redux/actions";

import * as Styled from "./rating-and-likes.styled";
import * as Springs from "./rating-and-likes.springs";

import { Rating } from "./rating";
import { Likes } from "./likes";

type Props = {
	post: Actions.Posts.Post;
	averageUserRating: number | "N/A";
	currentUserRating: number;
	belongsToCurrentUser: boolean;

	// postId: number;
	// userRating: number | "N/A";
	// userRatingCount: number;
	// currentUserRating: number;
	// userHasRated: boolean;
	// ratingId: number;
	// likes: number;
	// belongsToCurrentUser: boolean;
};

export const RatingAndLikes = (props: Props) => {
	const animateRatingAndLikes = Springs.ratingAndLikes();

	return (
		<Styled.RatingAndLikes
			belongs_to_current_user={props.belongsToCurrentUser.toString()}
			style={animateRatingAndLikes}
		>
			<Rating
				postId={props.post.id}
				userRating={props.userRating}
				userRatingCount={props.post.user_ratings.length}
				currentUserRating={props.currentUserRating}
				userHasRated={props.userHasRated}
				userRatingId={props.ratingId}
			/>
			{/* <Likes likes={likes} /> */}
		</Styled.RatingAndLikes>
	);
};
