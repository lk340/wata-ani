import * as React from "react";
import * as ReactRedux from "react-redux";
import * as Gatsby from "gatsby";

import * as Context from "@/context";
import * as Actions from "@/redux/actions";

import * as Styled from "./modal-sign-out-button.styled";

type Props = {
	text: string;
	display: boolean;
	test_id: string;
};

export const ModalSignOutButton = (props: Props) => {
	const { text, display, test_id } = props;

	const { navbar } = Context.Navbar.useNavbarContext();

	const dispatch = ReactRedux.useDispatch();

	function handleClick(): void {
		Actions.Session.signOut(dispatch);
		navbar.setters.toggleHamburgerOpen();
		Gatsby.navigate("/");
	}

	return (
		<Styled.ModalSignOutButton display={display.toString()} test_id={test_id}>
			<Styled.ModalSignOutButtonIcon />
			<Styled.ModalSignOutButtonText onClick={handleClick}>
				{text}
			</Styled.ModalSignOutButtonText>
		</Styled.ModalSignOutButton>
	);
};
