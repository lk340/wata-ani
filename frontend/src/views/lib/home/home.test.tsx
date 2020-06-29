import * as React from "react";
import * as Testing from "@testing-library/react";

import { Providers } from "@/context/providers";

import { Home } from "./home";

function renderWithContext(component: React.ReactNode) {
	return Testing.render(<Providers>{component}</Providers>);
}

describe("Home Component", () => {
	it("matches the snapshot", () => {
		const { asFragment } = renderWithContext(<Home />);

		expect(asFragment(<Home />)).toMatchSnapshot();
	});
});
