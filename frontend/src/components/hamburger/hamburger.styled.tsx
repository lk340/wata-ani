import styled, { css } from "styled-components";
import { animated } from "react-spring";

import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

/**
 * Hamburger
 * Lines
 * Modal
 */

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
// ↓↓↓ Lines ↓↓↓ //
// ============= //

export const HamburgerLines = styled("div")`
	${Snippets.fillContainer()};
	position: relative;
	z-index: 3;
	cursor: pointer;
`;

const lineStyles = css`
	${Snippets.size("100%", "4px")};
	position: absolute;
	background-color: ${Colors.PRIMARY_100};
	border-radius: 10rem;
`;

export const HamburgerLinesLine = styled(animated.div)`
	${lineStyles};
`;

export const HamburgerLinesLineMiddle = styled(animated.div)`
	${lineStyles};
	top: 50%;
	transform: translateY(-50%);
`;

// ============= //
// ↓↓↓ Modal ↓↓↓ //
// ============= //

export const HamburgerModal = styled(animated.div)`
	${Snippets.absolute("0px", "0px", "0px", "0px")};
	background-color: ${Colors.PRIMARY_100};
`;

export const HamburgerModalMain = styled(animated.div)`
	${Snippets.absolute("0px", "0px", "0px", "0px", 2)};
	${Snippets.fillContainer()};
`;
