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
	// ↓↓↓ Getters ↓↓↓ //
	// =============== //

	const getMode = (): Mode => theme.mode;

	// =============== //
	// ↓↓↓ Setters ↓↓↓ //
	// =============== //

	const setTheme = (state: Partial<State>) => _setTheme({ ...theme, ...state });

	const setMode = (mode: Mode): void => setTheme({ mode });

	function toggleMode(): void {
		if (localStorage.mode) {
			setModeBrowser(localStorage.mode === "light" ? "dark" : "light");
			setTheme({ mode: localStorage.mode });
		} else {
			localStorage.mode = theme.mode;
		}
	}

	function setModeBrowser(mode: Mode): void {
		localStorage.mode = mode;
	}

	// =============== //
	// ↓↓↓ Exports ↓↓↓ //
	// =============== //

	const state = theme;

	const getters = {
		getMode,
	};

	const setters = {
		setTheme,
		setMode,
		toggleMode,
		setModeBrowser,
	};

	return {
		theme: { state, getters, setters },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <useThemeContext.Provider>{children}</useThemeContext.Provider>;
};
