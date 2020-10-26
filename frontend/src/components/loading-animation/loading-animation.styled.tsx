import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Snippets from "@/utils/style/snippets";

export const Loading = styled("div")`
	${Snippets.fixed("0", "0", "0", "0")};

	border: red solid 1px;
`;

export const LoadingCircle = styled("div")`
	${Snippets.absoluteCenter()};
`;

export const LoadingCircleOuter = styled("div")`
	${Snippets.makeCircle()};
`;

export const LoadingCircleInner = styled("div")`
	${Snippets.makeCircle()};
`;
