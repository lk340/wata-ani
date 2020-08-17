import styled from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

// ================ //
// ↓↓↓ Register ↓↓↓ //
// ================ //

export const Register = styled(animated.div)`
	${Snippets.flexRowCenter()};
	${Snippets.fillView()};
`;
