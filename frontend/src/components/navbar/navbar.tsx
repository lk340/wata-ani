import * as React from "react";

import * as Context from "@/context";
import * as Components from "@/components";
import * as Icons from "@/icons/navbar";
import * as Animations from "@/utils/style/animations";
import * as Constants from "@/utils/style/constants";
import * as Colors from "@/utils/style/colors";

import * as Styled from "./navbar.styled";
import * as Springs from "./navbar.springs";

import logoJapanese from "@/images/logo/japanese.svg";

export const Navbar = () => {
	const { navbar } = Context.Navbar.useNavbarContext();
	const { authForm } = Context.AuthForm.useAuthFormContext();
	const { location } = Context.Location.useLocationContext();
	const { theme } = Context.Theme.useThemeContext();

	const animateNavbar = Springs.navbar(theme.state.mode);
	const animateLightModeIcon = Animations.opacity(theme.state.mode === "dark");
	const animateProfileIcon = Springs.profileIcon(theme.state.mode, !!authForm.state.user);
	const animateRegisterButton = Animations.background(
		theme.state.mode,
		Constants.theme.components.navbar.registerButton.light,
		Constants.theme.components.navbar.registerButton.dark,
	);

	React.useEffect(() => {
		if (theme.state.mode === "light") navbar.setters.setIconFill(Colors.LIGHT.seven);
		else navbar.setters.setIconFill(Colors.LIGHT.five);
	}, [theme.state.mode]);

	React.useEffect(() => {
		if (location.state.pathname === "/") navbar.setters.setHomeOn;
		else navbar.setters.setProfileOn();
	}, [location.state.pathname]);

	// const isUserDisplay = !!authForm.state.user ? "flex" : "none";
	const isUserDisplay = "flex";

	return (
		<Styled.Navbar style={animateNavbar}>
			<Styled.NavbarMaxWidth>
				{/* Logo Link */}
				<Styled.NavbarLink to="/" onClick={navbar.setters.setHomeOn}>
					<Styled.NavbarLogoIcon />
				</Styled.NavbarLink>

				{/* Links */}
				<Styled.NavbarLinks>
					{/* Home Link */}
					<Styled.NavbarLink to="/" onClick={navbar.setters.setHomeOn}>
						<Icons.HomeHollow
							width={Constants.size.components.navbar.icon}
							fill={navbar.state.iconFill}
							mode={theme.state.mode}
							state={navbar.state.home}
						/>
					</Styled.NavbarLink>

					{/* Like Button */}
					<Styled.NavbarModalButton
						onClick={navbar.setters.toggleLikes}
						display={isUserDisplay}
					>
						<Icons.LikeHollow
							width={Constants.size.components.navbar.icon}
							fill={navbar.state.iconFill}
							mode={theme.state.mode}
							state={navbar.state.likes}
						/>
					</Styled.NavbarModalButton>

					{/* Create Button */}
					<Styled.NavbarModalButton
						onClick={navbar.setters.toggleCreate}
						display={isUserDisplay}
					>
						<Icons.Create
							width={Constants.size.components.navbar.icon}
							fill={navbar.state.iconFill}
							mode={theme.state.mode}
							state={navbar.state.create}
						/>
					</Styled.NavbarModalButton>

					{/* Search Button */}
					<Styled.NavbarModalButton onClick={navbar.setters.toggleSearch}>
						<Icons.Search
							width={Constants.size.components.navbar.icon}
							fill={navbar.state.iconFill}
							mode={theme.state.mode}
							state={navbar.state.search}
						/>
					</Styled.NavbarModalButton>

					{/* Settings Button */}
					<Styled.NavbarModalButton
						onClick={navbar.setters.toggleSettings}
						display={isUserDisplay}
					>
						<Icons.SettingsHollow
							width={Constants.size.components.navbar.icon}
							fill={navbar.state.iconFill}
							mode={theme.state.mode}
							state={navbar.state.settings}
						/>
					</Styled.NavbarModalButton>

					{/* Profile Link */}
					<Styled.NavbarLink to="/profile" onClick={navbar.setters.setProfileOn}>
						<Styled.NavbarProfileIcon
							src={logoJapanese}
							display={isUserDisplay}
							style={animateProfileIcon}
						/>
					</Styled.NavbarLink>

					{/* Theme Button */}
					<Styled.NavbarThemeButton onClick={theme.setters.toggleMode}>
						<Styled.NavbarLightModeIcon style={animateLightModeIcon} />
						<Styled.NavbarDarkModeIcon />
					</Styled.NavbarThemeButton>

					{/* Sign In Link */}
					<Styled.NavbarSignInLink user={(!!authForm.state.user).toString()}>
						Sign In
					</Styled.NavbarSignInLink>

					{/* Register Link */}
					<Styled.NavbarRegisterLinkContainer
						user={(!!authForm.state.user).toString()}
						style={animateRegisterButton}
					>
						<Styled.NavbarRegisterLink>Register</Styled.NavbarRegisterLink>
					</Styled.NavbarRegisterLinkContainer>
				</Styled.NavbarLinks>

				<Components.Hamburger />
			</Styled.NavbarMaxWidth>
		</Styled.Navbar>
	);
};
