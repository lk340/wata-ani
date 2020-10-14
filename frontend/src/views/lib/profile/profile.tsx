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

	const [reviewCount, setReviewCount] = React.useState<number | "N/A">("N/A");

	const [iconFill, setIconFill] = React.useState("");

	React.useEffect(() => {
		localStorage.mode === "light"
			? setIconFill(Constants.theme.pages.profile.information.data.light)
			: setIconFill(Constants.theme.pages.profile.information.data.dark);
	}, [theme.state.mode, localStorage.mode]);

	const animateBackground = Springs.background();
	const animateInformation = Springs.information();
	const animateProfilePicture = Springs.profilePicture();
	const animateData = Springs.data();

	const currentUserId = Functions.getSession().id;

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
								DaddyDaddyDo
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
