import * as React from "react";

import * as Styled from "./not-authed.styled";

import { ATF } from "./ATF";
import { Reviews } from "./reviews";
import { Description } from "./description";
import { CTA } from "./CTA";

export const NotAuthed = () => {
	return (
		<Styled.NotAuthed>
			<Styled.NotAuthedSections>
				<ATF />
				<Reviews />
				<Description />
			</Styled.NotAuthedSections>
			<CTA />
		</Styled.NotAuthed>
	);
};
