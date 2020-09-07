import styled from "styled-components";
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
	padding: 60px 30px 30px;
	color: inherit;
	border-radius: ${Constants.borderRadius.pages.home.description};
`;

export const DescriptionBlockIconContainer = styled(animated.div)`
	${Snippets.absolute("-65px", "-65px", "auto", "auto")};
	${Snippets.flexRowCenter()};
	${Snippets.square("130px")};
	${Snippets.makeCircle()};
`;

type IconProps = {
	src: string;
	type: "star" | "search" | "pencil";
};

export const DescriptionBlockIcon = styled("img").attrs((props: IconProps) => ({
	src: props.src,
	alt: `home page description block ${props.type} icon`,
}))<IconProps>`
	${Snippets.square("50px")};
`;

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
	${Snippets.absolute("auto", "auto", "30px", "30px")};
	display: ${(props) => (props.display === "true" ? "block" : "none")};
	color: ${Colors.PRIMARY_100};
	font-size: ${Constants.fontSizes.pages.home.description.link};
	font-weight: bold;
`;
