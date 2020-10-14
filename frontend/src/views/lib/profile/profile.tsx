import * as React from "react";

import * as Context from "@/context";
import * as Components from "@/components";
import * as Functions from "@/utils/functions";
import * as Constants from "@/utils/style/constants";

import * as Styled from "./profile.styled";
import * as Springs from "./profile.springs";

import * as Icons from "@/icons/profile";

export const Profile = () => {
	const { theme } = Context.Theme.useThemeContext();

	const [iconFill, setIconFill] = React.useState("");

	// --- Determining fill color for information icons --- //
	React.useEffect(() => {
		localStorage.mode === "light"
			? setIconFill(Constants.theme.pages.profile.information.data.light)
			: setIconFill(Constants.theme.pages.profile.information.data.dark);
	}, [theme.state.mode, localStorage.mode]);

	// --- Fetching Redux Data --- //
	const currentUser = Functions.getSession();
	let currentUserId: number;
	let currentUserUsername: string = "";
	let currentUserReviewCount: number | "" = "";

	if (currentUser.id && currentUser.posts) {
		// TODO: When using loading animation, end it here.
		currentUserId = currentUser.id;
		currentUserUsername = currentUser.username;
		currentUserReviewCount = currentUser.posts.length;
	}

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
								{currentUserUsername}
							</Styled.ProfileInformationMainUsername>
							{/* Data */}
							<Styled.ProfileInformationData style={animateData}>
								{/* Review Icon */}
								<Icons.Reviews fill={iconFill} />
								{/* Review Text */}
								<Styled.ProfileInformationDataText>
									{currentUserReviewCount} Reviews
								</Styled.ProfileInformationDataText>
							</Styled.ProfileInformationData>
						</Styled.ProfileInformationMainUsernameDataContainer>
					</Styled.ProfileInformationMain>

					{/* Bio */}
					<Styled.ProfileInformationBio>
						Hello, this is an example bio.
					</Styled.ProfileInformationBio>
				</Styled.ProfileInformationContainer>
			</Styled.ProfileInformation>

			<Styled.ProfilePosts>Profile Posts</Styled.ProfilePosts>

			<Components.Pagination />
		</Styled.Profile>
	);
};
