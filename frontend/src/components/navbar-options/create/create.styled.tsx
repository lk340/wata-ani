import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";

// ============== //
// ↓↓↓ Create ↓↓↓ //
// ============== //

export const Create = styled(animated.div)`
	top: 100%;
	right: 0%;
	margin-right: ${Constants.size.components.navbar.spacer}px;
`;
