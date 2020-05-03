import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Snippets from "@/utils/style/snippets";

export const SignUp = styled("form")`
	${Snippets.flex("column")};
	margin: auto;

	border: red solid 1px;
`;

export const SignUpUsernameInput = styled("input").attrs(() => ({
	placeholder: "Username",
	required: true,
}))``;

export const SignUpEmailInput = styled("input").attrs(() => ({
	placeholder: "Email",
	type: "email",
	required: true,
}))``;

export const SignUpPasswordInput = styled("input").attrs(() => ({
	placeholder: "Password",
	type: "password",
	required: true,
}))``;

export const SignUpPasswordConfirmationInput = styled("input").attrs(() => ({
	placeholder: "Confirm Password",
	type: "password",
	required: true,
}))``;

export const SignUpSubmit = styled("button")``;
