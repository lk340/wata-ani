import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

import close from "@/icons/close.svg";

/**
 * Modal Form
 * Close
 * Group
 * Input
 * Form Personal Rating
 * Tags
 * Submit
 */

// ================== //
// ↓↓↓ Modal Form ↓↓↓ //
// ================== //

type ContainerProps = { is_open: string };

export const ModalFormContainer = styled("div")<ContainerProps>`
	${Snippets.absolute("0px", "0px", "0px", "0px")};
	display: ${(props) => (props.is_open === "true" ? "block" : "none")};
`;

export const ModalFormContainerOverlay = styled("div")`
	${Snippets.absolute("0px", "0px", "0px", "0px")};
	background-color: ${Colors.MODAL.overlay.light};
`;

export const ModalFormWrapper = styled("div")`
	${Snippets.absolute("0px", "0px", "0px", "40px", 2)};
	${Snippets.flex("column")};
	overflow-y: scroll;

	@media (max-width: ${Constants.breakpoints.mobile}px) {
		${Snippets.hideScrollbar()};
	}
`;

export const ModalForm = styled(animated.form)`
	${Snippets.flex("column")};
	padding: 20px;
`;

// ============= //
// ↓↓↓ Close ↓↓↓ //
// ============= //

export const ModalFormCloseContainer = styled("div")`
	${Snippets.flex("row", "space-between", "center")};
`;

export const ModalFormClose = styled("img").attrs(() => ({
	src: close,
	alt: "review card modal form close icon",
}))`
	${Snippets.square("16px")};
	cursor: pointer;
`;

// ============= //
// ↓↓↓ Group ↓↓↓ //
// ============= //

export const ModalFormGroup = styled("div")`
	margin-bottom: 30px;
`;

export const ModalFormGrouptTitle = styled("h3")`
	${Snippets.clearSpacing()};
	margin-bottom: 10px;
	font-size: ${Constants.fontSizes.components.reviewCard.modal};
	font-weight: bold;
`;

// ============= //
// ↓↓↓ Input ↓↓↓ //
// ============= //

const inputStyles = css`
	width: 100%;
	border-radius: ${Constants.borderRadius.components.reviewCard.modal};
	color: inherit;
	font-size: ${Constants.fontSizes.components.reviewCard.modal};
	outline: none;
`;

export const ModalFormInputField = styled(animated.input)`
	${inputStyles};
	min-height: ${Constants.size.components.reviewCard.input.height}px;
	padding: 0px 20px;
`;

export const ModalFormTextareaField = styled(animated.textarea)`
	${inputStyles};
	padding: 20px;
	line-height: 150%;
	resize: vertical;
`;

// ============================ //
// ↓↓↓ Form Personal Rating ↓↓↓ //
// ============================ //

export const ModalFormPersonalRating = styled("div")`
	${Snippets.flex("row", "auto", "center")};
	font-size: ${Constants.fontSizes.components.reviewCard.modal};
`;

export const ModalFormPersonalRatingInput = styled(animated.input)`
	${Snippets.square("50px")};
	color: inherit;
	border-radius: ${Constants.borderRadius.components.reviewCard.modal};
	font-size: ${Constants.fontSizes.components.reviewCard.modal};
	text-align: center;
	outline: none;
`;

// ============ //
// ↓↓↓ Tags ↓↓↓ //
// ============ //

type TagsProps = { length: number };

export const Tags = styled("div")<TagsProps>`
	${Snippets.flex("row", "auto", "center")};
	overflow-x: scroll;

	@media (max-width: ${Constants.breakpoints.mobile}px) {
		${Snippets.hideScrollbar()};
	}
`;

export const TagContainer = styled("div")`
	flex-shrink: 0;
`;

// ============== //
// ↓↓↓ Submit ↓↓↓ //
// ============== //

export const ModalFormSubmit = styled("button").attrs(() => ({
	type: "submit",
}))`
	flex-shrink: 0;
	height: ${Constants.size.components.reviewCard.input.height}px;
	color: ${Colors.NEUTRALS.white_100};
	background-color: ${Colors.PRIMARY_100};
	border: none;
	border-radius: ${Constants.borderRadius.components.reviewCard.modal};
	font-size: ${Constants.fontSizes.components.reviewCard.modal};
	font-weight: bold;
	text-align: center;
	outline: none;
	transition: 0.1s ease-out;
	cursor: pointer;

	:hover {
		background-color: ${(props) => {
			return props.theme.isMobile ? Colors.PRIMARY_100 : Colors.PRIMARY_80;
		}};
	}
`;
