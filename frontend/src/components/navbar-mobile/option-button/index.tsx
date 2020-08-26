import * as React from "react";

import * as Styled from "./option-button.styled";
import * as NavbarMobileSprings from "../navbar-mobile.springs";
import { OptionProps } from "../navbar-mobile";

export const OptionButton = (props: OptionProps) => {
	const { state, icon, text, onClick } = props;

	const animateOptionText = NavbarMobileSprings.optionIconText(state);

	return (
		<Styled.OptionButton onClick={onClick}>
			<Styled.OptionIcon>{icon}</Styled.OptionIcon>
			<Styled.OptionText style={animateOptionText}>{text}</Styled.OptionText>
		</Styled.OptionButton>
	);
};
