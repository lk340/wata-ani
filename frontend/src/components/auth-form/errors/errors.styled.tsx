import styled, { css } from "styled-components";
import { animated } from "react-spring";

import * as Snippets from "@/utils/style/snippets";

// ============== //
// ↓↓↓ Errors ↓↓↓ //
// ============== //

export const Errors = styled(animated.div)``;

export const ErrorsText = styled("p")`
	${Snippets.clearSpacing()};
`;
