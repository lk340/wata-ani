import * as React from "react";
import * as Testing from "@testing-library/react";

import * as Tests from "@/utils/tests";

import { Register } from "./register";

describe("Register Component", () => {
	it("matches the snapshot", () => {
		const { asFragment } = Tests.renderWithContext(<Register />);

		expect(asFragment(<Register />)).toMatchSnapshot();
	});
});
