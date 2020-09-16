import styled from "styled-components";
import { animated } from "react-spring";

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
