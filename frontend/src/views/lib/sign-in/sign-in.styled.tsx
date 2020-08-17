import styled from "styled-components";
import { animated } from "react-spring";

import * as Snippets from "@/utils/style/snippets";

// ================ //
// ↓↓↓ Sign In ↓↓↓ //
// ================ //

export const SignIn = styled(animated.div)`
	${Snippets.flexRowCenter()};
	${Snippets.fillView()};
`;
