import * as React from "react";

import * as Helpers from "@/context/helpers";

type State = {
	width: number;
	height: number;
};

const initialState = Object.freeze<State>({
	width: 0,
	height: 0,
});

export const useWindowsContext = Helpers.createUseContext(() => {
	const [windows, _setWindows] = React.useState<State>({ ...initialState });

	// =============== //
	// ↓↓↓ Getters ↓↓↓ //
	// =============== //

	const getWindowsSize = (): State => ({ ...windows });
	const getWindowsWidth = (): number => windows.width;
	const getWindowsHeight = (): number => windows.height;

	// =============== //
	// ↓↓↓ Setters ↓↓↓ //
	// =============== //

	const setWindows = (state: Partial<State>) => _setWindows({ ...windows, ...state });

	// =============== //
	// ↓↓↓ Exports ↓↓↓ //
	// =============== //

	const state = windows;

	const getters = {
		getWindowsSize,
		getWindowsWidth,
		getWindowsHeight,
	};

	const setters = {
		setWindows,
	};

	return {
		windows: { state, getters, setters },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <useWindowsContext.Provider>{children}</useWindowsContext.Provider>;
};
