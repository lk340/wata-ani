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
			<ModalLink iconType="home" text="Home" display={true} to="/" primary={false} />

			{/* Search */}
			<ModalButton
				iconType="search"
				text="Search"
				display={displayWhenSignedIn}
				buttonType="search"
			/>

			{/* Sign In */}
			<ModalLink
				iconType="sign in"
				text="Sign In"
				display={displayWhenSignedOut}
				to="/sign-in"
				primary={false}
			/>

			{/* Sign Out */}
			<ModalSignOutButton
				iconType="sign in"
				text="Sign Out"
				display={displayWhenSignedIn}
			/>

			{/* Registration */}
			<ModalLink
				iconType="registration"
				text="Register"
				display={displayWhenSignedOut}
				to="/registration"
				primary={true}
			/>

			{/* Settings */}
			<ModalButton
				iconType="settings"
				text="Settings"
				display={displayWhenSignedIn}
				buttonType="settings"
			/>
		</Styled.ModalOptions>
	);
};
