import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

/**
 * Wrapper
 * Header
 * Body
 */

// ============== //
// ↓↓↓ Wrapper ↓↓↓ //
// ============== //

export const WrapperContainer = styled(animated.div)`
	top: 100%;
	right: 0%;
	margin-right: ${Constants.size.components.navbar.spacer}px;
`;

export const Wrapper = styled(animated.div)`
	${Snippets.flex("column")};
	border-radius: ${Constants.borderRadius.components.navbarOption.container};
`;

// ============== //
// ↓↓↓ Header ↓↓↓ //
// ============== //

export const WrapperHeader = styled(animated.div)`
	${Snippets.flex("row", "space-between", "center")};
	height: ${Constants.size.components.navbarOption.header}px;
	padding: 0px 30px;
`;

export const WrapperHeaderTitle = styled("h2")`
	${Snippets.clearSpacing()};
	color: inherit;
	font-size: ${Constants.fontSizes.components.navbarOption.header};
`;

export const WrapperHeaderClose = styled("img")``;

// ============ //
// ↓↓↓ Body ↓↓↓ //
// ============ //

export const WrapperBody = styled("div")`
	flex: 1;
	padding: 30px;
`;
