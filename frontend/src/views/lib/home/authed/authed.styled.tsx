import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

export const Authed = styled("div")`
	${Snippets.flex("column")};
	flex: 1;
	display: ${(props) => {
		return props.theme.isCurrentUser.toString() === "true" ? "flex" : "none";
	}};
`;

export const AuthedSections = styled("div")`
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
