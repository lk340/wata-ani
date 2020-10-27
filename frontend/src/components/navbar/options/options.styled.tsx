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

	@media (max-width: 625px) {
		display: none;
	}
`;

type OptionProps = {
	display: string;
	test_id: string;
};

export const OptionLink = styled(Gatsby.Link).attrs((props: OptionProps) => ({
	"data-testid": `navbar component ${props.test_id} link`,
}))<OptionProps>`
	${Snippets.flexRowCenter()};
	${Snippets.clearAnchor()};
	display: ${(props) => (props.display === "true" ? "flex" : "none")};

	border: red solid 1px;
`;

type FormProps = { display: string };

export const OptionSignInLink = styled(Gatsby.Link).attrs(() => ({
	to: "/sign-in",
	"data-testid": "navbar component sign in link",
}))<FormProps>`
	${Snippets.flexRowCenter()};
	${Snippets.clearAnchor()};
	display: ${(props) => (props.display === "true" ? "flex" : "none")};
`;

export const OptionRegisterLinkContainer = styled(animated.div).attrs(() => ({
	"data-testid": "navbar component register link",
}))<FormProps>`
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

export const OptionButton = styled("div").attrs((props: OptionProps) => ({
	"data-testid": `navbar component ${props.test_id} button`,
}))<OptionProps>`
	${Snippets.flexRowCenter()};
	display: ${(props) => (props.display === "true" ? "flex" : "none")};
	margin-left: ${Constants.size.components.navbar.spacer}px;
	cursor: pointer;
`;
