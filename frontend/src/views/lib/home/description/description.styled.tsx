import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

// =================== //
// ↓↓↓ Description ↓↓↓ //
// =================== //

export const Description = styled("div")`
	${Snippets.grid(3, "auto", 60, "auto", "center")};

	border: blue solid 1px;
`;

export const DescriptionBlock = styled(animated.div)`
	color: inherit;
`;
