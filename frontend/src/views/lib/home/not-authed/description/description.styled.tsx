import styled from "styled-components";
import { animated } from "react-spring";
import * as Gatsby from "gatsby";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

/**
 * Description
 * Block
 * Copy
 */

// =================== //
// ↓↓↓ Description ↓↓↓ //
// =================== //

export const Description = styled("div")`
	${Snippets.grid(3, "auto", 60, "auto", "center")};
	margin: 65px 0px 140px;

	@media (max-width: 1260px) {
		${Snippets.grid(1, "auto", 60, "auto", "center")};
		margin: 0px 0px 100px;
		padding: 0px ${Constants.sidePaddings.tablet}px;
	}

	@media (max-width: ${Constants.breakpoints.mobile}px) {
		padding: 0px ${Constants.sidePaddings.mobile}px;
	}
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

	@media (max-width: 1260px) {
		${Snippets.size("100%", "auto")};
		padding: 40px 30px 60px;
	}
`;

export const DescriptionBlockIconContainer = styled(animated.div)`
	${Snippets.absolute("-65px", "-65px", "auto", "auto")};
	${Snippets.flexRowCenter()};
	${Snippets.square("130px")};
	${Snippets.makeCircle()};

	@media (max-width: 1260px) {
		${Snippets.square("60px")};
		position: static;
		margin-bottom: 30px;
	}
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

	@media (max-width: 1260px) {
		${Snippets.square("45%")};
	}
`;

// ============ //
// ↓↓↓ Copy ↓↓↓ //
// ============ //

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

	@media (max-width: 1260px) {
		position: static;
		margin-top: 20px;
	}
`;
