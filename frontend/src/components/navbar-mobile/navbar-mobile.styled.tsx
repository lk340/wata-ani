import styled, { createGlobalStyle } from "styled-components";
import { animated } from "react-spring";
import * as Gatsby from "gatsby";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

import profileIcon from "@/icons/auth/username.svg";

// ===================== //
// ↓↓↓ Navbar Mobile ↓↓↓ //
// ===================== //

type Navbar = {
	display: string;
};

export const NavbarMobile = styled(animated.div).attrs(() => ({
	"data-testid": "navbar mobile component",
}))<Navbar>`
	${Snippets.fixed("auto", "0px", "0px", "0px", 10)};
	${Snippets.flex("row", "space-between", "center")};
	display: none;
	height: ${Constants.size.components.navbarMobile.height}px;
	padding: 0px ${Constants.sidePaddings.mobile}px;
	color: ${Constants.theme.text};
	background-color: ${Constants.theme.background};
	border-top: ${Constants.theme.components.navbarMobile.borderTop} solid 1px;

	@media (max-width: 625px) {
		display: ${(props) => {
			const { display } = props;
			const { isCurrentUser } = props.theme;
			if (display === "true" && isCurrentUser) return "flex";
			else return "none";
		}};
	}
`;

export const NavbarMobileProfileLinkIcon = styled("img").attrs(() => ({
	src: profileIcon,
	alt: "navbar mobile profile link icon",
}))`
	height: ${Constants.size.components.navbarMobile.icon}px;
`;

// ============== //
// ↓↓↓ Global ↓↓↓ //
// ============== //

type GlobalProps = { option_open: string };

export const NavbarMobileGlobalStyles = createGlobalStyle`
	body {
		overflow-y: ${(props: GlobalProps) => (props.option_open === "true" ? "hidden" : "auto")};
	}
`;
