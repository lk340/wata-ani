import styled from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

/**
 * Home
 * Sections
 * 	-	Not Authed
 * 	-	Authed
 */

// ============ //
// ↓↓↓ Home ↓↓↓ //
// ============ //

export const Home = styled(animated.div)`
	${Snippets.flex("column")};
	${Snippets.navbarMargins()};
	position: relative;
	min-height: 100vh;
`;

// ================ //
// ↓↓↓ Sections ↓↓↓ //
// ================ //

// --- Not Authed --- //

export const HomeNotAuthed = styled("div")`
	flex: 1;
	display: ${(props) => {
		return props.theme.isCurrentUser.toString() === "true" ? "none" : "block";
	}};
`;

export const HomeNotAuthedSections = styled("div")`
	margin: 0px auto;
	width: 100%;
	max-width: ${Constants.globals.maxWidth}px;
`;

// --- Authed --- //

export const HomeAuthed = styled("div")`
	${Snippets.flex("column")};
	flex: 1;
	display: ${(props) => {
		return props.theme.isCurrentUser.toString() === "true" ? "flex" : "none";
	}};

	border: red solid 1px;
`;

export const HomeAuthedSections = styled("div")`
	flex: 1;
	margin: 0px auto;
	width: 100%;
	max-width: ${Constants.globals.maxWidth}px;

	@media (max-width: 1260px) {
		padding: 0px ${Constants.sidePaddings.tablet}px;
	}

	@media (max-width: 575px) {
		padding: 0px ${Constants.sidePaddings.mobile}px;
	}

	border: blue solid 1px;
`;
