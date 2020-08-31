import * as React from "react";
import * as Testing from "@testing-library/react";
import axios from "axios";

import * as Tests from "@/utils/tests";

import { Register } from "./register";

jest.mock("axios");

describe("Register Component", () => {
	it("matches the snapshot", () => {
		const { asFragment } = Tests.renderWithContext(<Register />);

		expect(asFragment(<Register />)).toMatchSnapshot();
	});

	it("renders the Username field", () => {
		const register = Tests.renderWithContext(<Register />);

		const usernameField = register.getByTestId(
			/auth form component username input field/,
		);
		expect(usernameField).not.toBe(null);
	});

	it("renders the Email field", () => {
		const register = Tests.renderWithContext(<Register />);

		const emailField = register.getByPlaceholderText(/\*Email/);
		expect(emailField).not.toBe(null);
	});

	it("renders the Password field", () => {
		const register = Tests.renderWithContext(<Register />);

		const passwordField = register.getByPlaceholderText(/\*Password/);
		expect(passwordField).not.toBe(null);
	});

	it("renders the Confirm Password field", () => {
		const register = Tests.renderWithContext(<Register />);

		const confirmPasswordField = register.getByPlaceholderText(/\*Confirm Password/);
		expect(confirmPasswordField).not.toBe(null);
	});

	it("renders the submit button", () => {
		const register = Tests.renderWithContext(<Register />);

		const submitButton = register.getByRole("button", { name: /Register/ });
		expect(submitButton).not.toBe(null);
	});

	it("renders the redirect link", () => {
		const register = Tests.renderWithContext(<Register />);

		const question = register.getByText(/Already a member\?/);
		expect(question).not.toBe(null);

		const signInLink = register.getByRole("link", { name: /Sign In/ });
		expect(signInLink).not.toBe(null);
	});

	it("registers the user", () => {
		const register = Tests.renderWithContext(<Register />);

		const data = {
			username: "foobar",
			email: "foo@bar.com",
			password1: "newyorkstateofmind",
			password2: "newyorkstateofmind",
		};

		const usernameField = register.getByTestId(
			/auth form component username input field/,
		);
		expect(usernameField).not.toBe(null);

		const emailField = register.getByPlaceholderText(/\*Email/);
		expect(emailField).not.toBe(null);

		const passwordField = register.getByPlaceholderText(/\*Password/);
		expect(passwordField).not.toBe(null);

		const confirmPasswordField = register.getByPlaceholderText(/\*Confirm Password/);
		expect(confirmPasswordField).not.toBe(null);

		const submitButton = register.getByRole("button", {
			name: /Register/,
		});
		expect(submitButton).not.toBe(null);

		Testing.fireEvent.change(usernameField, {
			target: { value: data.username },
		});

		Testing.fireEvent.change(emailField, {
			target: { value: data.email },
		});

		Testing.fireEvent.change(passwordField, {
			target: { value: data.password1 },
		});

		Testing.fireEvent.change(confirmPasswordField, {
			target: { value: data.password2 },
		});

		Testing.fireEvent.click(submitButton);
	});
});
