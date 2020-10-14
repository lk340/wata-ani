import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

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

export const ProfileInformation = styled(animated.div)`
	${Snippets.flexColumnCenter()};
	padding: 34px 0px;

	@media (max-width: 1260px) {
		padding: 34px ${Constants.sidePaddings.tablet}px;
	}

	@media (max-width: ${Constants.breakpoints.mobile}) {
		padding: 34px ${Constants.sidePaddings.mobile}px;
	}
`;

export const ProfileInformationContainer = styled("div")`
	${Snippets.flex("column")};
	width: 100%;
	max-width: ${Constants.globals.maxWidth / 2}px;
`;

export const ProfileInformationMain = styled("div")`
	${Snippets.flex("row", "auto", "center")};
	margin-bottom: 20px;

	@media (max-width: 415px) {
		${Snippets.flex("column", "auto", "center")};
	}
`;

export const ProfileInformationMainProfilePicture = styled(animated.img)`
	${Snippets.square("100px")};
	${Snippets.makeCircle()};
	margin-right: 40px;

	@media (max-width: 415px) {
		margin: 0px;
	}
`;

export const ProfileInformationMainUsernameDataContainer = styled("div")``;

export const ProfileInformationMainUsername = styled("h3")`
	${Snippets.clearSpacing()};
	margin-bottom: 20px;
	font-size: ${Constants.fontSizes.pages.profile.information.username};
	font-weight: bold;

	@media (max-width: 415px) {
		margin-top: 20px;
		text-align: center;
	}
`;

export const ProfileInformationData = styled(animated.div)`
	${Snippets.flex("row", "auto", "center")};
`;

export const ProfileInformationDataText = styled("span")`
	display: block;
	margin-left: 14px;
	font-size: ${Constants.fontSizes.pages.profile.information.data};
	font-weight: normal;
`;

export const ProfileInformationBio = styled("p")`
	${Snippets.clearSpacing()};
	font-size: ${Constants.fontSizes.pages.profile.information.bio};
`;

// ============= //
// ↓↓↓ Posts ↓↓↓ //
// ============= //

export const ProfilePosts = styled("div")`
	${Snippets.grid(1, "auto", 30, "center", "center")};
	flex: 1;
	width: 100%;
	max-width: ${Constants.globals.maxWidth / 2}px;
	margin: 30px auto 0px;

	@media (max-width: 1260px) {
		padding: 0px ${Constants.sidePaddings.tablet}px;
	}

	@media (max-width: ${Constants.breakpoints.mobile}) {
		padding: 0px ${Constants.sidePaddings.mobile}px;
	}

	border: red solid 1px;
`;
