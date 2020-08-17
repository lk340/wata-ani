import styled, { css } from "styled-components";
import { animated } from "react-spring";
import * as Gatsby from "gatsby";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

// ===================== //
// ↓↓↓ Navbar Mobile ↓↓↓ //
// ===================== //

export const NavbarMobile = styled(animated.div)`
	${Snippets.flex("row", "space-between", "center")};
	display: none;
	height: ${Constants.size.components.navbarMobile.height};
	padding: 0px ${Constants.sidePaddings.mobile};
	color: ${Constants.theme.text};
	background-color: ${Constants.theme.background};
	border-top: ${Constants.theme.components.navbarMobile.borderTop} solid 1px;

	@media (max-width: 575px) {
		display: flex;
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
