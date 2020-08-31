import styled from "styled-components";

import * as Snippets from "@/utils/style/snippets";

import signOut from "@/icons/mobile-modal/sign-out.svg";

// ============================= //
// ↓↓↓ Modal Sign Out Button ↓↓↓ //
// ============================= //

type Button = {
	display: string;
	test_id: string;
};

export const ModalSignOutButton = styled("div").attrs((props: Button) => ({
	"data-testid": `hamburger component ${props.test_id} button`,
}))<Button>`
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
