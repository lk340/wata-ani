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

const username = "WataAni";
const seriesName = "Neon Genesis Evangelion";
const cardTitle = `"Timeless classic" is an understatement.`;
const cardDate = "August 3, 2020";
const cardText = `People refer to this piece as a timeless classic, but that description alone
fails to accurately portray why it has withstood the test of time. Not only are
its animation and character designs fluid and bold, but also, it experiments
with the human psyche - how we react to our surroundings as people, not as a
hyperbolic fictional character. It is this realism that allows us to see
ourselves in the characters' shoes. Evangelion has set the standard for its
descendants.`;

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
				<Components.ReviewCard
					username={username}
					seriesName={seriesName}
					title={cardTitle}
					date={cardDate}
					text={cardText}
				/>
			</Styled.HomeAuthedSections>
			<Components.Pagination />
		</Styled.HomeAuthed>
	);
};
