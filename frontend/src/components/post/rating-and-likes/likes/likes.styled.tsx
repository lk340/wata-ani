import styled from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

import likesHollow from "@/icons/home/authed/likes-hollow.svg";
import likesFilled from "@/icons/home/authed/likes-filled.svg";

// ============= //
// ↓↓↓ Likes ↓↓↓ //
// ============= //

export const Likes = styled("div")`
	${Snippets.flexRowCenter()};
`;

export const LikesIconContainer = styled("div")`
	${Snippets.flexRowCenter()};
	position: relative;
`;

export const LikesIconHollow = styled("img").attrs(() => ({
	src: likesHollow,
	alt: "review card component likes icon hollow",
}))`
	${Snippets.square("16px")};
	cursor: pointer;
`;

export const LikesIconFilled = styled("img").attrs(() => ({
	src: likesFilled,
	alt: "review card component likes icon filled",
}))`
	${Snippets.square("16px")};
	position: absolute;
	cursor: pointer;
`;

export const LikesCount = styled(animated.span)`
	display: block;
	margin-left: 10px;
	color: ${Colors.LIGHT.five};
	font-size: ${Constants.fontSizes.components.post.likesCount};
	font-weight: bold;
`;
