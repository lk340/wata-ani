import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

// ============================ //
// ↓↓↓ Navbar Modal Partial ↓↓↓ //
// ============================ //

export const NavbarModalPartial = styled(animated.div)`
	${Snippets.absolute("80px", "0px")};
	border-radius: ${Constants.borderRadius.components.navbarModalPartial.container};
	overflow: hidden;
`;

export const NavbarModalPartialHeader = styled(animated.div)`
	${Snippets.flex("row", "space-between", "center")};
	height: ${Constants.size.components.navbarModalPartial.header.height};
	padding: 0px ${Constants.sidePaddings.mobile};
`;

export const NavbarModalPartialBody = styled(animated.div)`
	padding: ${Constants.sidePaddings.mobile};
`;
