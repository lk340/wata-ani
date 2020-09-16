import * as React from "react";

import * as Context from "@/context";
import * as Components from "@/components";

import * as Styled from "./home.styled";
import * as Springs from "./home.springs";

import { NotAuthed } from "./not-authed";
import { Authed } from "./authed";

export const Home = () => {
	Context.Theme.useThemeContext();

	const animateHome = Springs.home();

	return (
		<Styled.Home style={animateHome}>
			<Components.Navbar />
			<Components.NavbarMobile />
			<NotAuthed />
			<Authed />
			<Components.Footer />
		</Styled.Home>
	);
};
