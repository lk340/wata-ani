import * as React from "react";

import * as Helpers from "@/context/helpers";

type State = {
	x: number;
	y: number;
};

const initialState = Object.freeze<State>({
	x: 0,
	y: 0,
});

export const useWindowScrollContext = Helpers.createUseContext(() => {
	const [windowScroll, _setWindowScroll] = React.useState<State>({ ...initialState });

	// --- Getters --- //
	const getWindowScrollXYPositions = (): State => ({ ...windowScroll });
	const getWindowScrollXPosition = (): number => windowScroll.x;
	const getWindowScrollYPosition = (): number => windowScroll.y;

	// --- Setters --- //
	const setWindowScroll = (state: Partial<State>) =>
		_setWindowScroll({ ...windowScroll, ...state });

	// --- Exports --- //
	const state = windowScroll;

	const getters = {
		getWindowScrollXYPositions,
		getWindowScrollXPosition,
		getWindowScrollYPosition,
	};

	const setters = {
		setWindowScroll,
	};

	return {
		windowScroll: { state, getters, setters },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <useWindowScrollContext.Provider>{children}</useWindowScrollContext.Provider>;
};
