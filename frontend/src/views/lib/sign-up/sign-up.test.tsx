import * as React from "react";
import * as Testing from "@testing-library/react";
import axiosMock from "axios";

import { Providers } from "@/context/providers";

import { SignUp } from "./sign-up";

jest.mock("axios");

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

	it("displays a submit button", () => {
		const { getByTestId } = renderWithContext(<SignUp />);
		expect(getByTestId("submit-button")).not.toBeNull();
	});

	it("disables the submit button when all form fields are not filled", () => {
		const { getByTestId } = renderWithContext(<SignUp />);
		const usernameField = getByTestId("username-field");
		const emailField = getByTestId("email-field");
		const passwordField = getByTestId("password-field");
		Testing.fireEvent.change(usernameField, { target: { value: "foobar" } });
		Testing.fireEvent.change(emailField, { target: { value: "foo@bar.com" } });
		Testing.fireEvent.change(passwordField, { target: { value: "password123" } });
		expect(getByTestId("username-field").value).toBe("foobar");
		expect(getByTestId("email-field").value).toBe("foo@bar.com");
		expect(getByTestId("password-field").value).toBe("password123");
		expect(getByTestId("password-confirmation-field").value).toBe("");
		expect(getByTestId("submit-button")).toBeDisabled();
	});

	it("enables the submit button when all form fields are filled", () => {
		const { getByTestId } = renderWithContext(<SignUp />);
		const usernameField = getByTestId("username-field");
		const emailField = getByTestId("email-field");
		const passwordField = getByTestId("password-field");
		const passwordConfirmationField = getByTestId("password-confirmation-field");
		Testing.fireEvent.change(usernameField, { target: { value: "foobar" } });
		Testing.fireEvent.change(emailField, { target: { value: "foo@bar.com" } });
		Testing.fireEvent.change(passwordField, { target: { value: "password123" } });
		Testing.fireEvent.change(passwordConfirmationField, {
			target: { value: "password123" },
		});
		expect(getByTestId("username-field").value).toBe("foobar");
		expect(getByTestId("email-field").value).toBe("foo@bar.com");
		expect(getByTestId("password-field").value).toBe("password123");
		expect(getByTestId("password-confirmation-field").value).toBe("password123");
		expect(getByTestId("submit-button")).not.toBeDisabled();
	});

	it("displays an error message when the passwords don't match", () => {
		const { getByTestId } = renderWithContext(<SignUp />);
		const usernameField = getByTestId("username-field");
		const emailField = getByTestId("email-field");
		const passwordField = getByTestId("password-field");
		const passwordConfirmationField = getByTestId("password-confirmation-field");
		Testing.fireEvent.change(usernameField, { target: { value: "foobar" } });
		Testing.fireEvent.change(emailField, { target: { value: "foo@bar.com" } });
		Testing.fireEvent.change(passwordField, { target: { value: "foo" } });
		Testing.fireEvent.change(passwordConfirmationField, { target: { value: "bar" } });
		Testing.fireEvent.click(getByTestId("submit-button"));
		expect(getByTestId("username-field").value).toBe("foobar");
		expect(getByTestId("email-field").value).toBe("foo@bar.com");
		expect(getByTestId("password-field").value).toBe("foo");
		expect(getByTestId("password-confirmation-field").value).toBe("bar");
		expect(getByTestId("error-message")).toHaveTextContent("Your passwords don't match.");
	});

	it("signs the user up", async () => {
		const { getByTestId } = renderWithContext(<SignUp />);
		const username = "foobar";
		const email = "foo@bar.com";
		const password = "password123";
		const passwordConfirmation = "password123";
		axiosMock.post.mockResolvedValueOnce({
			data: { id: 1, username, email },
		});
		const usernameField = getByTestId("username-field");
		const emailField = getByTestId("email-field");
		const passwordField = getByTestId("password-field");
		const passwordConfirmationField = getByTestId("password-confirmation-field");
		Testing.fireEvent.change(usernameField, { target: { value: username } });
		Testing.fireEvent.change(emailField, { target: { value: email } });
		Testing.fireEvent.change(passwordField, { target: { value: password } });
		Testing.fireEvent.change(passwordConfirmationField, {
			target: { value: passwordConfirmation },
		});
		Testing.fireEvent.click(getByTestId("submit-button"));
		expect(getByTestId("username-field").value).toBe(username);
		expect(getByTestId("email-field").value).toBe(email);
		expect(getByTestId("password-field").value).toBe(password);
		expect(getByTestId("password-confirmation-field").value).toBe(passwordConfirmation);
		expect(getByTestId("submit-button")).not.toBeDisabled();
		expect(axiosMock.post).toHaveBeenCalledTimes(1);
	});
});
