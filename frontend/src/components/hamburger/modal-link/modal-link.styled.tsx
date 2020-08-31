import styled from "styled-components";
import * as Gatsby from "gatsby";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

import home from "@/icons/mobile-modal/home.svg";
import search from "@/icons/mobile-modal/search.svg";
import settings from "@/icons/mobile-modal/settings.svg";
import registration from "@/icons/mobile-modal/registration.svg";
import signIn from "@/icons/mobile-modal/sign-in.svg";

// ================== //
// ↓↓↓ Modal Link ↓↓↓ //
// ================== //

type Link = {
	display: string;
	test_id: string;
};

export const ModalLink = styled("div").attrs((props: Link) => ({
	"data-testid": `hamburger component ${props.test_id} link`,
}))<Link>`
	display: ${(props) => (props.display === "true" ? "flex" : "none")};
`;

export type LinkIcon = {
	iconType: "home" | "search" | "settings" | "registration" | "sign in";
};

export const ModalLinkIcon = styled("img").attrs((props: LinkIcon) => ({
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
}))<LinkIcon>`
	${Snippets.square("20px")};
	margin-right: 20px;
`;

type LinkText = { primary: string };

export const ModalLinkText = styled(Gatsby.Link)<LinkText>`
	${Snippets.clearAnchor()};
	color: ${(props) => (props.primary === "true" ? Colors.PRIMARY_100 : "inherit")};
	font-size: ${Constants.fontSizes.components.hamburger.link};
`;
