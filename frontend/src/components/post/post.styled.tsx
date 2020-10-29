import styled from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

/**
 * Post
 * Header
 * Modal Button
 * Series Title
 * Title & Date & Text
 * Author Rating
 * Tags
 * Read More
 */

// =================== //
// ↓↓↓ Post ↓↓↓ //
// =================== //

type PostProps = {
	read_more_expanded: string;
	is_profile: string;
};

export const PostContainer = styled(animated.div)<PostProps>`
	${Snippets.flex("column")};
	position: relative;
	width: 100%;
	height: ${(props) => {
		const { read_more_expanded, is_profile } = props;
		if (is_profile === "true") return "auto";
		else if (read_more_expanded === "true") return "auto";
		else return `${Constants.size.components.post.height}px`;
	}};
	padding: 20px 0px;
	border-radius: ${Constants.borderRadius.components.post.card};
`;

export const PostWrapper = styled(animated.div)`
	position: relative;
	width: 100%;
`;

export const PostWrapperFade = styled(animated.div)`
	${Snippets.absolute("auto", "0", "0", "0")};
	height: 40%;
`;

export const Post = styled("div")`
	position: relative;
	width: 100%;
	overflow: hidden;
`;

// ============== //
// ↓↓↓ Header ↓↓↓ //
// ============== //

export const PostHeader = styled("div")`
	${Snippets.flex("row", "space-between", "center")};
	margin-bottom: 20px;
	padding: 0px 20px;
`;

export const PostProfilePicture_Username = styled("div")`
	${Snippets.flex("row", "auto", "center")};
`;

export const PostProfilePicture = styled("img").attrs(() => ({
	// alt: "review card component profile picture",
}))`
	${Snippets.square("40px")};
	${Snippets.makeCircle()};
	margin-right: 20px;
	background-color: ${Colors.LIGHT.five};
`;

export const PostUsername = styled("p")`
	${Snippets.clearSpacing()};
	font-weight: bold;
`;

// ==================== //
// ↓↓↓ Modal Button ↓↓↓ //
// ==================== //

type ModalButtonProps = { belongs_to_current_user: string };

export const PostModalButtonDotContainer = styled("div")<ModalButtonProps>`
	${Snippets.flexColumnCenter()};
	${Snippets.square("16px")};
	display: ${(props) => {
		const { belongs_to_current_user } = props;
		if (belongs_to_current_user === "true") return "flex";
		else return "none";
	}};
	cursor: pointer;
`;

export const PostModalButtonDot = styled("div")`
	${Snippets.square("4px")};
	${Snippets.makeCircle()};
	background-color: ${Colors.LIGHT.five};
`;

// ==================== //
// ↓↓↓ Series Title ↓↓↓ //
// ==================== //

type SeriesTitleProps = { belongs_to_current_user: string };

export const PostSeriesTitle = styled("p")<SeriesTitleProps>`
	${Snippets.clearSpacing()};
	padding: ${(props) => {
		const { belongs_to_current_user } = props;
		if (belongs_to_current_user === "true") return "10px 20px";
		else return "20px 20px 10px";
	}};
	color: ${Colors.PRIMARY_100};
	font-size: ${Constants.fontSizes.components.post.seriesName};
	font-weight: bold;
	line-height: ${Constants.lineHeights.body};
`;

// =========================== //
// ↓↓↓ Title & Date & Text ↓↓↓ //
// =========================== //

export const PostTitleDateText = styled("div")`
	${Snippets.grid(1, "auto", 6)};
	padding: 0px 20px;
`;

export const PostTitle = styled("p")`
	${Snippets.clearSpacing()};
	font-size: ${Constants.fontSizes.components.post.cardTitle};
	font-weight: bold;
	line-height: ${Constants.lineHeights.body};
`;

export const PostDate = styled(animated.p)`
	${Snippets.clearSpacing()};
	font-size: ${Constants.fontSizes.components.post.cardDate};
`;

export const PostText = styled("p")`
	${Snippets.clearSpacing()};
	font-size: ${Constants.fontSizes.components.post.cardText};
	line-height: ${Constants.lineHeights.body};
`;

// ===================== //
// ↓↓↓ Author Rating ↓↓↓ //
// ===================== //

type AuthorRating = { tag_count: number };

export const PostAuthorRating = styled("div")<AuthorRating>`
	display: flex;
	margin: ${(props) => (props.tag_count > 0 ? "10px 0px 26px" : "10px 0px 0px")};
	padding: 0px 20px;
`;

export const PostAuthorRatingText = styled("span")`
	display: block;
	font-size: ${Constants.fontSizes.components.post.authorRating.text};
`;

export const PostAuthorRatingValue = styled("span")`
	display: block;
	color: ${Colors.PRIMARY_100};
	font-size: ${Constants.fontSizes.components.post.authorRating.value};
	font-weight: bold;
`;

// ============ //
// ↓↓↓ Tags ↓↓↓ //
// ============ //

type Tag = {
	tag_count: number;
	wrapper_width: number;
};

export const PostTagContainer = styled("div")<Tag>`
	${Snippets.flex("row", "flex-start", "center")};
	display: ${(props) => (props.tag_count > 0 ? "flex" : "none")};
	width: ${(props) => `${props.wrapper_width}px` || "auto"};
	padding: 0px 0px 5px 20px;
	overflow: auto;

	@media (max-width: ${Constants.breakpoints.mobile}px) {
		${Snippets.hideScrollbar()};
	}
`;

export const PostTagKeyWrapper = styled("div")`
	flex-shrink: 0;
`;

export const PostTag = styled(animated.div)`
	margin-right: 10px;
	padding: 10px 14px;
	border-radius: ${Constants.borderRadius.components.post.tag};
	font-size: ${Constants.fontSizes.components.post.tag};
`;

// ================= //
// ↓↓↓ Read More ↓↓↓ //
// ================= //

export const PostReadMore = styled(animated.div)`
	padding: 12px 20px 0px;
	color: ${Colors.PRIMARY_100};
`;

export const PostReadMoreText = styled("span")`
	font-size: ${Constants.fontSizes.components.post.readMore};
	font-weight: bold;
	cursor: pointer;
`;
