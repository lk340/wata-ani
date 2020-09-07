import * as React from "react";

import * as Styled from "./footer.styled";
import * as Springs from "./footer.springs";

export const Footer = () => {
	const animateFooter = Springs.Footer();

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
				<Styled.FooterNavigationContainer>
					{/* Navigation */}
					<Styled.FooterNavigation>
						<Styled.FooterNavigationTitle>Navigation</Styled.FooterNavigationTitle>
						<Styled.FooterNavigationLink to="/">Home</Styled.FooterNavigationLink>
						<Styled.FooterNavigationLink to="sign-in">
							Sign In
						</Styled.FooterNavigationLink>
						<Styled.FooterNavigationLink to="registration">
							Register
						</Styled.FooterNavigationLink>
					</Styled.FooterNavigation>

					{/* Support */}
					<Styled.FooterNavigation>
						<Styled.FooterNavigationTitle>Support</Styled.FooterNavigationTitle>
						<Styled.FooterNavigationLink to="faq">FAQ</Styled.FooterNavigationLink>
						<Styled.FooterNavigationLink to="report-a-bug">
							Report A Bug
						</Styled.FooterNavigationLink>
						<Styled.FooterNavigationLink to="donate">Donate</Styled.FooterNavigationLink>
					</Styled.FooterNavigation>
				</Styled.FooterNavigationContainer>
			</Styled.FooterContent>
		</Styled.Footer>
	);
};
