import * as React from "react";
import * as Testing from "@testing-library/react";

import * as Tests from "@/utils/tests";

import { AuthForm } from "./auth-form";

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
		});

		it("renders the form title", () => {
			const authForm = Tests.renderWithContext(
				<AuthForm formType="Sign In" submitText="Sign In" />,
			);
		});

		it("renders the Username Or Email field", () => {
			const authForm = Tests.renderWithContext(
				<AuthForm formType="Sign In" submitText="Sign In" />,
			);
		});

		it("renders the Password field", () => {
			const authForm = Tests.renderWithContext(
				<AuthForm formType="Sign In" submitText="Sign In" />,
			);
		});

		it("renders error messages on erroneous user input", () => {
			const authForm = Tests.renderWithContext(
				<AuthForm formType="Sign In" submitText="Sign In" />,
			);
		});
	});

	describe("Registration Form Type", () => {
		it("renders the logo", () => {
			const authForm = Tests.renderWithContext(
				<AuthForm formType="Registration" submitText="Register" />,
			);
		});

		it("renders the form title", () => {
			const authForm = Tests.renderWithContext(
				<AuthForm formType="Registration" submitText="Register" />,
			);
		});

		it("renders the Username field", () => {
			const authForm = Tests.renderWithContext(
				<AuthForm formType="Registration" submitText="Register" />,
			);
		});

		it("renders the Email field", () => {
			const authForm = Tests.renderWithContext(
				<AuthForm formType="Registration" submitText="Register" />,
			);
		});

		it("renders the Password field", () => {
			const authForm = Tests.renderWithContext(
				<AuthForm formType="Registration" submitText="Register" />,
			);
		});

		it("renders the Confirm Password field", () => {
			const authForm = Tests.renderWithContext(
				<AuthForm formType="Registration" submitText="Register" />,
			);
		});

		it("renders error messages on erroneous user input", () => {
			const authForm = Tests.renderWithContext(
				<AuthForm formType="Registration" submitText="Register" />,
			);
		});
	});
});
