import * as React from "react";

import * as Context from "@/context";
import * as Animations from "@/utils/style/animations";
import * as Constants from "@/utils/style/constants";

import * as Styled from "./navbar-modal-partial.styled";
import * as Springs from "./navbar-modal-partial.springs";

type Props = {
	display: boolean;
	title: string;
	children: React.ReactNode;
};

export const NavbarModalPartial = (props: Props) => {
	const { display, title, children } = props;

	const { theme } = Context.Theme.useThemeContext();

	const animateContainer = Springs.container(theme.state.mode);
	const animateHeader = Springs.header(theme.state.mode);
	const animateBody = Animations.background(
		theme.state.mode,
		Constants.theme.components.navbarModalPartial.body.light,
		Constants.theme.components.navbarModalPartial.body.dark,
	);

	return (
		<Styled.NavbarModalPartial style={animateContainer}>
			<Styled.NavbarModalPartialHeader style={animateHeader}>
				{/* {title} */}
				Header
				X
			</Styled.NavbarModalPartialHeader>
			<Styled.NavbarModalPartialBody style={animateBody}>
				Body
			</Styled.NavbarModalPartialBody>
		</Styled.NavbarModalPartial>
	);
};
