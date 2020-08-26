import * as React from "react";

import * as Styled from "./option-link.styled";
import * as NavbarMobileSprings from "../navbar-mobile.springs";
import { OptionProps } from "../navbar-mobile";

type OptionLinkProps = { to: string } & OptionProps;

export const OptionLink = (props: OptionLinkProps) => {
	const { state, icon, text, to, onClick } = props;

	const animateOptionText = NavbarMobileSprings.optionIconText(state);

	return (
		<Styled.OptionLink to={to} onClick={onClick}>
			<Styled.OptionIcon>{icon}</Styled.OptionIcon>
			<Styled.OptionText style={animateOptionText}>{text}</Styled.OptionText>
		</Styled.OptionLink>
	);
};
