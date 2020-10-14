import * as React from "react";
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
 * Fetching Redux Data
 * Setting State Values
 * Determining fill color for information icons
 * Fetching User Posts
 * Animations
 */

export const Profile = () => {
	const { theme } = Context.Theme.useThemeContext();

	const [userId, setUserId] = React.useState<number | null>(null);
	const [username, setUsername] = React.useState("");
	const [reviewCount, setReviewCount] = React.useState<number | "">("");
	const [biography, setBiography] = React.useState("");
	const [iconFill, setIconFill] = React.useState("");
	const [posts, setPosts] = React.useState<Actions.Posts.Post[]>([]);
	const [postsError, setPostsError] = React.useState("");

	// --- Fetching Redux Data --- //
	const currentUser = Functions.getSession();

	// --- Setting State Values --- //
	React.useEffect(() => {
		// TODO: When using loading animation, end it here.
		if (currentUser.id) {
			setUserId(currentUser.id);
			setUsername(currentUser.username);
			setReviewCount(currentUser.posts.length);
			setBiography(currentUser.biography);
		}
	}, [currentUser]);

	// --- Determining fill color for information icons --- //
	React.useEffect(() => {
		localStorage.mode === "light"
			? setIconFill(Constants.theme.pages.profile.information.data.light)
			: setIconFill(Constants.theme.pages.profile.information.data.dark);
	}, [theme.state.mode, localStorage.mode]);

	// --- Fetching User Posts --- //
	React.useEffect(() => {
		const validateStatus = AxiosHelpers.validateStatus;

		async function fetchUserPosts(): Promise<void> {
			try {
				const endpoint = `/api/users/${userId}/posts/`;
				const response = await axios.get(endpoint, { validateStatus });

				// Success
				if (response.status < 400) {
					console.log("Whoa! Haha:", response.data);

					setPosts(response.data);
				} else {
					setPostsError(response.data);
				}
			} catch (error) {
				// Dev debug log
				console.log(error);
			}
		}
		if (userId) fetchUserPosts();
	}, []);

	// --- Animations --- //
	const animateBackground = Springs.background();
	const animateInformation = Springs.information();
	const animateProfilePicture = Springs.profilePicture();
	const animateData = Springs.data();

	return (
		<Styled.Profile style={animateBackground}>
			<Components.Navbar />

			<Styled.ProfileInformation style={animateInformation}>
				<Styled.ProfileInformationContainer>
					<Styled.ProfileInformationMain>
						{/* Profile Picture */}
						<Styled.ProfileInformationMainProfilePicture style={animateProfilePicture} />
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
									{reviewCount} Reviews
								</Styled.ProfileInformationDataText>
							</Styled.ProfileInformationData>
						</Styled.ProfileInformationMainUsernameDataContainer>
					</Styled.ProfileInformationMain>

					{/* Bio */}
					<Styled.ProfileInformationBio>{biography}</Styled.ProfileInformationBio>
				</Styled.ProfileInformationContainer>
			</Styled.ProfileInformation>

			<Styled.ProfilePosts>Profile Posts</Styled.ProfilePosts>

			<Components.Pagination />
		</Styled.Profile>
	);
};
