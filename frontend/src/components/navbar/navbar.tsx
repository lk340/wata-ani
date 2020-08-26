import * as React from "react";
import * as ReactRedux from "react-redux";

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
	const { location } = Context.Location.useLocationContext();
	const { theme } = Context.Theme.useThemeContext();

	React.useEffect(() => {
		if (theme.state.mode === "light") navbar.setters.setIconFill(Colors.LIGHT.seven);
		else navbar.setters.setIconFill(Colors.LIGHT.five);
	}, [theme.state.mode]);

	React.useEffect(() => {
		if (location.state.pathname === "/") navbar.setters.setHomeOn();
		else if (location.state.pathname === "/profile") navbar.setters.setProfileOn();
	}, [location.state.pathname]);

	const userId = ReactRedux.useSelector((state) => state.session.id);
	const isUser = !!userId;
	const displayWhenSignedIn = isUser;
	const displayWhenSignedOut = !isUser;

	const animateNavbar = Springs.navbar();
	const animateProfileIcon = Springs.profileIcon(isUser);
	const animateRegisterButton = Animations.background(
		Constants.theme.components.navbar.registerButton.light,
		Constants.theme.components.navbar.registerButton.dark,
	);

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
							width={`${Constants.size.components.navbar.icon}px`}
							fill={navbar.state.iconFill}
							mode={theme.state.mode}
							state={navbar.state.home}
						/>
					</Styled.NavbarLink>

					{/* Like Button */}
					<Styled.NavbarModalButton
						onClick={navbar.setters.toggleLikes}
						display={displayWhenSignedIn.toString()}
					>
						<Icons.LikeHollow
							width={`${Constants.size.components.navbar.icon}px`}
							fill={navbar.state.iconFill}
							mode={theme.state.mode}
							state={navbar.state.likes}
						/>
					</Styled.NavbarModalButton>

					{/* Create Button */}
					<Styled.NavbarModalButton
						onClick={navbar.setters.toggleCreate}
						display={displayWhenSignedIn.toString()}
					>
						<Icons.Create
							width={`${Constants.size.components.navbar.icon}px`}
							fill={navbar.state.iconFill}
							mode={theme.state.mode}
							state={navbar.state.create}
						/>
					</Styled.NavbarModalButton>

					{/* Search Button */}
					<Styled.NavbarModalButton
						onClick={navbar.setters.toggleSearch}
						display={displayWhenSignedIn.toString()}
					>
						<Icons.Search
							width={`${Constants.size.components.navbar.icon}px`}
							fill={navbar.state.iconFill}
							mode={theme.state.mode}
							state={navbar.state.search}
						/>
					</Styled.NavbarModalButton>

					{/* Settings Button */}
					<Styled.NavbarModalButton
						onClick={navbar.setters.toggleSettings}
						display={displayWhenSignedIn.toString()}
					>
						<Icons.SettingsHollow
							width={`${Constants.size.components.navbar.icon}px`}
							fill={navbar.state.iconFill}
							mode={theme.state.mode}
							state={navbar.state.settings}
						/>
					</Styled.NavbarModalButton>

					{/* Profile Link */}
					<Styled.NavbarLink to="/profile" onClick={navbar.setters.setProfileOn}>
						<Styled.NavbarProfileIcon
							src={logoJapanese}
							display={displayWhenSignedIn.toString()}
							style={animateProfileIcon}
						/>
					</Styled.NavbarLink>

					{/* Theme Button */}
					<Components.ThemeButton />

					{/* Sign In Link */}
					<Styled.NavbarSignInLink display={displayWhenSignedOut.toString()}>
						Sign In
					</Styled.NavbarSignInLink>

					{/* Register Link */}
					<Styled.NavbarRegisterLinkContainer
						display={displayWhenSignedOut.toString()}
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
