import styled from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

// ============ //
// ↓↓↓ Home ↓↓↓ //
// ============ //

export const Home = styled(animated.div)`
	${Snippets.flex("column")};
	${Snippets.navbarMargins()};
	position: relative;
	min-height: 100vh;
`;

export const HomeSections = styled("div")`
	flex: 1;
	margin: 0px auto 140px;
	width: 100%;
	max-width: ${Constants.globals.maxWidth}px;

	@media (max-width: ${Constants.breakpoints.mobile}px) {
		margin: 0px auto 100px;
	}
`;
