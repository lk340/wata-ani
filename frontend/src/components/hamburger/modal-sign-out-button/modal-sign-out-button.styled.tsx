import styled from "styled-components";

import * as Snippets from "@/utils/style/snippets";

import home from "@/icons/mobile-modal/home.svg";
import search from "@/icons/mobile-modal/search.svg";
import settings from "@/icons/mobile-modal/settings.svg";
import registration from "@/icons/mobile-modal/registration.svg";
import signIn from "@/icons/mobile-modal/sign-in.svg";

// ============================= //
// ↓↓↓ Modal Sign Out Button ↓↓↓ //
// ============================= //

type Option = { display: string };

export const ModalSignOutButton = styled("div")<Option>`
	display: ${(props) => (props.display === "true" ? "flex" : "none")};
`;

export type OptionIcon = {
	iconType: "home" | "search" | "settings" | "sign in" | "registration";
};

export const ModalSignOutButtonIcon = styled("img").attrs((props: OptionIcon) => ({
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
}))<OptionIcon>`
	${Snippets.square("20px")};
	margin-right: 20px;
`;

export const ModalSignOutButtonText = styled("span")`
	display: block;
	cursor: pointer;
`;
