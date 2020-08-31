import * as React from "react";
import * as Testing from "@testing-library/react";

import * as Context from "@/context";
import * as Tests from "@/utils/tests";

import { ThemeButton } from "./theme-button";

describe("ThemeButton Component", () => {
	it("matches the snapshot", () => {
		const { asFragment } = Tests.renderWithContext(<ThemeButton />);

		expect(asFragment(<ThemeButton />)).toMatchSnapshot();
	});

	it("toggles the theme when the user clicks on it", () => {
		const ThemeButtonWithMode = () => {
			const { theme } = Context.Theme.useThemeContext();

			return (
				<React.Fragment>
					<ThemeButton />
					<div data-testid="mode">{theme.state.mode}</div>
				</React.Fragment>
			);
		};

		const themeButtonWithMode = Tests.renderWithContext(<ThemeButtonWithMode />);

		const mode = themeButtonWithMode.getByTestId(/mode/);
		expect(mode).toHaveTextContent(/light/);

		const themeButton = themeButtonWithMode.getByTestId(/theme button component/);
		Testing.fireEvent.click(themeButton);
		expect(mode).toHaveTextContent(/dark/);
	});
});
