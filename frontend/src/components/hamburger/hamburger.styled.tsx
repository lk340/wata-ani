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
// ↓↓↓ Lines ↓↓↓ //
// ============= //

export const HamburgerLines = styled("div")`
	${Snippets.fillContainer()};
	position: relative;
	z-index: 3;
	cursor: pointer;
`;

const lineStyles = css`
	${Snippets.size("100%", "4px")};
	position: absolute;
	background-color: ${Colors.PRIMARY_100};
	border-radius: 10rem;
`;

export const HamburgerLinesLine = styled(animated.div)`
	${lineStyles};
`;

export const HamburgerLinesLineMiddle = styled(animated.div)`
	${lineStyles};
	top: 50%;
	transform: translateY(-50%);
`;

// ============= //
// ↓↓↓ Modal ↓↓↓ //
// ============= //

export const HamburgerModal = styled(animated.div)`
	${Snippets.absolute("0px", "0px", "0px", "0px")};
	background-color: ${Colors.PRIMARY_100};
`;

export const HamburgerModalMain = styled(animated.div)`
	${Snippets.absolute("0px", "0px", "0px", "0px", 2)};
	${Snippets.fillContainer()};
`;

// ==================== //
// ↓↓↓ Modal Option ↓↓↓ //
// ==================== //

export const HamburgerModalMainOptionContainer = styled("div")`
	${Snippets.grid(1, "auto", 40)};
	margin-top: 90px;
`;

export const HamburgerModalMainOption = styled("div")`
	display: flex;
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

type OptionLink = { primary: boolean };

export const HamburgerModalMainOptionLink = styled(Gatsby.Link)<OptionLink>`
	${Snippets.clearAnchor()};
	color: ${(props) => (props.primary ? Colors.PRIMARY_100 : "inherit")};
	font-size: ${Constants.fontSizes.components.hamburger.link};
`;
