import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./navbar-option-wrapper.styled";
import * as Springs from "./navbar-option-wrapper.springs";

type Props = {
	Component: React.ReactNode;
};

export const Wrapper = (props: Props) => {
	const { Component } = props;

	const { userAgent } = Context.UserAgent.useUserAgentContext();

	const [show, setShow] = React.useState(false);

	const Wrapper = Springs.transition(show, userAgent.state.isMobile).map(
		({ item, key, props }) => {
			return (
				item && (
					<Styled.Wrapper key={key} style={props}>
						{Component}
					</Styled.Wrapper>
				)
			);
		},
	);

	return { Wrapper };
};
