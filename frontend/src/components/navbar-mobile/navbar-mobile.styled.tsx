import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

// ===================== //
// ↓↓↓ Navbar Mobile ↓↓↓ //
// ===================== //

export const NavbarMobile = styled("div")`
	${Snippets.grid(5, "1fr", 0, "center", "center")};
	display: none;
	height: ${Constants.size.components.navbarMobile.height};
	color: ${Constants.theme.text};
	background-color: ${Constants.theme.background};
	border-top: ${Constants.theme.components.navbarMobile.borderTop} solid 1px;

	border: red solid 1px;

	@media (max-width: 575px) {
		display: block;
	}
`;

// =============== //
// ↓↓↓ Options ↓↓↓ //
// =============== //

export const NavbarMobileOption = styled("div")`
	${Snippets.flexColumnCenter()};
	height: 100%;

	border: red solid 1px;
`;

export const NavbarMobileOptionIcon = styled("div")`
	margin-bottom: 4px;
`;

export const NavbarMobileOptionText = styled("div")``;
