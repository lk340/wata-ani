import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

// ================= //
// ↓↓↓ ModalForm ↓↓↓ //
// ================= //

type ContainerProps = { is_open: string };

export const ModalFormContainer = styled("div")<ContainerProps>`
	${Snippets.absolute("0px", "0px", "0px", "0px")};
	display: ${(props) => (props.is_open === "true" ? "block" : "none")};
`;

export const ModalFormContainerOverlay = styled("div")`
	${Snippets.absolute("0px", "0px", "0px", "0px")};
	background-color: ${Colors.MODAL.overlay.light};
`;

export const ModalForm = styled(animated.div)`
	${Snippets.absolute("0px", "0px", "0px", "40px", 2)};
	padding: 20px;
`;

// ============= //
// ↓↓↓ Close ↓↓↓ //
// ============= //

export const ModalFormClose = styled("img")``;

// ============= //
// ↓↓↓ Input ↓↓↓ //
// ============= //

export const ModalFormInput = styled("div")``;

export const ModalFormInputTitle = styled("h3")``;

export const ModalFormInputField = styled(animated.input)``;

export const ModalFormRating = styled("div")``;

export const ModalFormRatingText = styled("p")``;

export const ModalFormRatingInput = styled(animated.input)``;

// ============== //
// ↓↓↓ Submit ↓↓↓ //
// ============== //

export const ModalFormSubmit = styled("button").attrs(() => ({
	type: "submit",
}))``;
