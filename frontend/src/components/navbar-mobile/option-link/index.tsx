import * as React from "react";

import * as Styled from "./option-link.styled";

import * as NavbarMobileSprings from "../navbar-mobile.springs";
import { OptionProps } from "../navbar-mobile";

type OptionLinkProps = {
	to: string;
	test_id: string;
} & OptionProps;

export const OptionLink = (props: OptionLinkProps) => {
	const { state, icon, text, onClick, to, test_id } = props;

	const animateOptionText = NavbarMobileSprings.optionIconText(state);

	return (
		<Styled.OptionLink to={to} onClick={onClick} test_id={test_id}>
			<Styled.OptionIcon>{icon}</Styled.OptionIcon>
			<Styled.OptionText style={animateOptionText}>{text}</Styled.OptionText>
		</Styled.OptionLink>
	);
};
