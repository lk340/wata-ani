import * as React from "react";
import * as Testing from "@testing-library/react";
import axios from "axios";

import * as Context from "@/context";
import * as Tests from "@/utils/tests";

import { Hamburger } from "./hamburger";

jest.mock("axios");

describe("Hamburger Component", () => {
	it("matches the snapshot", () => {
		const { asFragment } = Tests.renderWithContext(<Hamburger />);

		expect(asFragment(<Hamburger />)).toMatchSnapshot();
	});

	it("opens and closes based on state", () => {
		const HamburgerWithModalState = () => {
			const { navbar } = Context.Navbar.useNavbarContext();

			return (
				<React.Fragment>
					<Hamburger />
					<div data-testid="modalState">{navbar.state.hamburgerOpen.toString()}</div>
				</React.Fragment>
			);
		};

		const hamburgerWithTheme = Tests.renderWithContext(<HamburgerWithModalState />);

		const lines = hamburgerWithTheme.getByTestId(/hamburger component lines/);
		expect(lines).not.toBe(null);

		const hamburgerOpen = hamburgerWithTheme.getByTestId(/modalState/);
		expect(hamburgerOpen).not.toBe(null);
		expect(hamburgerOpen).toHaveTextContent(/false/);

		Testing.fireEvent.click(lines);
		expect(hamburgerOpen).toHaveTextContent(/true/);

		Testing.fireEvent.click(lines);
		expect(hamburgerOpen).toHaveTextContent(/false/);
	});

	it("displays the Home link, Sign In link, and Register link when user is not signed in", () => {
		const hamburger = Tests.renderWithContext(<Hamburger />);

		const homeLink = hamburger.getByTestId(/hamburger component home link/);
		const searchButton = hamburger.getByTestId(/hamburger component search button/);
		const signInLink = hamburger.getByTestId(/hamburger component sign in link/);
		const SignOutButton = hamburger.getByTestId(/hamburger component sign out button/);
		const registerLink = hamburger.getByTestId(/hamburger component registration link/);
		const settingsButton = hamburger.getByTestId(/hamburger component settings button/);

		expect(homeLink).not.toBe(null);
		expect(homeLink).toHaveStyle("display: flex");

		expect(searchButton).not.toBe(null);
		expect(searchButton).toHaveStyle("display: none");

		expect(signInLink).not.toBe(null);
		expect(signInLink).toHaveStyle("display: flex");

		expect(SignOutButton).not.toBe(null);
		expect(SignOutButton).toHaveStyle("display: none");

		expect(registerLink).not.toBe(null);
		expect(registerLink).toHaveStyle("display: flex");

		expect(settingsButton).not.toBe(null);
		expect(settingsButton).toHaveStyle("display: none");
	});

	it("displays the Home link, Search button, Sign Out button, and Settings button when user is signed in", async () => {
		const registrationData = {
			username: "foobar",
			email: "foo@bar.com",
			password1: "newyorkstateofmind",
			password2: "newyorkstateofmind",
		};

		await axios.post("/auth/registration/", registrationData);

		const signInData = { username: "foobar", password: "newyorkstateofmind" };

		await axios.post("/auth/login/", signInData);

		const hamburger = Tests.renderWithContext(<Hamburger />);

		const homeLink = hamburger.getByTestId(/hamburger component home link/);
		const searchButton = hamburger.getByTestId(/hamburger component search button/);
		const signInLink = hamburger.getByTestId(/hamburger component sign in link/);
		const SignOutButton = hamburger.getByTestId(/hamburger component sign out button/);
		const registerLink = hamburger.getByTestId(/hamburger component registration link/);
		const settingsButton = hamburger.getByTestId(/hamburger component settings button/);

		expect(homeLink).not.toBe(null);
		expect(homeLink).toHaveStyle("display: flex");

		expect(searchButton).not.toBe(null);
		expect(searchButton).toHaveStyle("display: flex");

		expect(signInLink).not.toBe(null);
		expect(signInLink).toHaveStyle("display: none");

		expect(SignOutButton).not.toBe(null);
		expect(SignOutButton).toHaveStyle("display: flex");

		expect(registerLink).not.toBe(null);
		expect(registerLink).toHaveStyle("display: none");

		expect(settingsButton).not.toBe(null);
		expect(settingsButton).toHaveStyle("display: flex");
	});
});
