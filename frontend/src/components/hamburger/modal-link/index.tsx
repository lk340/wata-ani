import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./modal-link.styled";
import { OptionProps } from "../modal-options";

type Props = {
	to: string;
	primary: boolean;
} & OptionProps;

export const ModalLink = (props: Props) => {
	const { iconType, text, display, to, primary } = props;

	const { navbar } = Context.Navbar.useNavbarContext();

	return (
		<Styled.ModalLink display={display.toString()}>
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
