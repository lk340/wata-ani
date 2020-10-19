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
	userHasRated: boolean;
	userHasRatedRatingId: number;
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
				averageUserRating={props.averageUserRating}
				userRatingCount={props.post.user_ratings.length}
				currentUserRating={props.currentUserRating}
				userHasRated={props.userHasRated}
				userHasRatedRatingId={props.userHasRatedRatingId}
			/>
			{/* <Likes likes={likes} /> */}
		</Styled.RatingAndLikes>
	);
};
