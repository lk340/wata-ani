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
			<NotAuthed />

			{/* Sections (when user IS logged in) */}
			<Authed />

			{/* Footer */}
			<Components.Footer />

			{/* Navbar Mobile */}
			<Components.NavbarMobile />
		</Styled.Home>
	);
};

// ================== //
// ↓↓↓ Not Authed ↓↓↓ //
// ================== //

const NotAuthed = () => {
	return (
		<Styled.HomeNotAuthed>
			<Styled.HomeNotAuthedSections>
				<ATF />
				<Reviews />
				<Description />
			</Styled.HomeNotAuthedSections>
			<CTA />
		</Styled.HomeNotAuthed>
	);
};

// ============== //
// ↓↓↓ Authed ↓↓↓ //
// ============== //

const Authed = () => {
	return (
		<Styled.HomeAuthed>
			<Styled.HomeAuthedSections>
				<Components.ReviewCard />
			</Styled.HomeAuthedSections>
			<Components.Pagination />
		</Styled.HomeAuthed>
	);
};
