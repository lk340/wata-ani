import * as React from "react";
import * as ReactRedux from "react-redux";
import * as Gatsby from "gatsby";

import * as Context from "@/context";
import * as Actions from "@/redux/actions";

import * as Styled from "./footer.styled";
import * as Springs from "./footer.springs";

export const Footer = () => {
	const { navbar } = Context.Navbar.useNavbarContext();

	const animateFooter = Springs.Footer();

	const isAuthed = !!localStorage.access;

	const dispatch = ReactRedux.useDispatch();

	function handleClick(): void {
		Actions.Session.signOut(dispatch);
		navbar.setters.toggleHamburgerOpen();
		Gatsby.navigate("/");
	}

	return (
		<Styled.Footer style={animateFooter}>
			<Styled.FooterContent>
				{/* Logo */}
				<Styled.FooterLogo />

				{/* Names */}
				<Styled.FooterNames>
					<Styled.FooterNamesName>
						私はこのアニメを見たいのか？ 見たくわないのか？ どっちだ？！
					</Styled.FooterNamesName>
					<Styled.FooterNamesName>
						Do I Want To Watch This Anime? Do I Not Want To Watch This Anime? Which One Is
						It?!
					</Styled.FooterNamesName>
				</Styled.FooterNames>

				{/* Navigation */}
				<Styled.FooterNavigation>
					<Styled.FooterNavigationTitle>Navigation</Styled.FooterNavigationTitle>
					<Styled.FooterNavigationLink to="/">Home</Styled.FooterNavigationLink>
					{isAuthed ? (
						<Styled.FooterNavigationSignOutButton onClick={handleClick}>
							Sign Out
						</Styled.FooterNavigationSignOutButton>
					) : (
						<>
							<Styled.FooterNavigationLink to="/sign-in">
								Sign In
							</Styled.FooterNavigationLink>
							<Styled.FooterNavigationLink to="/registration">
								Register
							</Styled.FooterNavigationLink>
						</>
					)}
				</Styled.FooterNavigation>
			</Styled.FooterContent>
		</Styled.Footer>
	);
};
