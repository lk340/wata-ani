import * as React from "react";

import * as Helpers from "@/context/helpers";
import * as Constants from "@/utils/style/constants";

export type Device = keyof Constants.Breakpoints;
type Mode = "light" | "dark";

type State = {
	device: Device;
	mode: Mode;
};

const initialState = Object.freeze<State>({
	device: "desktop",
	mode: "light",
});

export const useThemeContext = Helpers.createUseContext(() => {
	const [theme, _setTheme] = React.useState<State>({ ...initialState });

	// =============== //
	// ↓↓↓ Getters ↓↓↓ //
	// =============== //

	const getDevice = (): Device => theme.device;
	const getMode = (): Mode => theme.mode;

	// =============== //
	// ↓↓↓ Setters ↓↓↓ //
	// =============== //

	const setTheme = (state: Partial<State>) => _setTheme({ ...theme, ...state });
	const setDevice = (device: Device): void => setTheme({ device });
	const setMode = (mode: Mode): void => setTheme({ mode });

	// =============== //
	// ↓↓↓ Exports ↓↓↓ //
	// =============== //

	const state = theme;

	const getters = {
		getDevice,
		getMode,
	};

	const setters = {
		setTheme,
		setDevice,
		setMode,
	};

	return {
		theme: { state, getters, setters },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <useThemeContext.Provider>{children}</useThemeContext.Provider>;
};
