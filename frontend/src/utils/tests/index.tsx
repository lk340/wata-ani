import * as React from "react";
import * as Testing from "@testing-library/react";
import * as Reach from "@reach/router";

import { Providers } from "@/context/providers";

export function renderWithContext(component: React.ReactNode) {
	return Testing.render(<Providers>{component}</Providers>);
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
