import styled from "styled-components";

import * as Snippets from "@/utils/style/snippets";

import signOut from "@/icons/mobile-modal/sign-out.svg";

// ============================= //
// ↓↓↓ Modal Sign Out Button ↓↓↓ //
// ============================= //

type Option = { display: string };

export const ModalSignOutButton = styled("div")<Option>`
	display: ${(props) => (props.display === "true" ? "flex" : "none")};
`;

export const ModalSignOutButtonIcon = styled("img").attrs(() => ({
	src: signOut,
	alt: `hamburger modal sign out icon`,
}))`
	${Snippets.square("20px")};
	margin-right: 20px;
`;

export const ModalSignOutButtonText = styled("span")`
	display: block;
	cursor: pointer;
`;
