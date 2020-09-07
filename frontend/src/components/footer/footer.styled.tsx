import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";
import * as Gatsby from "gatsby";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

import logo from "@/images/logo/japanese.svg";

// ============== //
// ↓↓↓ Footer ↓↓↓ //
// ============== //

export const Footer = styled(animated.div)`
	${Snippets.flexColumnCenter()};
	height: ${Constants.size.components.footer.height}px;
`;

export const FooterContent = styled("div")`
	${Snippets.grid(1, "auto", 50, "center", "center")};
`;

export const Logo = styled("img").attrs(() => ({
	src: logo,
	alt: "footer component logo",
}))`
	${Snippets.square("70px")};
	border-radius: ${Constants.borderRadius.components.footer.logo};
`;

export const Names = styled("div")`
	${Snippets.grid(1, "auto", 10)};
`;

export const Name = styled("p")`
	${Snippets.clearSpacing()};
	color: ${Colors.LIGHT.six};
	font-size: ${Constants.fontSizes.components.footer.name};
	font-weight: bold;
	text-align: center;
`;

export const NavigationContainer = styled("div")`
	${Snippets.grid(2, "auto", 60)};
`;

export const Navigation = styled("div")`
	${Snippets.grid(1, "auto", 10)};
`;

export const NavigationTitle = styled("h3")`
	${Snippets.clearSpacing()};
	color: ${Colors.PRIMARY_100};
	font-size: ${Constants.fontSizes.components.footer.navigationTitle};
	line-height: ${Constants.lineHeights.components.footer.navigationTitle}%;
`;

export const NavigationLink = styled(Gatsby.Link)`
	${Snippets.clearAnchor()};
	font-size: ${Constants.fontSizes.components.footer.navigationLink};
	line-height: ${Constants.lineHeights.components.footer.navigationLink}%;
`;
