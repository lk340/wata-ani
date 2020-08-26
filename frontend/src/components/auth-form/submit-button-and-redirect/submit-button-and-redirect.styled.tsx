import styled from "styled-components";
import { animated } from "react-spring";
import * as Gatsby from "gatsby";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

// ================================ //
// ↓↓↓ Submit Button & Redirect ↓↓↓ //
// ================================ //

export const SubmitButtonAndRedirect = styled("div")`
	${Snippets.grid(1, "auto", 20)};
`;

// ===================== //
// ↓↓↓ Submit Button ↓↓↓ //
// ===================== //

export const SubmitButton = styled("button").attrs(() => ({
	type: "submit",
}))`
	${Snippets.flexRowCenter()};
	height: 50px;
	color: ${Colors.NEUTRALS.white_100};
	background-color: ${Colors.PRIMARY_100};
	border: none;
	border-radius: ${Constants.borderRadius.components.authForm.input};
	font-size: ${Constants.fontSizes.components.authForm.submit};
	font-weight: bold;
	outline: none;
	cursor: pointer;
`;

// ================ //
// ↓↓↓ Redirect ↓↓↓ //
// ================ //

export const Redirect = styled(animated.p)`
	${Snippets.clearSpacing()};
	color: ${Constants.theme.text};
	font-size: ${Constants.fontSizes.components.authForm.redirect};
`;

type RedirectLink = { form_type: "Registration" | "Sign In" };

export const RedirectLink = styled(Gatsby.Link).attrs((props: RedirectLink) => ({
	to: props.form_type === "Registration" ? "/sign-in" : "/registration",
}))<RedirectLink>`
	${Snippets.clearAnchor()};
	display: inline;
	color: ${Colors.PRIMARY_100};
	font-weight: bold;
	font-size: ${Constants.fontSizes.components.authForm.redirect};
`;
