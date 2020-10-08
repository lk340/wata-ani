import * as React from "react";
import * as ReactRedux from "react-redux";
import axios from "axios";

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
	const [posts, setPosts] = React.useState([]);
	const [nextPageLink, setNextPageLink] = React.useState("");
	const [previousPageLink, setPreviousPageLink] = React.useState("");

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

	React.useEffect(() => {
		async function getPostsDescending(): Promise<void> {
			await axios.get("/api/posts/descending/").then((response) => {
				setPosts(response.data.results);
				setPreviousPageLink(response.data.previous);
				setNextPageLink(response.data.next);
			});
		}
		getPostsDescending();
	}, [postsRedux]);

	// --- Review Card Logic --- //

	let reviewCards: React.ReactNode[] | "" = "";

	if (posts.length > 0) {
		reviewCards = posts.map((post: Actions.Posts.Post) => {
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
	}

	return (
		<Styled.Authed>
			<Styled.AuthedReviewCards>{reviewCards}</Styled.AuthedReviewCards>
			<Components.Pagination />
		</Styled.Authed>
	);
};
