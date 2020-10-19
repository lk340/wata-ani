import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./wrapper.styled";
import * as Springs from "./wrapper.springs";

type Props = { children: React.ReactNode };

export const Wrapper = (props: Props) => {
	const { children } = props;

	const { navbar } = Context.Navbar.useNavbarContext();
	const { userAgent } = Context.UserAgent.useUserAgentContext();

	const transitionAnimation = Springs.transition(
		navbar.state.create,
		userAgent.state.isMobile,
	);

	const animateWrapper = Springs.wrapper();
	const animateHeader = Springs.header();

	return transitionAnimation.map(({ item, key, props }) => {
		return (
			item && (
				<Styled.WrapperContainer key={key} style={props}>
					<Styled.Wrapper style={animateWrapper}>
						<Styled.WrapperHeader style={animateHeader}>
							<Styled.WrapperHeaderTitle>Header</Styled.WrapperHeaderTitle>
						</Styled.WrapperHeader>
						<Styled.WrapperBody>{children}</Styled.WrapperBody>
					</Styled.Wrapper>
				</Styled.WrapperContainer>
			)
		);
	});
};
