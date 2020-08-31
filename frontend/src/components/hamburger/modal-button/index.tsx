import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./modal-button.styled";

import { OptionProps } from "../modal-options";

type Props = {
	buttonType: "search" | "settings";
	test_id: string;
} & OptionProps;

export const ModalButton = (props: Props) => {
	const { iconType, text, display, buttonType, test_id } = props;

	const { navbar } = Context.Navbar.useNavbarContext();

	return (
		<Styled.ModalButton display={display.toString()} test_id={test_id}>
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
