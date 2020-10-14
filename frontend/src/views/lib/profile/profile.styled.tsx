import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Snippets from "@/utils/style/snippets";

/**
 * Profile
 * Information
 * Posts
 */

// =============== //
// ↓↓↓ Profile ↓↓↓ //
// =============== //

export const Profile = styled(animated.div)`
	${Snippets.paddingsDueToNavbar()};
	position: relative;
	min-height: 100vh;
`;

// =================== //
// ↓↓↓ Information ↓↓↓ //
// =================== //

export const ProfileInformation = styled("div")`
	${Snippets.flexColumnCenter()};

	border: red solid 1px;
`;

export const ProfileInformationContainer = styled(animated.div)`
	${Snippets.flex("column")};

	border: red solid 1px;
`;

export const ProfileInformationMain = styled("div")`
	${Snippets.flex()};
	margin-bottom: 20px;

	border: red solid 1px;
`;

export const ProfileInformationMainProfilePicture = styled("img")`
	${Snippets.square("100px")};
	${Snippets.makeCircle()};
	margin-right: 40px;

	border: red solid 1px;
`;

export const ProfileInformationMainUsernameDataContainer = styled("div")``;

export const ProfileInformationMainUsername = styled("h3")`
	${Snippets.clearSpacing()};
	margin-bottom: 20px;
`;

export const ProfileInformationData = styled("div")`
	${Snippets.flexRowCenter()};

	border: blue solid 1px;
`;

export const ProfileInformationDataReviewsIcon = styled("img")`
	margin-right: 14px;
`;

export const ProfileInformationDataText = styled("span")`
	display: block;
`;

export const ProfileInformationBio = styled("p")`
	${Snippets.clearSpacing()};

	border: red solid 1px;
`;

// ============= //
// ↓↓↓ Posts ↓↓↓ //
// ============= //

export const ProfilePosts = styled("div")`
	flex: 1;
`;
