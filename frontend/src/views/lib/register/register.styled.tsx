import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

export const Register = styled("div")`
	${Snippets.flexRowCenter()};
	${Snippets.fillView()};
	background-color: ${Constants.theme.background};
`;
