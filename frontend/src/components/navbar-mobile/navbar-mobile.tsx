import * as React from "react";

import * as Context from "@/context";
import * as Components from "@/components";
import * as Icons from "@/icons/navbar";
import * as Constants from "@/utils/style/constants";
import * as Colors from "@/utils/style/colors";

import * as Styled from "./navbar-mobile.styled";
import * as Springs from "./navbar-mobile.springs";

export const NavbarMobile = () => {
	const { navbar } = Context.Navbar.useNavbarContext();
	const { location } = Context.Location.useLocationContext();
	const { theme } = Context.Theme.useThemeContext();

	React.useEffect(() => {
		if (theme.state.mode === "light") navbar.setters.setFill(Colors.LIGHT.seven);
		else navbar.setters.setFill(Colors.LIGHT.five);
	}, [theme.state.mode]);

	React.useEffect(() => {
		if (location.state.pathname === "/") navbar.setters.setNavbar({ home: true });
		else navbar.setters.setNavbar({ home: false });
	}, [location.state.pathname]);

	const animateNavbarMobile = Springs.navbarMobile(theme.state.mode);

	return (
		<Styled.NavbarMobile style={animateNavbarMobile}>
			{/* Home */}
			<OptionLink
				to="/"
				onClick={navbar.setters.toggleHome}
				state={navbar.state.home}
				mode={theme.state.mode}
				icon={
					<Icons.HomeHollow
						width={Constants.size.components.navbarMobile.icon}
						fill={navbar.state.iconFill}
						mode={theme.state.mode}
						state={navbar.state.home}
					/>
				}
				text="Home"
			/>
			<Components.Spacer width="40px" />

			{/* Likes */}
			<OptionButton
				onClick={navbar.setters.toggleLikes}
				mode={theme.state.mode}
				icon={
					<Icons.LikeHollow
						width={Constants.size.components.navbarMobile.icon}
						fill={navbar.state.iconFill}
						mode={theme.state.mode}
						state={navbar.state.likes}
					/>
				}
				text="Likes"
				state={navbar.state.likes}
			/>
			<Components.Spacer width="40px" />

			{/* Create */}
			<OptionButton
				onClick={navbar.setters.toggleCreate}
				mode={theme.state.mode}
				icon={
					<Icons.Create
						width={Constants.size.components.navbarMobile.icon}
						fill={navbar.state.iconFill}
						mode={theme.state.mode}
						state={navbar.state.create}
					/>
				}
				text="Create"
				state={navbar.state.create}
			/>
			<Components.Spacer width="40px" />

			{/* Search */}
			<OptionButton
				onClick={navbar.setters.toggleSearch}
				mode={theme.state.mode}
				icon={
					<Icons.Search
						width={Constants.size.components.navbarMobile.icon}
						fill={navbar.state.iconFill}
						mode={theme.state.mode}
						state={navbar.state.search}
					/>
				}
				text="Search"
				state={navbar.state.search}
			/>
			<Components.Spacer width="40px" />

			{/* Profile */}
			<OptionLink
				to="/"
				onClick={navbar.setters.toggleHome}
				state={navbar.state.home}
				mode={theme.state.mode}
				icon={
					<Icons.HomeHollow
						width={Constants.size.components.navbarMobile.icon}
						fill={navbar.state.iconFill}
						mode={theme.state.mode}
						state={navbar.state.home}
					/>
				}
				text="Profile"
			/>
		</Styled.NavbarMobile>
	);
};

// ====================== //
// ↓↓↓ Option Content ↓↓↓ //
// ====================== //

type OptionProps = {
	state: boolean;
	mode: Context.Theme.Mode;
	icon: React.ReactNode;
	text: string;
	onClick: React.MouseEventHandler;
};

// --- Option Link --- //

type OptionLinkProps = { to: string } & OptionProps;

const OptionLink = (props: OptionLinkProps) => {
	const { state, icon, text, mode, to, onClick } = props;

	const animateOptionText = Springs.optionIconText(mode, state);

	return (
		<Styled.NavbarMobileOptionLink to={to} onClick={onClick}>
			<Styled.NavbarMobileOptionIcon>{icon}</Styled.NavbarMobileOptionIcon>
			<Styled.NavbarMobileOptionText style={animateOptionText}>
				{text}
			</Styled.NavbarMobileOptionText>
		</Styled.NavbarMobileOptionLink>
	);
};

// --- Option Button --- //

const OptionButton = (props: OptionProps) => {
	const { state, icon, text, mode, onClick } = props;

	const animateOptionText = Springs.optionIconText(mode, state);

	return (
		<Styled.NavbarMobileOptionButton onClick={onClick}>
			<Styled.NavbarMobileOptionIcon>{icon}</Styled.NavbarMobileOptionIcon>
			<Styled.NavbarMobileOptionText style={animateOptionText}>
				{text}
			</Styled.NavbarMobileOptionText>
		</Styled.NavbarMobileOptionButton>
	);
};
