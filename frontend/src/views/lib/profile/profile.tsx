import * as React from "react";
import * as ReactRedux from "react-redux";
import * as Reach from "@reach/router";
import * as Gatsby from "gatsby";
import axios from "axios";
import queryString from "query-string";

import * as Context from "@/context";
import * as Components from "@/components";
import * as Actions from "@/redux/actions";
import * as AxiosHelpers from "@/utils/api/axios-helpers";
import * as Functions from "@/utils/functions";
import * as Constants from "@/utils/style/constants";

import * as Styled from "./profile.styled";
import * as Springs from "./profile.springs";

import * as Icons from "@/icons/profile";
import { Search } from "@/icons/navbar";

/**
 * Animations
 * Fetching Redux State
 * Setting Local Component State Values
 * Determining Fill Color For Information Icons Fill
 * Fetching Username By Parsing Query String
 * Fetching User Posts
 * Setting Loading Animation
 * Post Logic
 */

export const Profile = () => {
	const { theme } = Context.Theme.useThemeContext();
	const { pagination } = Context.Pagination.usePaginationContext();
	const { loading } = Context.Loading.useLoadingContext();

	const [username, setUsername] = React.useState("");
	const [reviewCount, setReviewCount] = React.useState<number | "">("");
	const [biography, setBiography] = React.useState("");
	const [iconFill, setIconFill] = React.useState("");
	const [postsError, setPostsError] = React.useState("");

	// --- Animations --- //
	const animateBackground = Springs.background();
	const animateInformation = Springs.information();
	const animateProfilePicture = Springs.profilePicture();
	const animateData = Springs.data();

	// --- Fetching Redux State --- //
	const dispatch = ReactRedux.useDispatch();
	const currentUser = Functions.getSession();
	const ratingsRedux = Functions.getRatings();
	const userPostsRedux = Functions.getUserPosts();
	const tagsRedux = Functions.getTags();
	const postsErrorsRedux = Functions.getPostsErrors();
	const tagsErrorsRedux = Functions.getTagsErrors();

	const userLoggedIn = !!localStorage.access;

	React.useEffect(() => {
		if (userLoggedIn) {
			Actions.Tags.thunkGetTags(dispatch, tagsErrorsRedux);
		}
	}, [userLoggedIn]);

	// Redirecting user back to home page when not logged in.
	React.useEffect(() => {
		if (!localStorage.access) Gatsby.navigate("/");
	}, [localStorage.access]);

	React.useEffect(() => {
		if (username !== "") {
			Actions.Posts.thunkGetUserPosts(username, dispatch, postsErrorsRedux);
		}
	}, [username]);

	// --- Fetching Username By Parsing Query String --- //
	const location = Reach.useLocation();
	const queryStringParams = location.search ? queryString.parse(location.search) : {};
	const queryStringParamsUsername = queryStringParams.username;

	// --- Setting Local Component State Values --- //
	React.useEffect(() => {
		if (currentUser.id) {
			async function setLocalStateValues(): Promise<void> {
				try {
					const response = await axios.get(`/api/users/${queryStringParamsUsername}/`);

					if (response.status < 400) {
						setUsername(response.data.username);
						setReviewCount(response.data.posts.length);
						setBiography(response.data.biography);
					}
				} catch (error) {
					// Dev Debug Log
					console.log(error);
				}
			}
			setLocalStateValues();
		}
	}, [currentUser, queryStringParamsUsername]);

	// --- Determining Fill Color For Information Icons Fill --- //
	React.useEffect(() => {
		localStorage.mode === "light"
			? setIconFill(Constants.theme.pages.profile.information.data.light)
			: setIconFill(Constants.theme.pages.profile.information.data.dark);
	}, [theme.state.mode, localStorage.mode]);

	// --- Fetching User Posts --- //
	React.useEffect(() => {
		async function fetchUserPosts(): Promise<void> {
			try {
				const endpoint = `/api/users/${queryStringParamsUsername}/posts/`;
				const validateStatus = AxiosHelpers.validateStatus;
				const response = await axios.get(endpoint, { validateStatus });

				// Success
				if (response.status < 400) {
					const resultPaginationCount = 12;
					const resultTotalCount = response.data.count;
					const maxPageCount = Math.ceil(resultTotalCount / resultPaginationCount);

					pagination.setters.setPagination({
						postResults: response.data.results,
						maxPage: maxPageCount,
						previous: response.data.previous,
						next: response.data.next,
					});
				} else {
					setPostsError(response.data);
				}
			} catch (error) {
				// Dev debug log
				console.log(error);
			}
		}
		if (username !== "") fetchUserPosts();
	}, [username, userPostsRedux]);

	// --- Setting Loading Animation --- //
	React.useEffect(() => {
		if (userPostsRedux.length > 0 && Object.keys(tagsRedux).length > 0) {
			loading.setters.setLoading({ loading: false });
		} else {
			loading.setters.setLoading({ loading: true });
		}
	}, [userPostsRedux.length, Object.keys(tagsRedux).length]);

	// --- Post Logic --- //
	let posts: React.ReactNode[] | "" = "";

	if (pagination.state.postResults.length) {
		if (pagination.state.postResults.length > 0) {
			posts = pagination.state.postResults.map((post: Actions.Posts.Post) => {
				return (
					<Styled.ProfilePost key={post.id}>
						<Components.Post
							post={post}
							currentUser={currentUser}
							username={username}
							ratingsRedux={ratingsRedux}
						/>
					</Styled.ProfilePost>
				);
			});
		}
	}

	return (
		<Styled.Profile style={animateBackground}>
			<Components.Loading />

			<Components.Navbar />
			<Components.NavbarMobile />

			{/* <Components.Create /> */}

			<Styled.ProfileMobileOptionComponents>
				<Components.Create />
				<Components.Settings />
			</Styled.ProfileMobileOptionComponents>

			<Styled.ProfileInformationContainer style={animateInformation}>
				<Styled.ProfileInformation>
					<Styled.ProfileInformationMain>
						{/* Profile Picture */}
						{/* <Styled.ProfileInformationMainProfilePicture style={animateProfilePicture} /> */}
						{/* Username & Data */}
						<Styled.ProfileInformationMainUsernameDataContainer>
							{/* Username */}
							<Styled.ProfileInformationMainUsername>
								{username}
							</Styled.ProfileInformationMainUsername>
							{/* Data */}
							<Styled.ProfileInformationData style={animateData}>
								{/* Review Icon */}
								<Icons.Reviews fill={iconFill} />
								{/* Review Text */}
								<Styled.ProfileInformationDataText>
									{reviewCount} {reviewCount === 1 ? "Review" : "Reviews"}
								</Styled.ProfileInformationDataText>
							</Styled.ProfileInformationData>
						</Styled.ProfileInformationMainUsernameDataContainer>
					</Styled.ProfileInformationMain>

					{/* Bio */}
					<Styled.ProfileInformationBio>{biography}</Styled.ProfileInformationBio>
				</Styled.ProfileInformation>
			</Styled.ProfileInformationContainer>

			<Styled.ProfilePosts>{posts}</Styled.ProfilePosts>

			<Components.Pagination />
		</Styled.Profile>
	);
};
