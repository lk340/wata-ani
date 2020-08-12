import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

import logoJapanese from "@/images/logo-japanese.svg";

export const AuthForm = styled("div")`
	border: red solid 1px;
`;

export const AuthFormLogo = styled("img").attrs(() => ({
	src: logoJapanese,
	alt: "image",
}))`
	${Snippets.square(Constants.size.components.authForm.logo.width)};
	border-radius: ${Constants.borderRadius.components.authForm.logo};
`;

export const AuthFormTitle = styled("h1")`
	${Snippets.clearSpacing()};
`;

export const AuthFormInputs = styled("div")``;

export const AuthFormInput = styled("input")``;
