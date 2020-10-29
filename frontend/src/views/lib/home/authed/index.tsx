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
 * Setting Loading Animation
 * Review Card Logic
 */

export const Authed = () => {
	const { pagination } = Context.Pagination.usePaginationContext();
	const { loading } = Context.Loading.useLoadingContext();

	const dispatch = ReactRedux.useDispatch();
	const validateStatus = AxiosHelpers.validateStatus;

	// --- Checking if user is signed in or not --- //
	const currentUser = Functions.getSession();
	const userLoggedIn = !!localStorage.access;

	// --- Fetching Redux State --- //
	const usersRedux = Functions.getUsers();
	const userErrorsRedux = Functions.getUsersErrors();
	const postsRedux = Functions.getPosts();
	const ratingsRedux = Functions.getRatings();
	const tagsRedux = Functions.getTags();
	const postsErrorsRedux = Functions.getPostsErrors();
	const ratingErrorsRedux = Functions.getRatingsErrors();
	const tagsErrorsRedux = Functions.getTagsErrors();

	React.useEffect(() => {
		loading.setters.setLoading({ loading: false });
	}, []);

	React.useEffect(() => {
		if (userLoggedIn) {
			Actions.Users.thunkGetUsers(dispatch, userErrorsRedux);
			Actions.Posts.thunkGetPosts(dispatch, postsErrorsRedux);
			Actions.Tags.thunkGetTags(dispatch, tagsErrorsRedux);
			Actions.Ratings.thunkGetRatings(dispatch, ratingErrorsRedux);
		}
	}, [userLoggedIn]);

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

	// --- Setting Loading Animation --- //
	React.useEffect(() => {
		if (
			Object.keys(usersRedux).length > 0 &&
			Object.keys(postsRedux).length > 0 &&
			Object.keys(ratingsRedux).length > 0 &&
			Object.keys(tagsRedux).length > 0
		) {
			setTimeout(() => {
				loading.setters.setLoading({ loading: false });
			}, 1800);
		} else {
			loading.setters.setLoading({ loading: true });
		}
	}, [
		Object.keys(usersRedux).length,
		Object.keys(postsRedux).length,
		Object.keys(ratingsRedux).length,
		Object.keys(tagsRedux).length,
	]);

	// --- Review Card Logic --- //
	let posts: React.ReactNode[] | "" = "";

	if (pagination.state.postResults && pagination.state.postResults.length) {
		if (pagination.state.postResults.length > 0) {
			posts = pagination.state.postResults.map((post: Actions.Posts.Post) => {
				return (
					<Styled.AuthedPost key={post.id}>
						<Components.Post
							post={post}
							currentUser={currentUser}
							username={usersRedux[post.author] ? usersRedux[post.author].username : ""}
							ratingsRedux={ratingsRedux}
						/>
					</Styled.AuthedPost>
				);
			});
		}
	}

	return (
		<Styled.Authed>
			<Components.Loading />

			<Styled.AuthedMobileOptionComponents>
				<Components.Create />
				<Components.Settings />
			</Styled.AuthedMobileOptionComponents>

			<Styled.AuthedPosts>{posts}</Styled.AuthedPosts>
			<Components.Pagination />
		</Styled.Authed>
	);
};
