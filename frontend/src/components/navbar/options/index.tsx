import * as React from "react";

import * as Context from "@/context";
import * as Components from "@/components";
import * as Icons from "@/icons/navbar";
import * as Functions from "@/utils/functions";
import * as Animations from "@/utils/style/animations";
import * as Constants from "@/utils/style/constants";

import logoJapanese from "@/images/logo/japanese.svg";

import * as Styled from "./options.styled";
import * as Springs from "./options.springs";

export const Options = () => {
	const { navbar } = Context.Navbar.useNavbarContext();
	const { theme } = Context.Theme.useThemeContext();

	const userId = Functions.getSession().id;
	const isUser = !!userId;
	const displayWhenSignedIn = isUser;
	const displayWhenSignedOut = !isUser;

	const animateProfileIcon = Springs.profileIcon();
	const animateRegisterButton = Animations.background(
		Constants.theme.components.navbar.registerButton.light,
		Constants.theme.components.navbar.registerButton.dark,
	);

	// --- Fetching Redux State --- //
	const currentUser = Functions.getSession();
	const currentUserUsername = currentUser.username;

	return (
		<Styled.Options>
			{/* Home Link */}
			<Styled.OptionLink
				to="/"
				onClick={navbar.setters.setHomeOn}
				display={"true"}
				test_id="home"
			>
				<Icons.HomeHollow
					width={`${Constants.size.components.navbar.icon}px`}
					fill={navbar.state.iconFill}
					mode={theme.state.mode}
					state={navbar.state.home}
				/>
			</Styled.OptionLink>

			{/* Like Button */}
			{/* <Styled.OptionButton
				onClick={navbar.setters.toggleLikes}
				display={displayWhenSignedIn.toString()}
				test_id="like"
			>
				<Icons.LikeHollow
					width={`${Constants.size.components.navbar.icon}px`}
					fill={navbar.state.iconFill}
					mode={theme.state.mode}
					state={navbar.state.likes}
				/>
			</Styled.OptionButton> */}

			{/* Create Button */}
			<Styled.OptionButton
				onClick={navbar.setters.toggleCreate}
				display={displayWhenSignedIn.toString()}
				test_id="create"
			>
				<Icons.Create
					width={`${Constants.size.components.navbar.icon}px`}
					fill={navbar.state.iconFill}
					mode={theme.state.mode}
					state={navbar.state.create}
				/>
			</Styled.OptionButton>

			{/* Search Button */}
			{/* <Styled.OptionButton
				onClick={navbar.setters.toggleSearch}
				display={displayWhenSignedIn.toString()}
				test_id="search"
			>
				<Icons.Search
					width={`${Constants.size.components.navbar.icon}px`}
					fill={navbar.state.iconFill}
					mode={theme.state.mode}
					state={navbar.state.search}
				/>
			</Styled.OptionButton> */}

			{/* Settings Button */}
			<Styled.OptionButton
				onClick={navbar.setters.toggleSettings}
				display={displayWhenSignedIn.toString()}
				test_id="settings"
			>
				<Icons.SettingsHollow
					width={`${Constants.size.components.navbar.icon}px`}
					fill={navbar.state.iconFill}
					mode={theme.state.mode}
					state={navbar.state.settings}
				/>
			</Styled.OptionButton>

			{/* Profile Link */}
			<Styled.OptionLink
				to={`/profile/?username=${currentUserUsername}`}
				onClick={navbar.setters.setProfileOn}
				display={displayWhenSignedIn.toString()}
				test_id="profile"
			>
				<Styled.OptionProfileIcon src={logoJapanese} style={animateProfileIcon} />
			</Styled.OptionLink>

			{/* Theme Button */}
			<Components.ThemeButton />

			{/* Sign In Link */}
			<Styled.OptionSignInLink display={displayWhenSignedOut.toString()}>
				Sign In
			</Styled.OptionSignInLink>

			{/* Register Link */}
			<Styled.OptionRegisterLinkContainer
				display={displayWhenSignedOut.toString()}
				style={animateRegisterButton}
			>
				<Styled.OptionRegisterLink>Register</Styled.OptionRegisterLink>
			</Styled.OptionRegisterLinkContainer>
		</Styled.Options>
	);
};
