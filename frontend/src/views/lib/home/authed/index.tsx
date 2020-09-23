import * as React from "react";
import * as ReactRedux from "react-redux";

import * as Components from "@/components";
import * as Actions from "@/redux/actions";
import * as Functions from "@/utils/functions";

import * as Styled from "./authed.styled";

export const Authed = () => {
	const dispatch = ReactRedux.useDispatch();

	// --- Checking if user is signed in or not --- //
	const currentUserId = Functions.getSession().id;
	const userIsSignedIn = !!currentUserId;

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
	}, [currentUserId]);

	// --- Review Card Logic --- //

	// Reversing here to make sure that the posts are being displayed in descending order.
	const postValues: Actions.Posts.Post[] = Object.values(postsRedux).reverse();

	const reviewCards = postValues.map((post: Actions.Posts.Post) => {
		const {
			id,
			title,
			series_title,
			review,
			personal_rating,
			date_created,
			author,
			tags,
			ratings,
		} = post;

		const _parsedDate = new Date(date_created.slice(0, 10)).toString().slice(4, 15);
		const dateCreated = _parsedDate.slice(0, 6) + ", " + _parsedDate.slice(6);

		const userRatingCount = ratings.length;

		let _userRatingsSum = 0;
		if (Object.values(ratingsRedux).length > 0) {
			ratings.forEach((rating: number) => {
				_userRatingsSum += ratingsRedux[rating].rating;
			});
		}

		const userRating = Number((_userRatingsSum / userRatingCount).toFixed(1));

		return (
			<React.Fragment key={id}>
				<Components.ReviewCard
					username={usersRedux[author] ? usersRedux[author].username : ""}
					userRating={userRating > 0 ? userRating : "N/A"}
					userRatingCount={userRatingCount}
					likes={123}
					seriesTitle={series_title}
					title={title}
					dateCreated={dateCreated}
					review={review}
					personalRating={personal_rating}
					tags={tags ? tags : []}
					ratings={ratings ? ratings : []}
					belongsToCurrentUser={Number(author) === currentUserId}
				/>
			</React.Fragment>
		);
	});

	return (
		<Styled.Authed>
			<Styled.AuthedSections>{reviewCards}</Styled.AuthedSections>
			<Components.Pagination />
		</Styled.Authed>
	);
};
