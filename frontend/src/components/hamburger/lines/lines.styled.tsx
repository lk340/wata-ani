import styled, { css } from "styled-components";
import { animated } from "react-spring";

import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

// ============= //
// ↓↓↓ Lines ↓↓↓ //
// ============= //

export const Lines = styled("div")`
	${Snippets.fillContainer()};
	position: relative;
	z-index: 3;
	cursor: pointer;
`;

const lineStyles = css`
	${Snippets.size("100%", "4px")};
	position: absolute;
	background-color: ${Colors.PRIMARY_100};
	border-radius: 10rem;
`;

export const LinesLine = styled(animated.div)`
	${lineStyles};
`;

export const LinesLineMiddle = styled(animated.div)`
	${lineStyles};
	top: 50%;
	transform: translateY(-50%);
`;
