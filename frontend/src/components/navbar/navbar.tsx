import * as React from "react";

import * as Context from "@/context";
import * as Components from "@/components";
import * as Colors from "@/utils/style/colors";

import * as Styled from "./navbar.styled";
import * as Springs from "./navbar.springs";

import { Options } from "./options";

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

	const animateNavbar = Springs.navbar();

	return (
		<Styled.Navbar style={animateNavbar}>
			<Styled.NavbarGlobalStyles hamburger_open={navbar.state.hamburgerOpen.toString()} />

			<Styled.NavbarMaxWidth>
				{/* Logo Link */}
				<Styled.NavbarOption to="/" onClick={navbar.setters.setHomeOn}>
					<Styled.NavbarLogoIcon />
				</Styled.NavbarOption>

				<Styled.NavbarOptionComponents>
					<Components.Create />
					<Components.Settings />
				</Styled.NavbarOptionComponents>

				<Options />

				<Components.Hamburger />
			</Styled.NavbarMaxWidth>
		</Styled.Navbar>
	);
};
