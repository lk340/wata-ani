import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./hamburger.styled";
import * as Springs from "./hamburger.springs";

export const Hamburger = () => {
	const { navbar } = Context.Navbar.useNavbarContext();
	const { theme } = Context.Theme.useThemeContext();

	// --- Line Animations --- //
	const animateLineTop = Springs.lineTop(navbar.state.hamburgerOpen);
	const animateLineMiddleOne = Springs.lineMiddle(navbar.state.hamburgerOpen, 45);
	const animateLineMiddleTwo = Springs.lineMiddle(navbar.state.hamburgerOpen, -45);
	const animateLineBottom = Springs.lineBottom(navbar.state.hamburgerOpen);

	// --- Modal Animations --- //
	const animateModal = Springs.modal(navbar.state.hamburgerOpen);
	const animateModalMain = Springs.modalMain(
		navbar.state.hamburgerOpen,
		theme.state.mode,
	);

	return (
		<Styled.Hamburger>
			{/* Lines */}
			<Styled.HamburgerLines onClick={navbar.setters.toggleHamburgerOpen}>
				<Styled.HamburgerLinesLine style={animateLineTop} />
				<Styled.HamburgerLinesLineMiddle style={animateLineMiddleOne} />
				<Styled.HamburgerLinesLineMiddle style={animateLineMiddleTwo} />
				<Styled.HamburgerLinesLine style={animateLineBottom} />
			</Styled.HamburgerLines>

			{/* Modal */}
			<Styled.HamburgerModal style={animateModal}>
				<Styled.HamburgerModalMain style={animateModalMain}>
					<Options />
				</Styled.HamburgerModalMain>
			</Styled.HamburgerModal>
		</Styled.Hamburger>
	);
};

// ======================== //
// ↓↓↓ Options ↓↓↓ //
// ======================== //

const Options = () => {
	return (
		<Styled.HamburgerModalMainOptionContainer>
			{/* Home */}
			<OptionLink iconType="home" text="Home" display={true} to="/" primary={false} />
			{/* Search */}
			<OptionButton iconType="search" text="Search" display={true} option="search" />
			{/* Sign In */}
			<OptionLink
				iconType="sign in"
				text="Sign In"
				display={true}
				to="/sign-in"
				primary={false}
			/>
			{/* Registration */}
			<OptionLink
				iconType="registration"
				text="Register"
				display={true}
				to="/registration"
				primary={true}
			/>
			{/* Settings */}
			<OptionButton
				iconType="settings"
				text="Settings"
				display={true}
				option="settings"
			/>
		</Styled.HamburgerModalMainOptionContainer>
	);
};

// ============== //
// ↓↓↓ Option ↓↓↓ //
// ============== //

type OptionProps = {
	iconType: "home" | "search" | "settings" | "sign in" | "registration";
	text: string;
	display: boolean;
};

type OptionButtonProps = { option: Context.Navbar.Options } & OptionProps;

const OptionButton = (props: OptionButtonProps) => {
	const { iconType, text, display, option } = props;

	const { navbar } = Context.Navbar.useNavbarContext();

	return (
		<Styled.HamburgerModalMainOption display={display.toString()}>
			<Styled.HamburgerModalMainOptionIcon iconType={iconType} />
			<Styled.HamburgerModalMainOptionButton
				onClick={
					option === "search"
						? navbar.setters.toggleSearch
						: navbar.setters.toggleSettings
				}
			>
				{text}
			</Styled.HamburgerModalMainOptionButton>
		</Styled.HamburgerModalMainOption>
	);
};

type OptionLinkProps = {
	to: string;
	primary: boolean;
} & OptionProps;

const OptionLink = (props: OptionLinkProps) => {
	const { iconType, text, display, to, primary } = props;

	const { navbar } = Context.Navbar.useNavbarContext();

	return (
		<Styled.HamburgerModalMainOption display={display.toString()}>
			<Styled.HamburgerModalMainOptionIcon iconType={iconType} />
			<Styled.HamburgerModalMainOptionLink
				to={to}
				onClick={navbar.setters.toggleHamburgerOpen}
				primary={primary.toString()}
			>
				{text}
			</Styled.HamburgerModalMainOptionLink>
		</Styled.HamburgerModalMainOption>
	);
};
