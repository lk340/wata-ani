import * as React from "react";

import * as Context from "@/context";
import * as Components from "@/components";
import * as Icons from "@/icons/navbar";
import * as Animations from "@/utils/style/animations";
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
			<Option
				icon={
					<Icons.HomeHollow
						width={Constants.size.components.navbarMobile.icon}
						fill={navbar.state.iconFill}
					/>
				}
				text="Home"
				mode={theme.state.mode}
			/>
			<Components.Spacer width="40px" />

			{/* Likes */}
			<Option
				icon={
					<Icons.HomeHollow
						width={Constants.size.components.navbarMobile.icon}
						fill={navbar.state.iconFill}
					/>
				}
				text="Likes"
				mode={theme.state.mode}
			/>
			<Components.Spacer width="40px" />

			{/* Create */}
			<Option
				icon={
					<Icons.HomeHollow
						width={Constants.size.components.navbarMobile.icon}
						fill={navbar.state.iconFill}
					/>
				}
				text="Create"
				mode={theme.state.mode}
			/>
			<Components.Spacer width="40px" />

			{/* Search */}
			<Option
				icon={
					<Icons.HomeHollow
						width={Constants.size.components.navbarMobile.icon}
						fill={navbar.state.iconFill}
					/>
				}
				text="Search"
				mode={theme.state.mode}
			/>
			<Components.Spacer width="40px" />

			{/* Profile */}
			<Option
				icon={
					<Icons.HomeHollow
						width={Constants.size.components.navbarMobile.icon}
						fill={navbar.state.iconFill}
					/>
				}
				text="Profile"
				mode={theme.state.mode}
			/>
		</Styled.NavbarMobile>
	);
};

// ====================== //
// ↓↓↓ Option Content ↓↓↓ //
// ====================== //

type OptionProps = {
	icon: React.ReactNode;
	text: string;
	mode: Context.Theme.Mode;
};

const Option = (props: OptionProps) => {
	const { icon, text, mode } = props;

	const animateOptionText = Springs.optionText(mode);

	return (
		<Styled.NavbarMobileOption>
			<Styled.NavbarMobileOptionIcon>{icon}</Styled.NavbarMobileOptionIcon>
			<Styled.NavbarMobileOptionText style={animateOptionText}>
				{text}
			</Styled.NavbarMobileOptionText>
		</Styled.NavbarMobileOption>
	);
};
