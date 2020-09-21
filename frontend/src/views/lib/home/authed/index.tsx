import * as React from "react";
import * as ReactRedux from "react-redux";

import * as Components from "@/components";

import * as Actions from "@/redux/actions";
import * as Types from "@/utils/types";

import * as Styled from "./authed.styled";

export const Authed = () => {
	const dispatch = ReactRedux.useDispatch();

	// --- Checking if user is signed in or not --- //
	const currentUserId = ReactRedux.useSelector(
		(state: Types.ReduxState) => state.session.id,
	);
	const userIsSignedIn = !!currentUserId;

	// --- Users --- //
	const usersRedux = ReactRedux.useSelector(
		(state: Types.ReduxState) => state.entities.users,
	);

	const userErrorsRedux = ReactRedux.useSelector(
		(state: Types.ReduxState) => state.errors.users,
	);

	// --- Posts --- //
	const postsRedux = ReactRedux.useSelector(
		(state: Types.ReduxState) => state.entities.posts,
	);

	const postErrorsRedux = ReactRedux.useSelector(
		(state: Types.ReduxState) => state.errors.posts,
	);

	// --- Tags --- //
	const tagErrorsRedux = ReactRedux.useSelector(
		(state: Types.ReduxState) => state.errors.tags,
	);

	// --- Ratings --- //
	const ratingsRedux = ReactRedux.useSelector(
		(state: Types.ReduxState) => state.entities.ratings,
	);

	const ratingErrorsRedux = ReactRedux.useSelector(
		(state: Types.ReduxState) => state.errors.ratings,
	);

	React.useEffect(() => {
		if (userIsSignedIn) {
			Actions.Users.thunkGetUsers(dispatch, userErrorsRedux);
			Actions.Posts.thunkGetPosts(dispatch, postErrorsRedux);
			Actions.Tags.thunkGetTags(dispatch, tagErrorsRedux);
			Actions.Ratings.thunkGetRatings(dispatch, ratingErrorsRedux);
		}
	}, [currentUserId]);

	const postValues: Actions.Posts.Post[] = Object.values(postsRedux);

	const reviewCards = postValues.map((post: Actions.Posts.Post) => {
		const {
			id,
			title,
			series_title,
			text,
			personal_rating,
			date_created,
			author,
			tags,
			ratings,
		} = post;

		const _parsedDate = new Date(date_created.slice(0, 10)).toString().slice(4, 15);
		const dateCreated = _parsedDate.slice(0, 6) + ", " + _parsedDate.slice(6);

		console.log("Ratings:", ratingsRedux);

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
					seriesName={series_title}
					title={title}
					date={dateCreated}
					text={text}
					personalRating={personal_rating}
					tags={tags ? tags : []}
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
