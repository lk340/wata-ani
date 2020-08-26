import styled from "styled-components";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

// ===================== //
// ↓↓↓ Modal Options ↓↓↓ //
// ===================== //

export const ModalOptions = styled("div")`
	${Snippets.grid(1, "auto", 40)};
	position: absolute;
	right: 0;
	margin-top: 90px;
	padding-right: ${Constants.sidePaddings.mobile}px;
`;
