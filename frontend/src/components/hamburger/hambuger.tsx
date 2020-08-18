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
					<Styled.HamburgerModalMainOptionContainer>
						<OptionLink iconType="home" text="Home" to="/" primary={false} />
						<OptionButton iconType="search" text="Search" option="search" />
						<OptionLink iconType="sign in" text="Sign In" to="/sign-in" primary={false} />
						<OptionLink iconType="registration" text="Register" to="/registration" primary={true} />
						<OptionButton iconType="settings" text="Settings" option="settings" />
					</Styled.HamburgerModalMainOptionContainer>
				</Styled.HamburgerModalMain>
			</Styled.HamburgerModal>
		</Styled.Hamburger>
	);
};

// ============== //
// ↓↓↓ Option ↓↓↓ //
// ============== //

type OptionProps = {
	iconType: "home" | "search" | "settings" | "sign in" | "registration";
	text: string;
};

type OptionButtonProps = { option: Context.Navbar.Options } & OptionProps;

const OptionButton = (props: OptionButtonProps) => {
	const { iconType, text, option } = props;

	const { navbar } = Context.Navbar.useNavbarContext();

	return (
		<Styled.HamburgerModalMainOption>
			<Styled.HamburgerModalMainOptionIcon iconType={iconType} />
			<Styled.HamburgerModalMainOptionButton
				onClick={() => navbar.setters.setOption(option)}
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
	const { iconType, text, to, primary } = props;

	const { navbar } = Context.Navbar.useNavbarContext();

	return (
		<Styled.HamburgerModalMainOption>
			<Styled.HamburgerModalMainOptionIcon iconType={iconType} />
			<Styled.HamburgerModalMainOptionLink
				to={to}
				onClick={navbar.setters.toggleHamburgerOpen}
				primary={primary}
			>
				{text}
			</Styled.HamburgerModalMainOptionLink>
		</Styled.HamburgerModalMainOption>
	);
};
