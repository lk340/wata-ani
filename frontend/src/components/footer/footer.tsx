import * as React from "react";

import * as Styled from "./footer.styled";
import * as Springs from "./footer.springs";

export const Footer = () => {
	const animateFooter = Springs.Footer();

	return (
		<Styled.Footer style={animateFooter}>
			<Styled.FooterContent>
				{/* Logo */}
				<Styled.Logo />

				{/* Names */}
				<Styled.Names>
					<Styled.NamesName>
						私はこのアニメを見たいのか？ 見たくわないのか？ どっちだ？！
					</Styled.NamesName>
					<Styled.NamesName>
						Do I Want To Watch This Anime? Do I Not Want To Watch This Anime? Which One Is
						It?!
					</Styled.NamesName>
				</Styled.Names>

				{/* Navigation */}
				<Styled.NavigationContainer>
					{/* Navigation */}
					<Styled.Navigation>
						<Styled.NavigationTitle>Navigation</Styled.NavigationTitle>
						<Styled.NavigationLink to="/">Home</Styled.NavigationLink>
						<Styled.NavigationLink to="sign-in">Sign In</Styled.NavigationLink>
						<Styled.NavigationLink to="registration">Register</Styled.NavigationLink>
					</Styled.Navigation>

					{/* Support */}
					<Styled.Navigation>
						<Styled.NavigationTitle>Support</Styled.NavigationTitle>
						<Styled.NavigationLink to="faq">FAQ</Styled.NavigationLink>
						<Styled.NavigationLink to="report-a-bug">Report A Bug</Styled.NavigationLink>
						<Styled.NavigationLink to="donate">Donate</Styled.NavigationLink>
					</Styled.Navigation>
				</Styled.NavigationContainer>
			</Styled.FooterContent>
		</Styled.Footer>
	);
};
