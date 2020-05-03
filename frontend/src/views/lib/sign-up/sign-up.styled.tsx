import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

export const SignUp = styled("div")``;

export const SignUpForm = styled("form")`
	margin: auto;

	border: red solid 1px;
`;

export const SignUpFormUsernameInput = styled("input").attrs(() => ({
	placeholder: "Username",
	required: true,
}))``;

export const SignUpFormEmailInput = styled("input").attrs(() => ({
	placeholder: "Email",
	type: "email",
	required: true,
}))``;

export const SignUpFormPasswordInput = styled("input").attrs(() => ({
	placeholder: "Password",
	type: "password",
	required: true,
}))``;

export const SignUpFormPasswordConfirmationInput = styled("input").attrs(() => ({
	placeholder: "Confirm Password",
	type: "password",
	required: true,
}))``;

export const SignUpFormSubmit = styled("button")``;
