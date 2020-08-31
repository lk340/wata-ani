import * as React from "react";
import * as Testing from "@testing-library/react";
import axios from "axios";

import * as Tests from "@/utils/tests";

import { AuthForm } from "./auth-form";

jest.mock("axios");

describe("AuthForm Component", () => {
	it("matches the snapshot", () => {
		const { asFragment } = Tests.renderWithContext(
			<AuthForm formType="Registration" submitText="Register" />,
		);

		expect(
			asFragment(<AuthForm formType="Registration" submitText="Register" />),
		).toMatchSnapshot();
	});

	describe("Sign In Form Type", () => {
		it("renders the logo", () => {
			const authForm = Tests.renderWithContext(
				<AuthForm formType="Sign In" submitText="Sign In" />,
			);

			const logo = authForm.getByAltText(/auth form component logo image/);
			expect(logo).not.toBe(null);
		});

		it("renders the form title", () => {
			const authForm = Tests.renderWithContext(
				<AuthForm formType="Sign In" submitText="Sign In" />,
			);

			const title = authForm.getByRole("heading", { name: /Sign In/ });
			expect(title).toHaveTextContent(/Sign In/);
		});

		it("renders the Username Or Email field", () => {
			const authForm = Tests.renderWithContext(
				<AuthForm formType="Sign In" submitText="Sign In" />,
			);

			const usernameOrEmailField = authForm.getByPlaceholderText(/Username or Email/);
			expect(usernameOrEmailField).not.toBe(null);
		});

		it("renders the Password field", () => {
			const authForm = Tests.renderWithContext(
				<AuthForm formType="Sign In" submitText="Sign In" />,
			);

			const passwordField = authForm.getByPlaceholderText(/\*Password/);
			expect(passwordField).not.toBe(null);
		});

		it("renders error messages on erroneous user input", () => {
			const authForm = Tests.renderWithContext(
				<AuthForm formType="Sign In" submitText="Sign In" />,
			);

			// const usernameOrEmailField = authForm.getByPlaceholderText(/Username or Email/);
			// expect(usernameOrEmailField).not.toBe(null);

			// const passwordField = authForm.getByPlaceholderText(/\*Password/);
			// expect(passwordField).not.toBe(null);

			// const submitButton = authForm.getByRole("button", { name: /Sign In/ });
			// expect(submitButton).not.toBe(null);

			// Testing.fireEvent.change(usernameOrEmailField, {
			// 	target: { value: "foobar" },
			// });

			// Testing.fireEvent.change(passwordField, {
			// 	target: { value: "justfoothebar" },
			// });

			// Testing.fireEvent.click(submitButton);

			// const errorMessage = authForm.getByText(
			// 	/Unable to log in with provided credentials/,
			// );
			// expect(errorMessage).not.toBe(null);
		});
	});

	describe("Registration Form Type", () => {
		it("renders the logo", () => {
			const authForm = Tests.renderWithContext(
				<AuthForm formType="Registration" submitText="Register" />,
			);

			const logo = authForm.getByAltText(/auth form component logo image/);
			expect(logo).not.toBe(null);
		});

		it("renders the form title", () => {
			const authForm = Tests.renderWithContext(
				<AuthForm formType="Registration" submitText="Register" />,
			);

			const title = authForm.getByRole("heading", { name: /Registration/ });
			expect(title).toHaveTextContent(/Registration/);
		});

		it("renders the Username field", () => {
			const authForm = Tests.renderWithContext(
				<AuthForm formType="Registration" submitText="Register" />,
			);

			const usernameField = authForm.getByTestId(
				/auth form component username input field/,
			);
			expect(usernameField).not.toBe(null);
		});

		it("renders the Email field", () => {
			const authForm = Tests.renderWithContext(
				<AuthForm formType="Registration" submitText="Register" />,
			);

			const emailField = authForm.getByPlaceholderText(/\*Email/);
			expect(emailField).not.toBe(null);
		});

		it("renders the Password field", () => {
			const authForm = Tests.renderWithContext(
				<AuthForm formType="Registration" submitText="Register" />,
			);

			const passwordField = authForm.getByPlaceholderText(/\*Password/);
			expect(passwordField).not.toBe(null);
		});

		it("renders the Confirm Password field", () => {
			const authForm = Tests.renderWithContext(
				<AuthForm formType="Registration" submitText="Register" />,
			);

			const confirmPasswordField = authForm.getByPlaceholderText(/\*Confirm Password/);
			expect(confirmPasswordField).not.toBe(null);
		});

		it("renders error messages on erroneous user input", () => {
			const authForm = Tests.renderWithContext(
				<AuthForm formType="Registration" submitText="Register" />,
			);
		});
	});
});
