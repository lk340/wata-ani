import * as React from "react";

import * as Styled from "./reveal-on-scroll.styled";
import * as Springs from "./reveal-on-scroll.springs";

type Props = {
	children: React.ReactNode;
	partialVisibility?: boolean;
	yOffset?: number;
	delay?: number;
};

export const RevealOnScroll = (props: Props) => {
	const { children, partialVisibility, yOffset, delay } = props;

	const [visible, setVisible] = React.useState(false);
	const [active, setActive] = React.useState(true);

	const animateChildren = Springs.visibility(visible, yOffset, delay);

	return (
		<Styled.RevealOnScroll active={active} partialVisibility={partialVisibility || false}>
			{({ isVisible }) => {
				setVisible(isVisible);
				if (isVisible) setActive(false);

				return (
					<Styled.RevealOnScrollChildren style={animateChildren}>
						{children}
					</Styled.RevealOnScrollChildren>
				);
			}}
		</Styled.RevealOnScroll>
	);
};
