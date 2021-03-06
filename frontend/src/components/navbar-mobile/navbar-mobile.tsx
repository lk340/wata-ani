import * as React from "react";

import * as Context from "@/context";
import * as Components from "@/components";
import * as Icons from "@/icons/navbar";
import * as Functions from "@/utils/functions";
import * as Constants from "@/utils/style/constants";

import * as Styled from "./navbar-mobile.styled";
import * as Springs from "./navbar-mobile.springs";

import { OptionLink } from "./option-link";
import { OptionButton } from "./option-button";

export type OptionProps = {
	state: boolean;
	icon: React.ReactNode;
	text: string;
	onClick: React.MouseEventHandler;
};

export const NavbarMobile = () => {
	const { navbar } = Context.Navbar.useNavbarContext();
	const { theme } = Context.Theme.useThemeContext();

	const animateNavbarMobile = Springs.navbarMobile();

	const isNavbarOptionOpen =
		navbar.state.create || navbar.state.search || navbar.state.settings;

	// --- Fetching Redux State --- //
	const currentUser = Functions.getSession();
	const currentUserUsername = currentUser.username;

	return (
		<Styled.NavbarMobile display={true.toString()} style={animateNavbarMobile}>
			{/* <Styled.NavbarMobileGlobalStyles option_open={isNavbarOptionOpen.toString()} /> */}

			{/* Home */}
			<OptionLink
				to="/"
				onClick={navbar.setters.setHomeOn}
				state={navbar.state.home}
				icon={
					<Icons.HomeHollow
						width={`${Constants.size.components.navbarMobile.icon}px`}
						fill={navbar.state.iconFill}
						mode={theme.state.mode}
						state={navbar.state.home}
					/>
				}
				text="Home"
				test_id="home"
			/>
			<Components.Spacer width="40px" />

			{/* Likes */}
			{/* <OptionButton
				onClick={navbar.setters.toggleLikes}
				icon={
					<Icons.LikeHollow
						width={`${Constants.size.components.navbarMobile.icon}px`}
						fill={navbar.state.iconFill}
						mode={theme.state.mode}
						state={navbar.state.likes}
					/>
				}
				text="Likes"
				state={navbar.state.likes}
				test_id="likes"
			/>
			<Components.Spacer width="40px" /> */}

			{/* Create */}
			<OptionButton
				onClick={navbar.setters.toggleCreate}
				icon={
					<Icons.Create
						width={`${Constants.size.components.navbarMobile.icon}px`}
						fill={navbar.state.iconFill}
						mode={theme.state.mode}
						state={navbar.state.create}
					/>
				}
				text="Create"
				state={navbar.state.create}
				test_id="create"
			/>
			<Components.Spacer width="40px" />

			{/* Settings */}
			<OptionButton
				onClick={navbar.setters.toggleSettings}
				icon={
					<Icons.SettingsHollow
						width={`${Constants.size.components.navbarMobile.icon}px`}
						fill={navbar.state.iconFill}
						mode={theme.state.mode}
						state={navbar.state.settings}
					/>
				}
				text="Settings"
				state={navbar.state.settings}
				test_id="Settings"
			/>
			<Components.Spacer width="40px" />

			{/* Search */}
			{/* <OptionButton
				onClick={navbar.setters.toggleSearch}
				icon={
					<Icons.Search
						width={`${Constants.size.components.navbarMobile.icon}px`}
						fill={navbar.state.iconFill}
						mode={theme.state.mode}
						state={navbar.state.search}
					/>
				}
				text="Search"
				state={navbar.state.search}
				test_id="search"
			/>
			<Components.Spacer width="40px" /> */}

			{/* Profile */}
			<OptionLink
				to={`/profile/?username=${currentUserUsername}`}
				onClick={navbar.setters.setProfileOn}
				state={navbar.state.profile}
				icon={<Styled.NavbarMobileProfileLinkIcon />}
				text="Profile"
				test_id="profile"
			/>
		</Styled.NavbarMobile>
	);
};
