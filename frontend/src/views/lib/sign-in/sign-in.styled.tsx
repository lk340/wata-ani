import styled from "styled-components";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

// ================ //
// ↓↓↓ Sign In ↓↓↓ //
// ================ //

export const SignIn = styled("div")`
	${Snippets.flexRowCenter()};
	${Snippets.fillView()};
	background-color: ${Constants.theme.background};
`;
