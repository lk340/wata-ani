import * as React from "react";
import * as ReactRedux from "react-redux";
import axios from "axios";

import * as Context from "@/context";
import * as Components from "@/components";
import * as Actions from "@/redux/actions";
import * as AxiosHelpers from "@/utils/api/axios-helpers";
import * as Functions from "@/utils/functions";

import * as Styled from "./authed.styled";

/**
 * Checking if user is signed in or not
 * Fetching Redux State
 * Review Card Logic
 */

export const Authed = () => {
	const { pagination } = Context.Pagination.usePaginationContext();

	const dispatch = ReactRedux.useDispatch();
	const validateStatus = AxiosHelpers.validateStatus;

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
			await axios.get("/api/posts/descending/", { validateStatus }).then((response) => {
				const resultPaginationCount = 12;
				const resultTotalCount = response.data.count;
				const maxPageCount = Math.ceil(resultTotalCount / resultPaginationCount);

				pagination.setters.setPagination({
					postResults: response.data.results,
					maxPage: maxPageCount,
					previous: response.data.previous,
					next: response.data.next,
				});
			});
		}
		getPostsDescending();
	}, [postsRedux]);

	// --- Review Card Logic --- //
	let reviewCards: React.ReactNode[] | "" = "";

	if (pagination.state.postResults.length > 0) {
		reviewCards = pagination.state.postResults.map((post: Actions.Posts.Post) => {
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
