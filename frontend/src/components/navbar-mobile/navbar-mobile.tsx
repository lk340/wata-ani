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
	const { theme } = Context.Theme.useThemeContext();

	React.useEffect(() => {
		if (theme.state.mode === "light") navbar.setters.setFill(Colors.LIGHT.seven);
		else navbar.setters.setFill(Colors.LIGHT.five);
	}, [theme.state.mode]);

	const animateNavbarMobile = Springs.navbarMobile(theme.state.mode);

	return (
		<Styled.NavbarMobile style={animateNavbarMobile}>
			{/* Home */}
			<OptionLink
				to="/"
				mode={theme.state.mode}
				icon={
					<Icons.HomeHollow
						width={Constants.size.components.navbarMobile.icon}
						fill={navbar.state.iconFill}
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
					/>
				}
				text="Likes"
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
					/>
				}
				text="Create"
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
					/>
				}
				text="Search"
			/>
			<Components.Spacer width="40px" />

			{/* Profile */}
			<OptionLink
				to="/profile"
				mode={theme.state.mode}
				icon={
					<Icons.HomeHollow
						width={Constants.size.components.navbarMobile.icon}
						fill={navbar.state.iconFill}
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
	mode: Context.Theme.Mode;
	icon: React.ReactNode;
	text: string;
};

type OptionLinkProps = {
	to: string;
} & OptionProps;

const OptionLink = (props: OptionLinkProps) => {
	const { icon, text, mode, to } = props;

	const animateOptionText = Springs.optionText(mode);

	return (
		<Styled.NavbarMobileOptionLink to={to}>
			<Styled.NavbarMobileOptionIcon>{icon}</Styled.NavbarMobileOptionIcon>
			<Styled.NavbarMobileOptionText style={animateOptionText}>
				{text}
			</Styled.NavbarMobileOptionText>
		</Styled.NavbarMobileOptionLink>
	);
};

type OptionButtonProps = {
	onClick: React.MouseEventHandler;
} & OptionProps;

const OptionButton = (props: OptionButtonProps) => {
	const { icon, text, mode, onClick } = props;

	const animateOptionText = Springs.optionText(mode);

	return (
		<Styled.NavbarMobileOptionButton onClick={onClick}>
			<Styled.NavbarMobileOptionIcon>{icon}</Styled.NavbarMobileOptionIcon>
			<Styled.NavbarMobileOptionText style={animateOptionText}>
				{text}
			</Styled.NavbarMobileOptionText>
		</Styled.NavbarMobileOptionButton>
	);
};
