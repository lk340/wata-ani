import * as React from "react";
import * as Testing from "@testing-library/react";

import * as Tests from "@/utils/tests";

import { NavbarModalPartial } from "./navbar-modal-partial";

describe("NavbarModalPartial Component", () => {
	it("matches the snapshot", () => {
		const { asFragment } = Tests.renderWithContext(<NavbarModalPartial />);

		expect(asFragment(<NavbarModalPartial />)).toMatchSnapshot();
	});
});
