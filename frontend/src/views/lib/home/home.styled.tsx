import styled from "styled-components";

import * as Snippets from "@/utils/style/snippets";
import * as Constants from "@/utils/style/constants";

// ============ //
// ↓↓↓ Home ↓↓↓ //
// ============ //

export const Home = styled("div")`
	${Snippets.flex("column")};
	position: relative;
`;

export const HomeComponents = styled("div")`
	/* margin: 0px auto; */
	max-width: ${Constants.globals.maxWidth};

	border: red solid 1px;
`;
