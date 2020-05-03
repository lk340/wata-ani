import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Snippets from "@/utils/style/snippets";

export const SignUp = styled("div")`
	${Snippets.fillContainer()};

	border: red solid 1px;
`;

export const SignUpForm = styled("form")`
	${Snippets.flex("column")};

	border: red solid 1px;
`;

export const SignUpFormTitle = styled("h1").attrs(() => ({
	"data-testid": "title",
}))`
	${Snippets.clear()};
	text-align: center;
`;

export const SignUpFormError = styled("div").attrs(() => ({
	"data-testid": "error-message"
}))`
	color: red;
`;

export const SignUpFormUsernameInput = styled("input").attrs(() => ({
	placeholder: "Username",
	required: true,
	"data-testid": "username-field",
}))`
	outline: none;
`;

export const SignUpFormEmailInput = styled(SignUpFormUsernameInput).attrs(() => ({
	placeholder: "Email",
	type: "email",
	required: true,
	"data-testid": "email-field",
}))``;

export const SignUpFormPasswordInput = styled(SignUpFormUsernameInput).attrs(() => ({
	placeholder: "Password",
	type: "password",
	required: true,
	"data-testid": "password-field",
}))``;

export const SignUpFormPasswordConfirmationInput = styled(SignUpFormUsernameInput).attrs(
	() => ({
		placeholder: "Confirm Password",
		type: "password",
		required: true,
		"data-testid": "password-confirmation-field",
	}),
)``;

export const SignUpFormSubmit = styled("button").attrs(() => ({
	type: "submit",
	"data-testid": "submit-button",
}))``;
