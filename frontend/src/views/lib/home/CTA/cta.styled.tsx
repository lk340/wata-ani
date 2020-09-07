import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

// =========== //
// ↓↓↓ CTA ↓↓↓ //
// =========== //

export const CTA = styled(animated.div)`
	${Snippets.flexColumnCenter()};
	height: ${Constants.size.pages.home.cta.height}px;

	@media (max-width: ${Constants.breakpoints.tablet}px) {
		padding: 0px ${Constants.sidePaddings.tablet}px;
	}

	@media (max-width: ${Constants.breakpoints.mobile}px) {
		padding: 0px ${Constants.sidePaddings.mobile}px;
	}
`;

export const CTAContainer = styled("div")`
	${Snippets.grid(1, "auto", 50, "center", "center")};
	width: 100%;
	max-width: ${Constants.globals.maxWidth}px;
`;

// ============ //
// ↓↓↓ Copy ↓↓↓ //
// ============ //

export const CTACopy = styled("div")`
	${Snippets.grid(1, "auto", 30)};
	max-width: ${Constants.globals.maxWidth / 2}px;
	color: inherit;
	text-align: center;
`;

export const CTACopyTitle = styled("h2")`
	${Snippets.clearSpacing()};
	font-size: ${Constants.fontSizes.pages.home.cta.title};
`;

export const CTACopyBody = styled("p")`
	${Snippets.clearSpacing()};
	font-size: ${Constants.fontSizes.pages.home.cta.body};
	line-height: ${Constants.lineHeights.pages.home.cta}%;
`;
