import * as React from "react";

import * as Context from "@/context";
import * as Components from "@/components";
import * as Functions from "@/utils/functions";

import * as Styled from "./profile.styled";
import * as Springs from "./profile.springs";

export const Profile = () => {
	const { theme } = Context.Theme.useThemeContext();

	const animateBackground = Springs.background();
	const animateInformation = Springs.information();
	const animateData = Springs.data();

	const currentUserId = Functions.getSession().id;

	return (
		<Styled.Profile style={animateBackground}>
			<Components.Navbar />

			<Styled.ProfileInformation style={animateInformation}>
				<Styled.ProfileInformationContainer>
					<Styled.ProfileInformationMain>
						{/* Profile Picture */}
						<Styled.ProfileInformationMainProfilePicture />
						{/* Username & Data */}
						<Styled.ProfileInformationMainUsernameDataContainer>
							{/* Username */}
							<Styled.ProfileInformationMainUsername>
								DaddyDaddyDo
							</Styled.ProfileInformationMainUsername>
							{/* Data */}
							<Styled.ProfileInformationData>
								<Styled.ProfileInformationDataReviewsIcon />
								<Styled.ProfileInformationDataText>
									Reviews
								</Styled.ProfileInformationDataText>
							</Styled.ProfileInformationData>
						</Styled.ProfileInformationMainUsernameDataContainer>
					</Styled.ProfileInformationMain>
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
