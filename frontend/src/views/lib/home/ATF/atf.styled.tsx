import styled from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

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

	border: red solid 1px;
`;

// ============ //
// ↓↓↓ Copy ↓↓↓ //
// ============ //

export const ATFCopy = styled("div")`
	${Snippets.grid(1, "auto", 60, "start")};
	width: 510px;
	margin-right: 80px;
`;

export const ATFCopyTitle = styled("h1")`
	${Snippets.clearSpacing()};
	font-size: ${Constants.fontSizes.pages.home.atf.title};
`;

export const ATFCopyBodyContainer = styled("div")`
	${Snippets.grid(1, "auto", 30)};
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

export const ATFImagesContainer = styled("div")`
	border: blue solid 1px;
`;

type Image = { mode: "light" | "dark" };

// --- Light Images --- //

export const ATFImagesLight = styled("div")<Image>`
	display: ${(props) => (props.mode === "light" ? "block" : "none")};
`;

export const ATFImagesLightFormDummy = styled("img").attrs(() => ({
	alt: "home page above the fold light form dummy",
}))``;

export const ATFImagesLightProfileDummy = styled("img").attrs(() => ({
	alt: "home page above the fold light profile dummy",
}))``;

// --- Dark Images --- //

export const ATFImagesDark = styled("div")<Image>`
	display: ${(props) => (props.mode === "light" ? "none" : "block")};
`;

export const ATFImagesDarkFormDummy = styled("img").attrs(() => ({
	alt: "home page above the fold dark form dummy",
}))``;

export const ATFImagesDarkProfileDummy = styled("img").attrs(() => ({
	alt: "home page above the fold dark profile dummy",
}))``;
