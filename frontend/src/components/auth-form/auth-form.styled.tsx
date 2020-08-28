import styled from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

import logoJapanese from "@/images/logo/japanese.svg";

// ================= //
// ↓↓↓ Auth Form ↓↓↓ //
// ================= //

export const AuthForm = styled("form")`
	${Snippets.grid(1, "auto", 40)};
	width: 400px;

	@media (max-width: ${Constants.breakpoints.mobile}) {
		padding: 0px ${Constants.sidePaddings.mobile}px;
		width: 100%;
	}

	@media (max-height: 620px) {
		grid-gap: 20px;
	}
`;

// ============================= //
// ↓↓↓ Logo, Title, & Inputs ↓↓↓ //
// ============================= //

export const AuthFormLogoTitleInputs = styled("div")`
	${Snippets.grid(1, "auto", 30, "auto", "auto")};
`;

export const AuthFormLogo = styled("img").attrs(() => ({
	src: logoJapanese,
	alt: "auth form component logo image",
}))`
	${Snippets.square("70px")};
	margin: 0px auto;
	border-radius: ${Constants.borderRadius.components.authForm.logo};

	@media (max-height: 740px) {
		display: none;
	}
`;

export const AuthFormTitle = styled(animated.h1)`
	${Snippets.clearSpacing()};
	font-size: ${Constants.fontSizes.components.authForm.title};
	text-align: center;
`;
