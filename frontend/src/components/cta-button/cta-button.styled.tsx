import styled from "styled-components";
import * as Gatsby from "gatsby";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

export const CTAButton = styled("div")`
	display: inline-block;
	color: ${Colors.NEUTRALS.white_100};
	background-color: ${Colors.PRIMARY_100};
	border-radius: ${Constants.borderRadius.components.ctaButton};

	@media (max-width: ${Constants.breakpoints.mobile}px) {
		width: 100%;
	}
`;

export const CTAButtonText = styled(Gatsby.Link)`
	${Snippets.clearAnchor()};
	padding: 20px 36px;
	font-size: ${Constants.fontSizes.components.ctaButton};
	font-weight: bold;
	text-align: center;
	line-height: ${Constants.lineHeights.components.ctaButton}%;
`;
