import styled from "styled-components";
import { animated } from "react-spring";
import * as Gatsby from "gatsby";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

/**
 * Options
 * Profile Icon
 * Button
 */

// =============== //
// ↓↓↓ Options ↓↓↓ //
// =============== //

export const Options = styled("div")`
	${Snippets.flex()};

	@media (max-width: 575px) {
		display: none;
	}
`;

type OptionProps = { display: string };

export const Option = styled(Gatsby.Link)<OptionProps>`
	${Snippets.flexRowCenter()};
	${Snippets.clearAnchor()};
	display: ${(props) => (props.display === "true" ? "flex" : "none")};
`;

type FormProps = { display: string };

export const OptionSignInLink = styled(Gatsby.Link).attrs(() => ({
	to: "/sign-in",
}))<FormProps>`
	${Snippets.flexRowCenter()};
	${Snippets.clearAnchor()};
	display: ${(props) => (props.display === "true" ? "flex" : "none")};
`;

export const OptionRegisterLinkContainer = styled(animated.div)<FormProps>`
	${Snippets.flexRowCenter()};
	display: ${(props) => (props.display === "true" ? "flex" : "none")};
	margin-left: ${Constants.size.components.navbar.spacer}px;
	border-radius: ${Constants.borderRadius.components.navbar.register};
	cursor: pointer;
`;

export const OptionRegisterLink = styled(Gatsby.Link).attrs(() => ({
	to: "/registration",
}))`
	${Snippets.clearAnchor()};
	padding: 12px 18px;
`;

// ==================== //
// ↓↓↓ Profile Icon ↓↓↓ //
// ==================== //

export const OptionProfileIcon = styled(animated.img).attrs((props) => ({
	src: props.src,
	alt: "navbar component profile icon",
}))`
	${Snippets.square(`${Constants.size.components.navbar.icon}px`)};
	${Snippets.makeCircle()};
	margin-left: ${Constants.size.components.navbar.spacer}px;
`;

// ============== //
// ↓↓↓ Button ↓↓↓ //
// ============== //

type ButtonProps = { display: string };

export const OptionModalButton = styled("div")<ButtonProps>`
	${Snippets.flexRowCenter()};
	display: ${(props) => (props.display === "true" ? "flex" : "none")};
	margin-left: ${Constants.size.components.navbar.spacer}px;
	cursor: pointer;
`;
