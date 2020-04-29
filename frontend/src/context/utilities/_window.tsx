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

export const useWindowContext = Helpers.createUseContext(() => {
	const [window, _setWindow] = React.useState<State>({ ...initialState });

	// --- Getters --- //
	const getWindowSize = (): State => ({ ...window });
	const getWindowWidth = (): number => window.width;
	const getWindowHeight = (): number => window.height;

	// --- Setters --- //
	const setWindow = (state: Partial<State>) => _setWindow({ ...window, ...state });

	// --- Exports --- //
	const state = window;

	const getters = {
		getWindowSize,
		getWindowWidth,
		getWindowHeight,
	};

	const setters = {
		setWindow,
	};

	return {
		window: { state, getters, setters },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <useWindowContext.Provider>{children}</useWindowContext.Provider>;
};
