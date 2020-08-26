import * as React from "react";
import * as ReactRedux from "react-redux";

import * as Context from "@/context";
import * as Components from "@/components";
import * as Actions from "@/redux/actions";

import * as Styled from "./hamburger.styled";
import * as Springs from "./hamburger.springs";
import { Lines } from "./lines";

export const Hamburger = () => {
	const { navbar } = Context.Navbar.useNavbarContext();
	const { theme } = Context.Theme.useThemeContext();

	// --- Modal Animations --- //
	const animateModal = Springs.modal(navbar.state.hamburgerOpen);
	const animateModalMainContainer = Springs.modalMainContainer(
		navbar.state.hamburgerOpen,
	);
	const animateModalMain = Springs.modalMain(theme.state.mode);

	return (
		<Styled.Hamburger>
			<Lines />

			{/* Modal */}
			<Styled.HamburgerModal style={animateModal}>
				{/* Main */}
				<Styled.HamburgerModalMainContainer style={animateModalMainContainer}>
					<Styled.HamburgerModalMain style={animateModalMain}>
						<Options />
					</Styled.HamburgerModalMain>
				</Styled.HamburgerModalMainContainer>
				{/* Theme Button */}
				<Styled.HamburgerModalThemeButton>
					<Components.ThemeButton />
				</Styled.HamburgerModalThemeButton>
			</Styled.HamburgerModal>
		</Styled.Hamburger>
	);
};

// ======================== //
// ↓↓↓ Options ↓↓↓ //
// ======================== //

const Options = () => {
	const userId = ReactRedux.useSelector((state) => state.session.id);
	const isUser = !!userId;
	const displayWhenSignedIn = isUser;
	const displayWhenSignedOut = !isUser;

	return (
		<Styled.HamburgerModalMainOptionContainer>
			{/* Home */}
			<OptionLink iconType="home" text="Home" display={true} to="/" primary={false} />
			{/* Search */}
			<OptionButton
				iconType="search"
				text="Search"
				display={displayWhenSignedIn}
				option="search"
			/>
			{/* Sign In */}
			<OptionLink
				iconType="sign in"
				text="Sign In"
				display={displayWhenSignedOut}
				to="/sign-in"
				primary={false}
			/>
			{/* Sign Out */}
			<SignOutButton iconType="sign in" text="Sign Out" display={displayWhenSignedIn} />
			{/* Registration */}
			<OptionLink
				iconType="registration"
				text="Register"
				display={displayWhenSignedOut}
				to="/registration"
				primary={true}
			/>
			{/* Settings */}
			<OptionButton
				iconType="settings"
				text="Settings"
				display={displayWhenSignedIn}
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

// ================ //
// ↓↓↓ Sign Out ↓↓↓ //
// ================ //

const SignOutButton = (props: OptionProps) => {
	const { iconType, text, display } = props;

	const { navbar } = Context.Navbar.useNavbarContext();

	const dispatch = ReactRedux.useDispatch();

	function handleClick(): void {
		Actions.Session.signOut(dispatch);
		navbar.setters.toggleHamburgerOpen();
	}

	return (
		<Styled.HamburgerModalMainOption display={display.toString()}>
			<Styled.HamburgerModalMainOptionIcon iconType={iconType} />
			<Styled.HamburgerModalMainOptionButton onClick={handleClick}>
				{text}
			</Styled.HamburgerModalMainOptionButton>
		</Styled.HamburgerModalMainOption>
	);
};
