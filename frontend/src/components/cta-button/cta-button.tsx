import * as React from "react";

import * as Styled from "./cta-button.styled";

type Props = {
	to: string;
	text: string;
};

export const CTAButton = (props: Props) => {
	const { to, text } = props;

	return (
		<Styled.CTAButton>
			<Styled.CTAButtonText to={to}>{text}</Styled.CTAButtonText>
		</Styled.CTAButton>
	);
};
