import * as React from "react";

import * as Helpers from "@/context/helpers";

export type Mode = "light" | "dark";

type State = {
	mode: Mode;
};

const initialState = Object.freeze<State>({
	mode: "light",
});

export const useThemeContext = Helpers.createUseContext(() => {
	const [theme, _setTheme] = React.useState<State>({ ...initialState });

	// =============== //
	// ↓↓↓ Setters ↓↓↓ //
	// =============== //

	const setTheme = (state: Partial<State>) => _setTheme({ ...theme, ...state });

	function toggleMode(): void {
		localStorage.mode = localStorage.mode === "light" ? "dark" : "light";
		setTheme({ mode: localStorage.mode });
	}

	// =============== //
	// ↓↓↓ Exports ↓↓↓ //
	// =============== //

	const state = theme;

	const setters = {
		setTheme,
		toggleMode,
	};

	return {
		theme: { state, setters },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <useThemeContext.Provider>{children}</useThemeContext.Provider>;
};
