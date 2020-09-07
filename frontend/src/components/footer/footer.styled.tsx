import styled from "styled-components";
import { animated } from "react-spring";
import * as Gatsby from "gatsby";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

import logo from "@/images/logo/japanese.svg";

/**
 * Footer
 * Logo
 * Names
 * Navigation
 */

// ============== //
// ↓↓↓ Footer ↓↓↓ //
// ============== //

export const Footer = styled(animated.div)`
	${Snippets.flexColumnCenter()};
	height: ${Constants.size.components.footer.height}px;

	@media (max-width: ${Constants.breakpoints.tablet}px) {
		padding: 0px ${Constants.sidePaddings.tablet}px;
	}

	@media (max-width: ${Constants.breakpoints.mobile}px) {
		padding: 0px ${Constants.sidePaddings.mobile}px;
	}
`;

export const FooterContent = styled("div")`
	${Snippets.grid(1, "auto", 50, "center", "center")};
`;

// ============ //
// ↓↓↓ Logo ↓↓↓ //
// ============ //

export const FooterLogo = styled("img").attrs(() => ({
	src: logo,
	alt: "footer component logo",
}))`
	${Snippets.square("70px")};
	border-radius: ${Constants.borderRadius.components.footer.logo};
`;

// ============= //
// ↓↓↓ Names ↓↓↓ //
// ============= //

export const FooterNames = styled("div")`
	${Snippets.grid(1, "auto", 10)};

	@media (max-width: ${Constants.breakpoints.mobile}px) {
		${Snippets.grid(1, "auto", 20)};
	}
`;

export const FooterNamesName = styled("p")`
	${Snippets.clearSpacing()};
	color: ${Colors.LIGHT.six};
	font-size: ${Constants.fontSizes.components.footer.name};
	font-weight: bold;
	text-align: center;
`;

// ================== //
// ↓↓↓ Navigation ↓↓↓ //
// ================== //

export const FooterNavigationContainer = styled("div")`
	${Snippets.grid(2, "auto", 60)};
`;

export const FooterNavigation = styled("div")`
	${Snippets.grid(1, "auto", 10)};
	text-align: center;
`;

export const FooterNavigationTitle = styled("h3")`
	${Snippets.clearSpacing()};
	color: ${Colors.PRIMARY_100};
	font-size: ${Constants.fontSizes.components.footer.navigationTitle};
	line-height: ${Constants.lineHeights.components.footer.navigationTitle}%;
`;

export const FooterNavigationLink = styled(Gatsby.Link)`
	${Snippets.clearAnchor()};
	font-size: ${Constants.fontSizes.components.footer.navigationLink};
	line-height: ${Constants.lineHeights.components.footer.navigationLink}%;
`;
