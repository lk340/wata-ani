import styled, { css } from "styled-components";
import { animated } from "react-spring";
import * as Gatsby from "gatsby";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

import home from "@/icons/mobile-modal/home.svg";
import search from "@/icons/mobile-modal/search.svg";
import settings from "@/icons/mobile-modal/settings.svg";
import registration from "@/icons/mobile-modal/registration.svg";
import signIn from "@/icons/mobile-modal/sign-in.svg";

/**
 * Hamburger
 * Lines
 * Modal
 * Modal Option
 */

// ================= //
// ↓↓↓ Hamburger ↓↓↓ //
// ================= //

export const Hamburger = styled("div")`
	${Snippets.flexColumnCenter()};
	${Snippets.square("20px")};
	display: none;

	@media (max-width: 575px) {
		display: flex;
	}
`;

// ============= //
// ↓↓↓ Modal ↓↓↓ //
// ============= //

export const HamburgerModal = styled(animated.div)`
	${Snippets.absolute("0px", "0px", "0px", "0px")};
	background-color: ${Colors.PRIMARY_100};
`;

export const HamburgerModalMainContainer = styled(animated.div)`
	${Snippets.absolute("0px", "0px", "0px", "0px", 2)};
	${Snippets.fillContainer()};
`;

export const HamburgerModalMain = styled(animated.div)`
	${Snippets.fillContainer()};
`;

export const HamburgerModalThemeButton = styled("div")`
	${Snippets.absolute("auto", "0px", "30px", "auto", 3)};
`;

// ==================== //
// ↓↓↓ Modal Option ↓↓↓ //
// ==================== //

export const HamburgerModalMainOptionContainer = styled("div")`
	${Snippets.grid(1, "auto", 40)};
	position: absolute;
	right: 0;
	margin-top: 90px;
	padding-right: ${Constants.sidePaddings.mobile}px;
`;

type Option = { display: string };

export const HamburgerModalMainOption = styled("div")<Option>`
	display: ${(props) => (props.display === "true" ? "flex" : "none")};
`;

export type OptionIcon = {
	iconType: "home" | "search" | "settings" | "sign in" | "registration";
};

export const HamburgerModalMainOptionIcon = styled("img").attrs((props: OptionIcon) => ({
	src:
		props.iconType === "home"
			? home
			: props.iconType === "search"
			? search
			: props.iconType === "settings"
			? settings
			: props.iconType === "registration"
			? registration
			: signIn,
	alt: `hamburger modal ${props.iconType} icon`,
}))<OptionIcon>`
	${Snippets.square("20px")};
	margin-right: 20px;
`;

export const HamburgerModalMainOptionButton = styled("div")`
	cursor: pointer;
`;

type OptionLink = { primary: string };

export const HamburgerModalMainOptionLink = styled(Gatsby.Link)<OptionLink>`
	${Snippets.clearAnchor()};
	color: ${(props) => (props.primary === "true" ? Colors.PRIMARY_100 : "inherit")};
	font-size: ${Constants.fontSizes.components.hamburger.link};
`;
