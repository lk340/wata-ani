import * as React from "react";
import * as ReactRedux from "react-redux";
import * as Testing from "@testing-library/react";

import { Providers } from "@/context/providers";
import store from "@/redux/store";

import { Home } from "./home";

function renderWithContext(component: React.ReactNode) {
	return Testing.render(<Providers>{component}</Providers>);
}

describe("Home Component", () => {
	it("matches the snapshot", () => {
		const { asFragment } = renderWithContext(
			<ReactRedux.Provider store={store()}>
				<Home />
			</ReactRedux.Provider>,
		);

		expect(asFragment(<Home />)).toMatchSnapshot();
	});

	it("renders the navbar component", () => {
		const home = renderWithContext(
			<ReactRedux.Provider store={store()}>
				<Home />
			</ReactRedux.Provider>,
		);
	});

	it("renders the navbar mobile component", () => {
		const home = renderWithContext(
			<ReactRedux.Provider store={store()}>
				<Home />
			</ReactRedux.Provider>,
		);
	});
});
