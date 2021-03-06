import styled from "styled-components";
import { animated } from "react-spring";
import * as Gatsby from "gatsby";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

// ========================= //
// ↓↓↓ Option Link ↓↓↓ //
// ========================= //

type Link = { test_id: string };

export const OptionLink = styled(Gatsby.Link).attrs((props: Link) => ({
	"data-testid": `navbar mobile component ${props.test_id} link`,
}))<Link>`
	${Snippets.clearAnchor()};
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
