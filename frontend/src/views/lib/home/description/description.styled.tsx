import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";
import * as Gatsby from "gatsby";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

// =================== //
// ↓↓↓ Description ↓↓↓ //
// =================== //

export const Description = styled("div")`
	${Snippets.grid(3, "auto", 60, "auto", "center")};
`;

// ============= //
// ↓↓↓ Block ↓↓↓ //
// ============= //

export const DescriptionBlock = styled(animated.div)`
	${Snippets.square("295px")};
	position: relative;
	padding: 30px;
	color: inherit;
	border-radius: ${Constants.borderRadius.pages.home.description};
`;

export const DescriptionBlockIcon = styled(animated.img)``;

export const DescriptionBlockCopy = styled("div")``;

export const DescriptionBlockTitle = styled("h3")`
	${Snippets.clearSpacing()};
	margin-bottom: 20px;
	font-size: ${Constants.fontSizes.pages.home.description.title};
`;

export const DescriptionBlockBody = styled("p")`
	${Snippets.clearSpacing()};
	font-size: ${Constants.fontSizes.pages.home.description.body};
	line-height: ${Constants.lineHeights.pages.home.description}%;
`;

type BlockLink = { display: string };

export const DescriptionBlockLink = styled(Gatsby.Link)<BlockLink>`
	${Snippets.clearAnchor()};
	position: absolute;
	bottom: 30px;
	left: 30px;
	display: ${(props) => (props.display === "true" ? "block" : "none")};
	color: ${Colors.PRIMARY_100};
	font-size: ${Constants.fontSizes.pages.home.description.link};
`;
