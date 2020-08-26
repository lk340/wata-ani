import styled, { css } from "styled-components";
import { animated } from "react-spring";
import * as Gatsby from "gatsby";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

/**
 * Navbar Mobile
 * Options
 */

// ===================== //
// ↓↓↓ Navbar Mobile ↓↓↓ //
// ===================== //

type Navbar = { display: string };

export const NavbarMobile = styled(animated.div)<Navbar>`
	${Snippets.flex("row", "space-between", "center")};
	display: none;
	height: ${Constants.size.components.navbarMobile.height}px;
	padding: 0px ${Constants.sidePaddings.mobile}px;
	color: ${Constants.theme.text};
	background-color: ${Constants.theme.background};
	border-top: ${Constants.theme.components.navbarMobile.borderTop} solid 1px;

	@media (max-width: 575px) {
		display: ${(props) => (props.display === "true" ? "flex" : "none")};
	}
`;

// =============== //
// ↓↓↓ Options ↓↓↓ //
// =============== //

const optionStyles = css`
	${Snippets.flexColumnCenter()};
	height: 100%;
	cursor: pointer;
`;

export const NavbarMobileOptionLink = styled(Gatsby.Link)`
	${Snippets.clearAnchor()};
	${optionStyles};
`;

export const NavbarMobileOptionButton = styled("div")`
	${optionStyles};
`;

export const NavbarMobileOptionIcon = styled("div")`
	margin-bottom: 4px;
`;

export const NavbarMobileOptionText = styled(animated.p)`
	${Snippets.clearSpacing()};
	font-size: ${Constants.fontSizes.components.navbarMobile.text};

	@media (max-width: 300px) {
		display: none;
	}
`;
