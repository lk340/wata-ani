import * as React from "react";

import * as Context from "@/context";

import * as OptionStyled from "../navbar-options.styled";
import * as OptionSprings from "../navbar-options.springs";

import * as Styled from "./settings.styled";

export const Settings = () => {
	const { navbar } = Context.Navbar.useNavbarContext();
	const { userAgent } = Context.UserAgent.useUserAgentContext();

	// --- Animations --- //
	const transitionAnimation = OptionSprings.transition(
		navbar.state.settings,
		userAgent.state.isMobile,
	);

	const animateWrapper = OptionSprings.wrapper();
	const animateHeader = OptionSprings.header();

	return transitionAnimation.map(({ item, key, props }) => {
		return (
			item && (
				<OptionStyled.Container key={key} style={props}>
					<OptionStyled.Wrapper style={animateWrapper}>
						{/* Header */}
						<OptionStyled.Header style={animateHeader}>
							<OptionStyled.HeaderTitle>Settings</OptionStyled.HeaderTitle>
							<OptionStyled.HeaderClose onClick={navbar.setters.toggleCreate} />
						</OptionStyled.Header>
						{/* Body */}
						<OptionStyled.Body></OptionStyled.Body>
					</OptionStyled.Wrapper>
				</OptionStyled.Container>
			)
		);
	});
};
