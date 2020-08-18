import styled, { css } from "styled-components";
import { animated } from "react-spring";

import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

export const Hamburger = styled("div")`
	${Snippets.flexColumnCenter()};
	${Snippets.square("20px")};
	display: none;
	cursor: pointer;

	@media (max-width: 575px) {
		display: flex;
	}
`;

export const HamburgerLines = styled("div")`
	${Snippets.fillContainer()};
	position: relative;
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