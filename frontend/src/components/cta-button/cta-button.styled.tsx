import styled from "styled-components";
import * as Gatsby from "gatsby";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

type ButtonProps = {
	customMedia?: number;
	customMediaWidth?: string;
};

export const CTAButton = styled("div")<ButtonProps>`
	color: ${Colors.NEUTRALS.white_100};
	background-color: ${Colors.PRIMARY_100};
	border-radius: ${Constants.borderRadius.components.ctaButton};

	@media (max-width: ${(props) => `${props.customMedia}px`}) {
		width: ${(props) => props.customMediaWidth};
	}

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
