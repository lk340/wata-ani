import * as React from "react";
import * as ReactRedux from "react-redux";
import * as Gatsby from "gatsby";
import axios from "axios";

import * as Context from "@/context";
import * as Components from "@/components";
import * as Actions from "@/redux/actions";
import * as AxiosHelpers from "@/utils/api/axios-helpers";
import * as Functions from "@/utils/functions";
import * as Constants from "@/utils/style/constants";

import * as Styled from "./profile.styled";
import * as Springs from "./profile.springs";

import * as Icons from "@/icons/profile";

/**
 * Animations
 * Fetching Redux State
 * Setting Local Component State Values
 * Determining Fill Color For Information Icons Fill
 * Fetching User Posts
 * Setting Loading Animation
 * Review Card Logic
 */

export const Profile = () => {
	const { theme } = Context.Theme.useThemeContext();
	const { pagination } = Context.Pagination.usePaginationContext();
	const { loading } = Context.Loading.useLoadingContext();

	const [userId, setUserId] = React.useState<number | null>(null);
	const [username, setUsername] = React.useState("");
	const [reviewCount, setReviewCount] = React.useState<number | "">("");
	const [biography, setBiography] = React.useState("");
	const [iconFill, setIconFill] = React.useState("");
	const [postsError, setPostsError] = React.useState("");

	React.useEffect(() => {
		if (localStorage.pathChange === true) {
			loading.setters.setLoading({ loading: false });
		}
	}, [localStorage.pathChange]);

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
	const postsErrorsRedux = Functions.getPostsErrors();

	// Redirecting user back to home page when not logged in.
	React.useEffect(() => {
		if (!localStorage.access) Gatsby.navigate("/");
	}, [localStorage.access]);

	React.useEffect(() => {
		if (userId) {
			Actions.Posts.thunkGetUserPosts(userId, dispatch, postsErrorsRedux);
		}
	}, [userId]);

	// --- Setting Local Component State Values --- //
	React.useEffect(() => {
		// TODO: When using loading animation, end it here.
		if (currentUser.id) {
			setUserId(currentUser.id);
			setUsername(currentUser.username);
			setReviewCount(currentUser.posts.length);
			setBiography(currentUser.biography);
		}
	}, [currentUser]);

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
				const endpoint = `/api/users/${userId}/posts/`;
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
		if (userId) fetchUserPosts();
	}, [userId, userPostsRedux]);

	// --- Setting Loading Animation --- //
	React.useEffect(() => {
		if (userPostsRedux.length > 0) {
			loading.setters.setLoading({ loading: false });
		} else {
			loading.setters.setLoading({ loading: true });
		}
	}, [userPostsRedux.length]);

	// --- Review Card Logic --- //
	let reviewCards: React.ReactNode[] | "" = "";

	if (pagination.state.postResults.length > 0) {
		reviewCards = pagination.state.postResults.map((post: Actions.Posts.Post) => {
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

			<Styled.ProfilePosts>{reviewCards}</Styled.ProfilePosts>

			<Components.Pagination />
		</Styled.Profile>
	);
};
