import * as React from "react";
import * as Testing from "@testing-library/react";

import * as Tests from "@/utils/tests";

import { NavbarMobile } from "./navbar-mobile";

describe("NavbarMobile Component", () => {
	it("matches the snapshot", () => {
		const { asFragment } = Tests.renderWithContext(<NavbarMobile />);

		expect(asFragment(<NavbarMobile />)).toMatchSnapshot();
	});

	it("renders the home link, likes button, create button, search button, and profile link", () => {
		const navbarMobile = Tests.renderWithContext(<NavbarMobile />);

		const homeLink = navbarMobile.getByTestId(/navbar mobile component home link/);
		const likesButton = navbarMobile.getByTestId(/navbar mobile component likes button/);
		const createButton = navbarMobile.getByTestId(
			/navbar mobile component create button/,
		);
		const searchButton = navbarMobile.getByTestId(
			/navbar mobile component search button/,
		);
		const profileLink = navbarMobile.getByTestId(/navbar mobile component home link/);

		expect(homeLink).not.toBe(null);
		expect(likesButton).not.toBe(null);
		expect(createButton).not.toBe(null);
		expect(searchButton).not.toBe(null);
		expect(profileLink).not.toBe(null);
	});
});
