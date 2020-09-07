import styled from "styled-components";
import { animated } from "react-spring";

import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

// ================= //
// ↓↓↓ Hamburger ↓↓↓ //
// ================= //

export const Hamburger = styled("div")`
	${Snippets.flexColumnCenter()};
	${Snippets.square("20px")};
	display: none;

	@media (max-width: 575px) {
		display: flex;
	}
`;

// ============= //
// ↓↓↓ Modal ↓↓↓ //
// ============= //

export const HamburgerModal = styled(animated.div)`
	${Snippets.fixed("0px", "0px", "0px", "0px")};
	background-color: ${Colors.PRIMARY_100};
	height: 100vh;
`;

export const HamburgerModalMainContainer = styled(animated.div)`
	${Snippets.absolute("0px", "0px", "0px", "0px", 2)};
	${Snippets.fillContainer()};
`;

export const HamburgerModalMain = styled(animated.div)`
	${Snippets.fillContainer()};
`;

export const HamburgerModalThemeButton = styled("div")`
	${Snippets.absolute("auto", "0px", "30px", "auto", 3)};
`;
