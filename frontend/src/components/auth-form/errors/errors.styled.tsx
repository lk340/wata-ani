import styled, { css } from "styled-components";
import { animated } from "react-spring";

import * as Snippets from "@/utils/style/snippets";

// ============== //
// ↓↓↓ Errors ↓↓↓ //
// ============== //

export const Errors = styled(animated.div)`
	border: red solid 1px;
`;

export const ErrorsText = styled("p")`
	${Snippets.clearSpacing()};
`;
