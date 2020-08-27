import * as React from "react";
import * as ReactRedux from "react-redux";

import * as Context from "@/context";
import * as Components from "@/components";
import * as Icons from "@/icons/navbar";
import * as Animations from "@/utils/style/animations";
import * as Constants from "@/utils/style/constants";

import logoJapanese from "@/images/logo/japanese.svg";

import * as Styled from "./options.styled";
import * as Springs from "./options.springs";

export const Options = () => {
	const { navbar } = Context.Navbar.useNavbarContext();
	const { theme } = Context.Theme.useThemeContext();

	const userId = ReactRedux.useSelector((state) => state.session.id);
	const isUser = !!userId;
	const displayWhenSignedIn = isUser;
	const displayWhenSignedOut = !isUser;

	const animateProfileIcon = Springs.profileIcon(isUser);
	const animateRegisterButton = Animations.background(
		Constants.theme.components.navbar.registerButton.light,
		Constants.theme.components.navbar.registerButton.dark,
	);

	return (
		<Styled.Options>
			{/* Home Link */}
			<Styled.Option to="/" onClick={navbar.setters.setHomeOn} display={"true"}>
				<Icons.HomeHollow
					width={`${Constants.size.components.navbar.icon}px`}
					fill={navbar.state.iconFill}
					mode={theme.state.mode}
					state={navbar.state.home}
				/>
			</Styled.Option>

			{/* Like Button */}
			<Styled.OptionModalButton
				onClick={navbar.setters.toggleLikes}
				display={displayWhenSignedIn.toString()}
			>
				<Icons.LikeHollow
					width={`${Constants.size.components.navbar.icon}px`}
					fill={navbar.state.iconFill}
					mode={theme.state.mode}
					state={navbar.state.likes}
				/>
			</Styled.OptionModalButton>

			{/* Create Button */}
			<Styled.OptionModalButton
				onClick={navbar.setters.toggleCreate}
				display={displayWhenSignedIn.toString()}
			>
				<Icons.Create
					width={`${Constants.size.components.navbar.icon}px`}
					fill={navbar.state.iconFill}
					mode={theme.state.mode}
					state={navbar.state.create}
				/>
			</Styled.OptionModalButton>

			{/* Search Button */}
			<Styled.OptionModalButton
				onClick={navbar.setters.toggleSearch}
				display={displayWhenSignedIn.toString()}
			>
				<Icons.Search
					width={`${Constants.size.components.navbar.icon}px`}
					fill={navbar.state.iconFill}
					mode={theme.state.mode}
					state={navbar.state.search}
				/>
			</Styled.OptionModalButton>

			{/* Settings Button */}
			<Styled.OptionModalButton
				onClick={navbar.setters.toggleSettings}
				display={displayWhenSignedIn.toString()}
			>
				<Icons.SettingsHollow
					width={`${Constants.size.components.navbar.icon}px`}
					fill={navbar.state.iconFill}
					mode={theme.state.mode}
					state={navbar.state.settings}
				/>
			</Styled.OptionModalButton>

			{/* Profile Link */}
			<Styled.Option
				to="/profile"
				onClick={navbar.setters.setProfileOn}
				display={displayWhenSignedIn.toString()}
			>
				<Styled.OptionProfileIcon src={logoJapanese} style={animateProfileIcon} />
			</Styled.Option>

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
