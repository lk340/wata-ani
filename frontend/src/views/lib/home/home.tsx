import * as React from "react";

import * as Context from "@/context";
import * as Components from "@/components";

import * as Styled from "./home.styled";
import * as Springs from "./home.springs";

import { ATF } from "./ATF";
import { Reviews } from "./reviews";
import { Description } from "./description";
import { CTA } from "./CTA";

export const Home = () => {
	Context.Theme.useThemeContext();

	const animateHome = Springs.home();

	return (
		<Styled.Home style={animateHome}>
			{/* Navbar */}
			<Components.Navbar />

			{/* Sections (when user ISN'T logged in) */}
			<Styled.HomeSectionsNotAuthed>
				<Styled.HomeSections>
					<ATF />
					<Reviews />
					<Description />
				</Styled.HomeSections>
				<CTA />
			</Styled.HomeSectionsNotAuthed>

			{/* Sections (when user IS logged in) */}
			<Styled.HomeSectionsAuthed>Authed!</Styled.HomeSectionsAuthed>

			{/* Footer */}
			<Components.Footer />

			{/* Navbar Mobile */}
			<Components.NavbarMobile />
		</Styled.Home>
	);
};
