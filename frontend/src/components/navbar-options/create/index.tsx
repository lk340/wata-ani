import * as React from "react";

import * as Context from "@/context";
import * as Components from "@/components";

import * as Styled from "./create.styled";
import * as Springs from "./create.springs";

export const Create = () => {
	const { navbar } = Context.Navbar.useNavbarContext();
	const { userAgent } = Context.UserAgent.useUserAgentContext();

	const createTransitionAnimation = Springs.transition(
		navbar.state.create,
		userAgent.state.isMobile,
	);

	return createTransitionAnimation.map(({ item, key, props }) => {
		return (
			item && (
				<Styled.Create key={key} style={props}>
					Hello from the create component!
				</Styled.Create>
			)
		);
	});
};
