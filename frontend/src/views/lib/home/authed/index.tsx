import * as React from "react";
import * as ReactRedux from "react-redux";

import * as Components from "@/components";
import * as Actions from "@/redux/actions";
import * as Functions from "@/utils/functions";

import * as Styled from "./authed.styled";

/**
 * Checking if user is signed in or not
 * Fetching Redux State
 * Review Card Logic
 */

export const Authed = () => {
	const dispatch = ReactRedux.useDispatch();

	// --- Checking if user is signed in or not --- //
	const currentUser = Functions.getSession();
	const userIsSignedIn = !!currentUser.id;

	// --- Fetching Redux State --- //
	const usersRedux = Functions.getUsers();
	const userErrorsRedux = Functions.getUsersErrors();
	const postsRedux = Functions.getPosts();
	const postsErrorsRedux = Functions.getPostsErrors();
	const tagsErrorsRedux = Functions.getTagsErrors();
	const ratingsRedux = Functions.getRatings();
	const ratingErrorsRedux = Functions.getRatingsErrors();

	React.useEffect(() => {
		if (userIsSignedIn) {
			Actions.Users.thunkGetUsers(dispatch, userErrorsRedux);
			Actions.Posts.thunkGetPosts(dispatch, postsErrorsRedux);
			Actions.Tags.thunkGetTags(dispatch, tagsErrorsRedux);
			Actions.Ratings.thunkGetRatings(dispatch, ratingErrorsRedux);
		}
	}, [userIsSignedIn]);

	// ↓↓↓ Review Card Logic ↓↓↓ //

	// Reversing here to make sure that the posts are being displayed in descending order.
	const postValues: Actions.Posts.Post[] = Object.values(postsRedux).reverse();

	const reviewCards = postValues.map((post: Actions.Posts.Post) => {
		return (
			<Styled.AuthedReviewCard key={post.id}>
				<Components.ReviewCard
					post={post}
					currentUser={currentUser}
					username={usersRedux[post.author] ? usersRedux[post.author].username : ""}
					ratingsRedux={ratingsRedux}
				/>
			</Styled.AuthedReviewCard>
		);
	});

	return (
		<Styled.Authed>
			<Styled.AuthedReviewCards>{reviewCards}</Styled.AuthedReviewCards>
			<Components.Pagination />
		</Styled.Authed>
	);
};
