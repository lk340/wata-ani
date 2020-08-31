import styled from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

// ===================== //
// ↓↓↓ Option Button ↓↓↓ //
// ===================== //

type Button = { test_id: string };

export const OptionButton = styled("div").attrs((props: Button) => ({
	"data-testid": `navbar mobile component ${props.test_id} button`,
}))<Button>`
	${Snippets.flexColumnCenter()};
	height: 100%;
	cursor: pointer;
`;

export const OptionIcon = styled("div")`
	margin-bottom: 4px;
`;

export const OptionText = styled(animated.p)`
	${Snippets.clearSpacing()};
	font-size: ${Constants.fontSizes.components.navbarMobile.text};

	@media (max-width: 300px) {
		display: none;
	}
`;
