import styled from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

// ============ //
// ↓↓↓ Home ↓↓↓ //
// ============ //

export const Home = styled(animated.div)`
	${Snippets.flex("column")};
	position: relative;
	min-height: 100vh;
`;

export const HomeComponents = styled("div")`
	flex: 1;
	margin: 0px auto;
	width: 100%;
	max-width: ${Constants.globals.maxWidth}px;
	color: inherit;

	border: red solid 1px;
`;
