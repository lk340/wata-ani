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
	${Snippets.grid(3, "auto", 20, "center", "start")};
	flex: 1;
	margin: 20px auto 0px;
	width: 100%;
	max-width: ${Constants.globals.maxWidth}px;

	@media (max-width: 1260px) {
		${Snippets.grid(2, "auto", 20, "center", "auto")};
		padding: 0px ${Constants.sidePaddings.tablet}px;
	}

	@media (max-width: 960px) {
		${Snippets.grid(1, "auto", 20, "center", "auto")};
	}

	@media (max-width: 625px) {
		margin-top: 50px;
		padding: 0px ${Constants.sidePaddings.mobile}px;
	}

	border: purple solid 1px;
`;

const containerMaxWidthDesktop = (Constants.globals.maxWidth - 20 * 2) / 3;
const containerMaxWidthTablet = (Constants.globals.maxWidth - 20) / 2;

export const AuthedReviewCard = styled("div")`
	width: 100%;
	max-width: ${containerMaxWidthDesktop}px;

	@media (max-width: 1260px) {
		max-width: ${containerMaxWidthTablet}px;
	}

	@media (max-width: 960px) {
		max-width: 100%;

		border: red solid 1px;
	}
`;
