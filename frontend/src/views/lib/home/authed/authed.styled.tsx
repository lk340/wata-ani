import styled from "styled-components";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

// ============== //
// ↓↓↓ Authed ↓↓↓ //
// ============== //

export const Authed = styled("div")`
	${Snippets.flex("column")};
	flex: 1;
	display: ${(props) => {
		return props.theme.isCurrentUser.toString() === "true" ? "flex" : "none";
	}};
`;

export const AuthedReviewCards = styled("div")`
	${Snippets.grid(3, "1fr", 20, "center", "start")};
	flex: 1;
	margin: 20px auto 0px;
	width: 100%;
	max-width: ${Constants.globals.maxWidth}px;

	@media (max-width: 1260px) {
		${Snippets.grid(2, "1fr", 20, "center", "auto")};
		padding: 0px ${Constants.sidePaddings.tablet}px;
	}

	@media (max-width: 960px) {
		${Snippets.grid(1, "1fr", 20, "center", "auto")};
	}

	@media (max-width: 625px) {
		margin-top: 50px;
		padding: 0px ${Constants.sidePaddings.mobile}px;
	}
`;

export const AuthedReviewCard = styled("div")`
	width: 100%;
`;
