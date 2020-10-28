import styled from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";

// ============== //
// ↓↓↓ Create ↓↓↓ //
// ============== //

export const CreateFormReviewTextarea = styled(animated.textarea).attrs(() => ({
	placeholder: "Your review here (max 500 characters)",
}))`
	${Snippets.size("400px", "50px")};
	height: 100px;
	margin-bottom: 30px;
	padding: 20px;
	color: inherit;
	border-radius: ${Constants.borderRadius.components.navbarOption.create.form};
	font-size: ${Constants.fontSizes.components.navbarOption.create.form.input};
	outline: none;

	@media (max-width: 625px) {
		width: 100%;
	}
`;

// ============ //
// ↓↓↓ Tags ↓↓↓ //
// ============ //

type TagsProps = { length: number };

export const Tags = styled("div")<TagsProps>`
	${Snippets.flex("row", "auto", "center")};
	width: 100%;
	max-width: 400px;
	margin: 10px 0px 30px;
	padding-bottom: 5px;
	overflow-x: scroll;

	@media (max-width: ${Constants.breakpoints.mobile}px) {
		${Snippets.hideScrollbar()};
	}
`;

export const TagContainer = styled("div")`
	flex-shrink: 0;
`;

type TagProps = { margin: string };

export const Tag = styled(animated.div)<TagProps>`
	margin-right: ${(props) => (props.margin === "true" ? "10px" : "0px")};
	padding: 10px 14px;
	border-radius: ${Constants.borderRadius.components.post.tag};
	font-size: ${Constants.fontSizes.components.post.tag};
	font-weight: 400;
	cursor: pointer;
`;
