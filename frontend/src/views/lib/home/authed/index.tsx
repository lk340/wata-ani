import * as React from "react";
import * as ReactRedux from "react-redux";

import * as Components from "@/components";

import * as Actions from "@/redux/actions";
import * as Types from "@/utils/types";

import * as Styled from "./authed.styled";

export const Authed = () => {
	const dispatch = ReactRedux.useDispatch();
	const currentUserId = ReactRedux.useSelector(
		(state: Types.ReduxState) => state.session.id,
	);
	const isCurrentUser = !!currentUserId;

	const posts = ReactRedux.useSelector((state: Types.ReduxState) => state.entities.posts);
	const postErrors = ReactRedux.useSelector(
		(state: Types.ReduxState) => state.errors.posts,
	);

	const users = ReactRedux.useSelector((state: Types.ReduxState) => state.entities.users);
	const userErrors = ReactRedux.useSelector(
		(state: Types.ReduxState) => state.errors.users,
	);

	console.log("Users:", users);

	React.useEffect(() => {
		if (isCurrentUser) {
			Actions.Posts.thunkGetPosts(dispatch, postErrors);
			Actions.Users.thunkGetUsers(dispatch, userErrors);
		}
	}, [currentUserId]);

	const reviewCards = Object.values(posts).map((post: any) => {
		const {
			id,
			title,
			series_title,
			text,
			personal_rating,
			user_rating,
			author,
			tags,
		} = post;

		console.log("Author:", author);
		if (users[author]) console.log("Author Username:", users[author].username);

		return (
			<React.Fragment key={id}>
				<Components.ReviewCard
					username={users[author] ? users[author].username : ""}
					seriesName={series_title}
					title={title}
					date={""}
					text={text}
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
