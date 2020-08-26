import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./modal-button.styled";
import { OptionProps } from "../modal-options";

type Props = {
	buttonType: "search" | "settings";
} & OptionProps;

export const ModalButton = (props: Props) => {
	const { iconType, text, display, buttonType } = props;

	const { navbar } = Context.Navbar.useNavbarContext();

	return (
		<Styled.ModalButton display={display.toString()}>
			<Styled.ModalButtonIcon iconType={iconType} />
			<Styled.ModalButtonText
				onClick={
					buttonType === "search"
						? navbar.setters.toggleSearch
						: navbar.setters.toggleSettings
				}
			>
				{text}
			</Styled.ModalButtonText>
		</Styled.ModalButton>
	);
};
