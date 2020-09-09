import styled from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

// ============ //
// ↓↓↓ Home ↓↓↓ //
// ============ //

export const Home = styled(animated.div)`
	${Snippets.flex("column")};
	${Snippets.navbarMargins()};
	position: relative;
	min-height: 100vh;
`;

export const HomeSectionsNotAuthed = styled("div")`
	flex: 1;
	display: ${(props) => {
		return props.theme.isCurrentUser.toString() === "true" ? "none" : "block";
	}};
`;

export const HomeSectionsAuthed = styled("div")`
	flex: 1;
	display: ${(props) => {
		return props.theme.isCurrentUser.toString() === "true" ? "block" : "none";
	}};

	border: red solid 1px;
`;

export const HomeSections = styled("div")`
	margin: 0px auto;
	width: 100%;
	max-width: ${Constants.globals.maxWidth}px;
`;
