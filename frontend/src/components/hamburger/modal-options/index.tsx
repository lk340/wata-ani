import * as React from "react";
import * as ReactRedux from "react-redux";

import * as Styled from "./modal-options.styled";

import { ModalButton } from "../modal-button";
import { ModalLink } from "../modal-link";
import { ModalSignOutButton } from "../modal-sign-out-button";

export type OptionProps = {
	iconType: "home" | "search" | "settings" | "sign in" | "registration";
	text: string;
	display: boolean;
};

export const ModalOptions = () => {
	const userId = ReactRedux.useSelector((state) => state.session.id);
	const isUser = !!userId;
	const displayWhenSignedIn = isUser;
	const displayWhenSignedOut = !isUser;

	return (
		<Styled.ModalOptions>
			{/* Home */}
			<ModalLink
				iconType="home"
				text="Home"
				display={true}
				to="/"
				primary={false}
				test_id="home"
			/>

			{/* Search */}
			<ModalButton
				iconType="search"
				text="Search"
				display={displayWhenSignedIn}
				buttonType="search"
				test_id="search"
			/>

			{/* Sign In */}
			<ModalLink
				iconType="sign in"
				text="Sign In"
				display={displayWhenSignedOut}
				to="/sign-in"
				primary={false}
				test_id="sign in"
			/>

			{/* Sign Out */}
			<ModalSignOutButton
				text="Sign Out"
				display={displayWhenSignedIn}
				test_id="sign out"
			/>

			{/* Registration */}
			<ModalLink
				iconType="registration"
				text="Register"
				display={displayWhenSignedOut}
				to="/registration"
				primary={true}
				test_id="registration"
			/>

			{/* Settings */}
			<ModalButton
				iconType="settings"
				text="Settings"
				display={displayWhenSignedIn}
				buttonType="settings"
				test_id="settings"
			/>
		</Styled.ModalOptions>
	);
};
