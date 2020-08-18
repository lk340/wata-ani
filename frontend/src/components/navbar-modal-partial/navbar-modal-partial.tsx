import * as React from "react";

import * as Context from "@/context";
import * as Animations from "@/utils/style/animations";

import * as Styled from "./navbar-modal-partial.styled";
import * as Springs from "./navbar-modal-partial.springs";

export const NavbarModalPartial = () => {
	const { theme } = Context.Theme.useThemeContext();

	const animateContainer = Springs.container(theme.state.mode);

	return (
		<Styled.NavbarModalPartial style={animateContainer}>
			NavbarModalPartial
		</Styled.NavbarModalPartial>
	);
};
