import styled from "styled-components";

import * as Constants from "@/utils/style/constants";

export const NotAuthed = styled("div")`
	flex: 1;
	display: ${(props) => {
		return props.theme.isCurrentUser.toString() === "true" ? "none" : "block";
	}};
`;

export const NotAuthedSections = styled("div")`
	margin: 0px auto;
	width: 100%;
	max-width: ${Constants.globals.maxWidth}px;
`;
