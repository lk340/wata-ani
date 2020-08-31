import * as React from "react";
import * as ReactRedux from "react-redux";
import * as Testing from "@testing-library/react";
import axios from "axios";

import * as Actions from "@/redux/actions";
import * as Tests from "@/utils/tests";

import { SignIn } from "./sign-in";

jest.mock("axios");

describe("SignIn Component", () => {
	it("matches the snapshot", () => {
		const { asFragment } = Tests.renderWithContext(<SignIn />);

		expect(asFragment(<SignIn />)).toMatchSnapshot();
	});

	it("renders the Username Or Email field", () => {
		const signIn = Tests.renderWithContext(<SignIn />);

		const usernameOrEmailField = signIn.getByPlaceholderText(/\*Username or Email/);
		expect(usernameOrEmailField).not.toBe(null);
	});

	it("renders the Password field", () => {
		const signIn = Tests.renderWithContext(<SignIn />);

		const passwordField = signIn.getByPlaceholderText(/\*Password/);
		expect(passwordField).not.toBe(null);
	});

	it("renders the submit button", () => {
		const signIn = Tests.renderWithContext(<SignIn />);

		const submitButton = signIn.getByRole("button", { name: /Sign In/ });
		expect(submitButton).not.toBe(null);
	});

	it("renders the redirect link", () => {
		const signIn = Tests.renderWithContext(<SignIn />);

		const question = signIn.getByText(/Need an account\?/);
		expect(question).not.toBe(null);

		const registerLink = signIn.getByRole("link", { name: /Register/ });
		expect(registerLink).not.toBe(null);
	});

	it("signs in the user", async () => {
		const SignInWithSignOut = () => {
			const dispatch = ReactRedux.useDispatch();

			const signOut = () => Actions.Session.signOut(dispatch);

			return (
				<React.Fragment>
					<SignIn />
					<button onClick={signOut}>Sign Out</button>
				</React.Fragment>
			);
		};

		const signInWithSignOut = Tests.renderWithContext(<SignInWithSignOut />);

		const registerData = {
			username: "foobar",
			email: "foo@bar.com",
			password1: "newyorkstateofmind",
			password2: "newyorkstateofmind",
		};

		const signInData = {
			username: "foobar",
			password: "newyorkstateofmind",
		};

		await axios.post("/auth/registration/", registerData);

		const usernameOrEmailField = signInWithSignOut.getByPlaceholderText(
			/\*Username or Email/,
		);
		expect(usernameOrEmailField).not.toBe(null);

		const passwordField = signInWithSignOut.getByPlaceholderText(/\*Password/);
		expect(passwordField).not.toBe(null);

		const submitButton = signInWithSignOut.getByRole("button", { name: /Sign In/ });
		expect(submitButton).not.toBe(null);

		Testing.fireEvent.change(usernameOrEmailField, {
			target: { value: signInData.username },
		});

		Testing.fireEvent.change(passwordField, {
			target: { value: signInData.password },
		});

		Testing.fireEvent.click(submitButton);
	});
});
