import * as React from "react";
import * as ReactRedux from "react-redux";

import * as Context from "@/context";
import * as Actions from "@/redux/actions";

import * as Styled from "./modal-sign-out-button.styled";

import { OptionProps } from "../modal-options";

export const ModalSignOutButton = (props: OptionProps) => {
	const { iconType, text, display } = props;

	const { navbar } = Context.Navbar.useNavbarContext();

	const dispatch = ReactRedux.useDispatch();

	function handleClick(): void {
		Actions.Session.signOut(dispatch);
		navbar.setters.toggleHamburgerOpen();
	}

	return (
		<Styled.ModalSignOutButton display={display.toString()}>
			<Styled.ModalSignOutButtonIcon iconType={iconType} />
			<Styled.ModalSignOutButtonText onClick={handleClick}>
				{text}
			</Styled.ModalSignOutButtonText>
		</Styled.ModalSignOutButton>
	);
};
