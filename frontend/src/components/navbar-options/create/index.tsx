import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./create.styled";
import * as Springs from "./create.springs";

export const Create = () => {
	const { navbar } = Context.Navbar.useNavbarContext();
	const { userAgent } = Context.UserAgent.useUserAgentContext();

	const transitionAnimation = Springs.transition(
		navbar.state.create,
		userAgent.state.isMobile,
	);

	const animateCreate = Springs.create();
	const animateHeader = Springs.header();

	return transitionAnimation.map(({ item, key, props }) => {
		return (
			item && (
				<Styled.CreateContainer key={key} style={props}>
					<Styled.Create style={animateCreate}>
						<Styled.CreateHeader style={animateHeader}>
							<Styled.CreateHeaderTitle>Header</Styled.CreateHeaderTitle>
						</Styled.CreateHeader>
						<Styled.CreateBody>Body</Styled.CreateBody>
					</Styled.Create>
				</Styled.CreateContainer>
			)
		);
	});
};
