import styled from "styled-components";

import * as Snippets from "@/utils/style/snippets";

import home from "@/icons/mobile-modal/home.svg";
import search from "@/icons/mobile-modal/search.svg";
import settings from "@/icons/mobile-modal/settings.svg";
import registration from "@/icons/mobile-modal/registration.svg";
import signIn from "@/icons/mobile-modal/sign-in.svg";

// ==================== //
// ↓↓↓ Modal Button ↓↓↓ //
// ==================== //

type Button = {
	display: string;
	test_id: string;
};

export const ModalButton = styled("div").attrs((props: Button) => ({
	"data-testid": `hamburger component ${props.test_id} button`,
}))<Button>`
	display: ${(props) => (props.display === "true" ? "flex" : "none")};
`;

export type ButtonIcon = {
	iconType: "home" | "search" | "settings" | "sign in" | "registration";
};

export const ModalButtonIcon = styled("img").attrs((props: ButtonIcon) => ({
	src:
		props.iconType === "home"
			? home
			: props.iconType === "search"
			? search
			: props.iconType === "settings"
			? settings
			: props.iconType === "registration"
			? registration
			: signIn,
	alt: `hamburger modal ${props.iconType} icon`,
}))<ButtonIcon>`
	${Snippets.square("20px")};
	margin-right: 20px;
`;

export const ModalButtonText = styled("span")`
	display: block;
	cursor: pointer;
`;
