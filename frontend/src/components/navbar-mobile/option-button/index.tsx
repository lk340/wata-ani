import * as React from "react";

import * as Styled from "./option-button.styled";
import * as NavbarMobileSprings from "../navbar-mobile.springs";

import { OptionProps } from "../navbar-mobile";

type OptionButtonProps = { test_id: string } & OptionProps;

export const OptionButton = (props: OptionButtonProps) => {
	const { state, icon, text, onClick, test_id } = props;

	const animateOptionText = NavbarMobileSprings.optionIconText(state);

	return (
		<Styled.OptionButton onClick={onClick} test_id={test_id}>
			<Styled.OptionIcon>{icon}</Styled.OptionIcon>
			<Styled.OptionText style={animateOptionText}>{text}</Styled.OptionText>
		</Styled.OptionButton>
	);
};
