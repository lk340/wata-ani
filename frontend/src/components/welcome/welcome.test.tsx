import * as React from "react";
import * as Testing from "@testing-library/react";

import { Providers } from "@/context/providers";

import { Welcome } from "./welcome";

function renderWithContext(component: React.ReactNode) {
	return Testing.render(<Providers>{component}</Providers>);
}

describe("Welcome Component", () => {
	it("matches the snapshot", () => {
		const { asFragment } = renderWithContext(<Welcome />);
		expect(asFragment(<Welcome />)).toMatchSnapshot();
	});

	it(`has initial message "Gatsby + TypeScript Starter"`, () => {
		const { getByTestId } = renderWithContext(<Welcome />);
		expect(getByTestId("hello")).toHaveTextContent("Gastby + TypeScript Starter");
	});
});
