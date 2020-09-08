import * as React from "react";

import * as Styled from "./cta-button.styled";

type Props = {
	to: string;
	text: string;
	customMedia?: number;
	customMediaWidth?: string;
};

export const CTAButton = (props: Props) => {
	const { to, text, customMedia, customMediaWidth } = props;

	return (
		<Styled.CTAButton customMedia={customMedia} customMediaWidth={customMediaWidth}>
			<Styled.CTAButtonText to={to}>{text}</Styled.CTAButtonText>
		</Styled.CTAButton>
	);
};
