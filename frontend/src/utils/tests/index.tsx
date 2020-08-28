import * as React from "react";
import * as ReactRedux from "react-redux";
import * as Testing from "@testing-library/react";
import * as Reach from "@reach/router";

import { Providers } from "@/context/providers";
import store from "@/redux/store";

export function renderWithContext(component: React.ReactNode) {
	return Testing.render(
		<ReactRedux.Provider store={store()}>
			<Providers>{component}</Providers>
		</ReactRedux.Provider>,
	);
}

export const WithLocation = (component: React.ReactNode) => {
	return (
		<Reach.Location>
			{({ location }) => (
				<div>
					{component}
					<div data-testid="location">{location.pathname}</div>
				</div>
			)}
		</Reach.Location>
	);
};
