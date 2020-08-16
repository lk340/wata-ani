import styled from "styled-components";
import { animated } from "react-spring";

import * as Snippets from "@/utils/style/snippets";
import * as Constants from "@/utils/style/constants";

// ============ //
// ↓↓↓ Home ↓↓↓ //
// ============ //

export const Home = styled(animated.div)`
	${Snippets.flex("column")};
	position: relative;
	min-height: 100vh;
	/* background-color: ${Constants.theme.pages.home.background}; */
`;

export const HomeComponents = styled("div")`
	flex: 1;
	margin: 0px auto;
	width: 100%;
	max-width: ${Constants.globals.maxWidth};
	color: ${Constants.theme.text};

	/* border: red solid 1px; */
`;
