import styled, { css } from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Shadows from "@/utils/style/shadows";

import formLightDummy from "@/images/home/form-light.svg";
import formDarkDummy from "@/images/home/form-dark.svg";
import userProfileLight from "@/images/home/user-profile-light.svg";
import userProfileDark from "@/images/home/user-profile-dark.svg";

/**
 * ATF
 * Copy
 * Images
 *  - Light Images
 *  - Dark Images
 */

// =========== //
// ↓↓↓ ATF ↓↓↓ //
// =========== //

export const ATF = styled("div")`
	display: flex;
`;

// ============ //
// ↓↓↓ Copy ↓↓↓ //
// ============ //

export const ATFCopy = styled("div")`
	${Snippets.grid(1, "auto", 40, "start", "start")};
	width: 510px;
	margin-right: 80px;
`;

export const ATFCopyTitle = styled("h1")`
	${Snippets.clearSpacing()};
	width: 510px;
	font-size: ${Constants.fontSizes.pages.home.atf.title};
`;

export const ATFCopyBodyContainer = styled("div")`
	${Snippets.grid(1, "auto", 30)};
	width: 510px;
`;

export const ATFCopyBody = styled(animated.p)`
	${Snippets.clearSpacing()};
	font-size: ${Constants.fontSizes.pages.home.atf.body};
`;

export const ATFCopyBodyWataAni = styled("span")`
	font-size: ${Constants.fontSizes.pages.home.atf.body};
	font-style: italic;
	font-weight: bold;
`;

// ============== //
// ↓↓↓ Images ↓↓↓ //
// ============== //

export const ATFImagesContainer = styled("div")``;

type Image = { mode: "light" | "dark" };

const formDummyStyles = css`
	margin-right: 40px;
	border-radius: ${Constants.borderRadius.pages.home.atf};
	transform: translateY(100px);
`;

const profileDummyStyles = css`
	border-radius: ${Constants.borderRadius.pages.home.atf};
	transform: translateY(200px);
`;

// --- Light Images --- //

export const ATFImagesLight = styled("div")<Image>`
	display: ${(props) => (props.mode === "light" ? "flex" : "none")};
`;

export const ATFImagesLightFormDummy = styled("img").attrs(() => ({
	src: formLightDummy,
	alt: "home page above the fold light form dummy",
}))`
	${formDummyStyles};
	box-shadow: ${Shadows.light.two};
`;

export const ATFImagesLightProfileDummy = styled("img").attrs(() => ({
	src: userProfileLight,
	alt: "home page above the fold light profile dummy",
}))`
	${profileDummyStyles};
	box-shadow: ${Shadows.light.two};
`;

// --- Dark Images --- //

export const ATFImagesDark = styled("div")<Image>`
	display: ${(props) => (props.mode === "light" ? "none" : "flex")};
`;

export const ATFImagesDarkFormDummy = styled("img").attrs(() => ({
	src: formDarkDummy,
	alt: "home page above the fold dark form dummy",
}))`
	${formDummyStyles};
	box-shadow: ${Shadows.dark.two};
`;

export const ATFImagesDarkProfileDummy = styled("img").attrs(() => ({
	src: userProfileDark,
	alt: "home page above the fold dark profile dummy",
}))`
	${profileDummyStyles};
	box-shadow: ${Shadows.dark.two};
`;
