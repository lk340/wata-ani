import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./wrapper.styled";
import * as Springs from "./wrapper.springs";

type Props = {
	children: React.ReactNode;
};

export const Wrapper = (props: Props) => {
	const { children } = props;

	const { userAgent } = Context.UserAgent.useUserAgentContext();

	const [show, setShow] = React.useState(false);

	const Wrapper = Springs.transition(show, userAgent.state.isMobile).map(
		({ item, key, props }) => {
			return (
				item && (
					<Styled.Wrapper key={key} style={props}>
						{children}
					</Styled.Wrapper>
				)
			);
		},
	);

	return { Wrapper };
};
