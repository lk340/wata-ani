import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./modal-link.styled";

import { OptionProps } from "../modal-options";

type Props = {
	to: string;
	primary: boolean;
	test_id: string;
} & OptionProps;

export const ModalLink = (props: Props) => {
	const { iconType, text, display, to, primary, test_id } = props;

	const { navbar } = Context.Navbar.useNavbarContext();

	return (
		<Styled.ModalLink display={display.toString()} test_id={test_id}>
			<Styled.ModalLinkIcon iconType={iconType} />
			<Styled.ModalLinkText
				to={to}
				onClick={navbar.setters.toggleHamburgerOpen}
				primary={primary.toString()}
			>
				{text}
			</Styled.ModalLinkText>
		</Styled.ModalLink>
	);
};
