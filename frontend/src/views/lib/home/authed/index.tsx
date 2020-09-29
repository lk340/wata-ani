import * as React from "react";
import * as ReactRedux from "react-redux";

import * as Components from "@/components";
import * as Actions from "@/redux/actions";
import * as Functions from "@/utils/functions";

import * as Styled from "./authed.styled";

export const Authed = () => {
	const dispatch = ReactRedux.useDispatch();

	// --- Checking if user is signed in or not --- //
	const currentUser = Functions.getSession();
	const userIsSignedIn = !!currentUser.id;

	// --- Fetching Redux State --- //
	const usersRedux = Functions.getUsers();
	const userErrorsRedux = Functions.getUsersErrors();
	const postsRedux = Functions.getPosts();
	const postErrorsRedux = Functions.getPostsErrors();
	const tagErrorsRedux = Functions.getTagsErrors();
	const ratingsRedux = Functions.getRatings();
	const ratingErrorsRedux = Functions.getRatingsErrors();

	React.useEffect(() => {
		if (userIsSignedIn) {
			Actions.Users.thunkGetUsers(dispatch, userErrorsRedux);
			Actions.Posts.thunkGetPosts(dispatch, postErrorsRedux);
			Actions.Tags.thunkGetTags(dispatch, tagErrorsRedux);
			Actions.Ratings.thunkGetRatings(dispatch, ratingErrorsRedux);
		}
	}, [userIsSignedIn]);

	// ↓↓↓ Review Card Logic ↓↓↓ //

	// Reversing here to make sure that the posts are being displayed in descending order.
	const postValues: Actions.Posts.Post[] = Object.values(postsRedux).reverse();

	const reviewCards = postValues.map((post: Actions.Posts.Post) => {
		const _parsedDate = new Date(post.date_created.slice(0, 10)).toString().slice(4, 15);
		const dateCreated = _parsedDate.slice(0, 6) + ", " + _parsedDate.slice(6);

		const userRatingCount = post.ratings.length;

		let _userRatingsSum = 0;
		if (Object.values(ratingsRedux).length > 0) {
			post.ratings.forEach((rating: number) => {
				_userRatingsSum += ratingsRedux[rating].rating;
			});
		}

		const userRating = Number((_userRatingsSum / userRatingCount).toFixed(1));

		let userHasRated = false;
		let userRatingRatedId = 0;
		post.ratings.forEach((ratingId: number) => {
			if (currentUser.ratings.includes(ratingId)) {
				userHasRated = true;
				userRatingRatedId = ratingId;
			} else {
				userHasRated = false;
			}
		});

		return (
			<React.Fragment key={post.id}>
				<Components.ReviewCard
					postId={post.id}
					username={usersRedux[post.author] ? usersRedux[post.author].username : ""}
					userRating={userRating > 0 ? userRating : "N/A"}
					userRatingCount={userRatingCount}
					likes={123}
					seriesTitle={post.series_title}
					title={post.title}
					dateCreated={dateCreated}
					review={post.review}
					personalRating={post.personal_rating}
					tags={post.tags ? post.tags : []}
					ratings={post.ratings ? post.ratings : []}
					belongsToCurrentUser={Number(post.author) === currentUser.id}
					userHasRated={userHasRated}
					ratingId={userRatingRatedId}
				/>
			</React.Fragment>
		);
	});

	return (
		<Styled.Authed>
			<Styled.AuthedReviewCards>{reviewCards}</Styled.AuthedReviewCards>
			<Components.Pagination />
		</Styled.Authed>
	);
};
