import styled from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

// ================ //
// ↓↓↓ Sign In ↓↓↓ //
// ================ //

export const SignIn = styled(animated.div)`
	${Snippets.flexRowCenter()};
	${Snippets.fillView()};

	@media (max-width: ${Constants.breakpoints.mobile}px) {
		padding: 0px ${Constants.sidePaddings.mobile}px;
	}
`;
