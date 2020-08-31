import * as React from "react";
import * as Testing from "@testing-library/react";
import axios from "axios";

import * as Tests from "@/utils/tests";

import { Navbar } from "./navbar";

jest.mock("axios");

describe("Navbar Component", () => {
	it("matches the snapshot", () => {
		const { asFragment } = Tests.renderWithContext(<Navbar />);

		expect(asFragment(<Navbar />)).toMatchSnapshot();
	});

	it("displays the home link, theme button, sign in link, and register link when the user is not signed in", () => {
		const navbar = Tests.renderWithContext(<Navbar />);

		const homeLink = navbar.getByTestId(/navbar component home link/);
		const likeButton = navbar.getByTestId(/navbar component like button/);
		const createButton = navbar.getByTestId(/navbar component create button/);
		const searchButton = navbar.getByTestId(/navbar component search button/);
		const settingsButton = navbar.getByTestId(/navbar component settings button/);
		const profileLink = navbar.getByTestId(/navbar component profile link/);
		const signInLink = navbar.getByTestId(/navbar component sign in link/);
		const registerLink = navbar.getByTestId(/navbar component register link/);

		expect(homeLink).not.toBe(null);
		expect(homeLink).toHaveStyle("display: flex");

		expect(likeButton).not.toBe(null);
		expect(likeButton).toHaveStyle("display: none");

		expect(createButton).not.toBe(null);
		expect(createButton).toHaveStyle("display: none");

		expect(searchButton).not.toBe(null);
		expect(searchButton).toHaveStyle("display: none");

		expect(settingsButton).not.toBe(null);
		expect(settingsButton).toHaveStyle("display: none");

		expect(profileLink).not.toBe(null);
		expect(profileLink).toHaveStyle("display: none");

		expect(signInLink).not.toBe(null);
		expect(signInLink).toHaveStyle("display: flex");

		expect(registerLink).not.toBe(null);
		expect(registerLink).toHaveStyle("display: flex");
	});

	it("displays the home link, like button, create button, search button, settings button, profile link, and theme button when the user is signed in", async () => {
		const navbar = Tests.renderWithContext(<Navbar />);

		const registrationData = {
			username: "foobar",
			email: "foo@bar.com",
			password1: "newyorkstateofmind",
			password2: "newyorkstateofmind",
		};

		await axios.post("/auth/registration/", registrationData);

		const homeLink = navbar.getByTestId(/navbar component home link/);
		const likeButton = navbar.getByTestId(/navbar component like button/);
		const createButton = navbar.getByTestId(/navbar component create button/);
		const searchButton = navbar.getByTestId(/navbar component search button/);
		const settingsButton = navbar.getByTestId(/navbar component settings button/);
		const profileLink = navbar.getByTestId(/navbar component profile link/);
		const signInLink = navbar.getByTestId(/navbar component sign in link/);
		const registerLink = navbar.getByTestId(/navbar component register link/);

		expect(homeLink).not.toBe(null);
		expect(homeLink).toHaveStyle("display: flex");

		expect(likeButton).not.toBe(null);
		expect(likeButton).toHaveStyle("display: flex");

		expect(createButton).not.toBe(null);
		expect(createButton).toHaveStyle("display: flex");

		expect(searchButton).not.toBe(null);
		expect(searchButton).toHaveStyle("display: flex");

		expect(settingsButton).not.toBe(null);
		expect(settingsButton).toHaveStyle("display: flex");

		expect(profileLink).not.toBe(null);
		expect(profileLink).toHaveStyle("display: flex");

		expect(signInLink).not.toBe(null);
		expect(signInLink).toHaveStyle("display: none");

		expect(registerLink).not.toBe(null);
		expect(registerLink).toHaveStyle("display: none");
	});
});
