import styled from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

// ===================== //
// ↓↓↓ Navbar Mobile ↓↓↓ //
// ===================== //

type Navbar = {
	display: string;
};

export const NavbarMobile = styled(animated.div).attrs(() => ({
	"data-testid": "navbar mobile component",
}))<Navbar>`
	${Snippets.fixed("auto", "0px", "0px", "0px", 10)};
	${Snippets.flex("row", "space-between", "center")};
	display: none;
	height: ${Constants.size.components.navbarMobile.height}px;
	padding: 0px ${Constants.sidePaddings.mobile}px;
	color: ${Constants.theme.text};
	background-color: ${Constants.theme.background};
	border-top: ${Constants.theme.components.navbarMobile.borderTop} solid 1px;

	@media (max-width: 575px) {
		display: ${(props) => {
			const { display } = props;
			const { isCurrentUser } = props.theme;
			if (display === "true" && isCurrentUser) return "flex";
			else return "none";
		}};
	}
`;
