import styled from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

import lightMode from "@/icons/navbar/light-mode.svg";
import darkMode from "@/icons/navbar/dark-mode.svg";

export const ThemeButton = styled("div").attrs(() => ({
	"data-testid": "theme button component",
}))`
	${Snippets.flexRowCenter()};
	position: relative;
	margin: 0px ${Constants.size.components.navbar.spacer}px;
	cursor: pointer;
`;

export const ThemeButtonLightModeIcon = styled(animated.img).attrs(() => ({
	src: lightMode,
	alt: "navbar component light theme button",
}))`
	${Snippets.square(`${Constants.size.components.navbar.icon}px`)};
	position: absolute;
`;

export const ThemeButtonDarkModeIcon = styled("img").attrs(() => ({
	src: darkMode,
	alt: "navbar component dark theme button",
}))`
	${Snippets.square(`${Constants.size.components.navbar.icon}px`)};
`;
