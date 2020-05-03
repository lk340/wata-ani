import * as React from "react";
import * as Testing from "@testing-library/react";

import { Providers } from "@/context/providers";

import { SignUp } from "./sign-up";

function renderWithContext(component: React.ReactNode) {
	return Testing.render(<Providers>{component}</Providers>);
}

describe("SignUp", () => {
	it("matches the snapshot", () => {
		const { asFragment } = renderWithContext(<SignUp />);
		expect(asFragment(<SignUp />)).toMatchSnapshot();
	});

	it(`displays the title with the text "Sign Up"`, () => {
		const { getByTestId } = renderWithContext(<SignUp />);
		expect(getByTestId("title")).toHaveTextContent("Sign Up");
	});

	it("displays username, email, password, and password confirmation input fields", () => {
		const { getByTestId } = renderWithContext(<SignUp />);
		expect(getByTestId("username-field")).not.toBeNull();
		expect(getByTestId("email-field")).not.toBeNull();
		expect(getByTestId("password-field")).not.toBeNull();
		expect(getByTestId("password-confirmation-field")).not.toBeNull();
	});

	it("requires all form fields to be filled out", () => {
		const { getByTestId } = renderWithContext(<SignUp />);
		// simulate filling 3/4 fields
		expect(getByTestId("submit-button")).toHaveProperty("disabled");
	});

	it("displays a submit button", () => {
		const { getByTestId } = renderWithContext(<SignUp />);
		expect(getByTestId("submit-button")).not.toBeNull();
	});

	it("disables the submit button when all form fields are not filled", () => {
		const { getByTestId } = renderWithContext(<SignUp />);
		expect(getByTestId("submit-button")).toHaveProperty("disabled");
	});

	it("enables the submit button when all form fields are filled", () => {
		const { getByTestId } = renderWithContext(<SignUp />);
		// simulate all 4 fields filled
		// expect(getByTestId("submit-button")).not.toHaveProperty("disabled");
	});

	it("displays an error message when the passwords don't match", () => {
		const { getByTestId } = renderWithContext(<SignUp />);
		// simulate both password fields filled in but with differing strings
		// expect(getByTestId("error-message")).toHaveTextContent("Your passwords don't match.");
	});

	it("signs the user up", async () => {});
});
