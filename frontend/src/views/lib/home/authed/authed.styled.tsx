import styled from "styled-components";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

export const Authed = styled("div")`
	${Snippets.flex("column")};
	flex: 1;
	display: ${(props) => {
		return props.theme.isCurrentUser.toString() === "true" ? "flex" : "none";
	}};
`;

export const AuthedSections = styled("div")`
	${Snippets.grid(3, "1fr", 20, "center", "center")};
	flex: 1;
	margin: 20px auto 0px;
	width: 100%;
	max-width: ${Constants.globals.maxWidth}px;

	border: red solid 1px;

	@media (max-width: 1260px) {
		padding: 0px ${Constants.sidePaddings.tablet}px;
	}

	@media (max-width: 625px) {
		margin-top: 50px;
		padding: 0px ${Constants.sidePaddings.mobile}px;
	}
`;
