import * as React from "react";
import * as Testing from "@testing-library/react";

import * as Tests from "@/utils/tests";

import { Navbar } from "./navbar";

describe("Navbar Component", () => {
	it("matches the snapshot", () => {
		const { asFragment } = Tests.renderWithContext(<Navbar />);

		expect(asFragment(<Navbar />)).toMatchSnapshot();
	});
});
