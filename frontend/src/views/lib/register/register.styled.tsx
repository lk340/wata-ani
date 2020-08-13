import styled from "styled-components";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

// ================ //
// ↓↓↓ Register ↓↓↓ //
// ================ //

export const Register = styled("div")`
	${Snippets.flexRowCenter()};
	${Snippets.fillView()};
	background-color: ${Constants.theme.background};

	@media (max-width: ${Constants.breakpoints.mobile}) {
		/* padding: 0px ${Constants.sidePaddings.mobile}; */
	}
`;
