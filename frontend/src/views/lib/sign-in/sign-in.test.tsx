import * as React from "react";
import * as Testing from "@testing-library/react";

import * as Tests from "@/utils/tests";

import { SignIn } from "./sign-in";

describe("SignIn Component", () => {
	it("matches the snapshot", () => {
		const { asFragment } = Tests.renderWithContext(<SignIn />);

		expect(asFragment(<SignIn />)).toMatchSnapshot();
	});
});
