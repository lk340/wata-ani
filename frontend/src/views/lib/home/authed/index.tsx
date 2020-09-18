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

	React.useEffect(() => {
		if (userIsSignedIn) {
			Actions.Users.thunkGetUsers(dispatch, userErrorsRedux);
			Actions.Posts.thunkGetPosts(dispatch, postErrorsRedux);
			Actions.Tags.thunkGetTags(dispatch, tagErrorsRedux);
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
			user_rating,
			date_created,
			author,
			tags,
		} = post;

		const dateParsed = new Date(date_created.slice(0, 10)).toString().slice(4, 15);
		const dateCreated = dateParsed.slice(0, 6) + ", " + dateParsed.slice(6);

		return (
			<React.Fragment key={id}>
				<Components.ReviewCard
					username={usersRedux[author] ? usersRedux[author].username : ""}
					userRating={user_rating ? user_rating : "N/A"}
					userRatingCount={432}
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
