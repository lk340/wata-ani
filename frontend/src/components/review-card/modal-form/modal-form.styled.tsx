import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

import close from "@/icons/close.svg";

/**
 * Modal Form
 * Close
 * Input
 * Form Rating Input
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

export const ModalForm = styled(animated.form)`
	${Snippets.absolute("0px", "0px", "0px", "40px", 2)};
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
// ↓↓↓ Input ↓↓↓ //
// ============= //

export const ModalFormInput = styled("div")`
	margin-bottom: 30px;
`;

export const ModalFormInputTitle = styled("h3")`
	${Snippets.clearSpacing()};
	margin-bottom: 10px;
	font-size: ${Constants.fontSizes.components.reviewCard.modal};
	font-weight: bold;
`;

export const ModalFormInputField = styled(animated.input)`
	${Snippets.size("100%", `${Constants.size.components.reviewCard.input.height}px`)};
	padding: 0px 20px;
	border-radius: ${Constants.borderRadius.components.reviewCard.modal};
	color: inherit;
	font-size: ${Constants.fontSizes.components.reviewCard.modal};
	outline: none;
`;

// ========================= //
// ↓↓↓ Form Rating Input ↓↓↓ //
// ========================= //

export const ModalFormRating = styled("div")`
	${Snippets.flex("row", "auto", "center")};
	font-size: ${Constants.fontSizes.components.reviewCard.modal};
`;

export const ModalFormRatingText = styled("p")`
	${Snippets.clearSpacing()};
	margin-right: 10px;
	color: ${Colors.LIGHT.five};
	font-size: ${Constants.fontSizes.components.reviewCard.modal};
`;

export const ModalFormRatingInput = styled(animated.input)`
	color: inherit;
	font-size: ${Constants.fontSizes.components.reviewCard.modal};
	outline: none;
`;

// ============== //
// ↓↓↓ Submit ↓↓↓ //
// ============== //

export const ModalFormSubmit = styled("button").attrs(() => ({
	type: "submit",
}))``;
