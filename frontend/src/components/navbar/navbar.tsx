import * as React from "react";

import * as Context from "@/context";
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
	const { theme } = Context.Theme.useThemeContext();

	const animateNavbar = Springs.navbar(theme.state.mode);

	const [fill, setFill] = React.useState("");

	React.useEffect(() => {
		if (theme.state.mode === "light") setFill(Colors.LIGHT.seven);
		else setFill(Colors.LIGHT.five);
	}, [theme.state.mode]);

	const isUser = !!authForm.state.user ? "flex" : "none";

	return (
		<Styled.Navbar style={animateNavbar}>
			<Styled.NavbarMaxWidth>
				{/* Logo Link */}
				<Styled.NavbarLink to="/">
					<Styled.NavbarLogoIcon />
				</Styled.NavbarLink>

				{/* Links */}
				<Styled.NavbarLinks>
					{/* Home Link */}
					<Styled.NavbarLink to="/">
						<Icons.HomeHollow width={Constants.size.components.navbar.icon} fill={fill} />
					</Styled.NavbarLink>

					{/* Like Button */}
					<Styled.NavbarModalButton onClick={navbar.setters.toggleLikes} display={isUser}>
						<Icons.LikeHollow width={Constants.size.components.navbar.icon} fill={fill} />
					</Styled.NavbarModalButton>

					{/* Create Button */}
					<Styled.NavbarModalButton
						onClick={navbar.setters.toggleCreate}
						display={isUser}
					>
						<Icons.Plus width={Constants.size.components.navbar.icon} fill={fill} />
					</Styled.NavbarModalButton>

					{/* Search Button */}
					<Styled.NavbarModalButton onClick={navbar.setters.toggleSearch}>
						<Icons.Search width={Constants.size.components.navbar.icon} fill={fill} />
					</Styled.NavbarModalButton>

					{/* Settings Button */}
					<Styled.NavbarModalButton
						onClick={navbar.setters.toggleSettings}
						display={isUser}
					>
						<Icons.SettingsHollow
							width={Constants.size.components.navbar.icon}
							fill={fill}
						/>
					</Styled.NavbarModalButton>

					{/* Profile Link */}
					<Styled.NavbarLink to="/">
						<Styled.NavbarProfileIcon src={logoJapanese} display={isUser} />
					</Styled.NavbarLink>

					{/* Theme Button */}
					<Styled.NavbarThemeButton onClick={theme.setters.toggleMode}>
						<Styled.NavbarLightModeIcon mode={theme.state.mode} />
						<Styled.NavbarDarkModeIcon mode={theme.state.mode} />
					</Styled.NavbarThemeButton>

					{/* Sign In Link */}
					<Styled.NavbarSignInLink user={(!!authForm.state.user).toString()}>
						Sign In
					</Styled.NavbarSignInLink>

					{/* Register Link */}
					<Styled.NavbarRegisterLink user={(!!authForm.state.user).toString()}>
						Register
					</Styled.NavbarRegisterLink>
				</Styled.NavbarLinks>
			</Styled.NavbarMaxWidth>
		</Styled.Navbar>
	);
};
