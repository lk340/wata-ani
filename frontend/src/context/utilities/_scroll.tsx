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

export const useScrollContext = Helpers.createUseContext(() => {
	const [scroll, _setScroll] = React.useState<State>({ ...initialState });

	// =============== //
	// ↓↓↓ Getters ↓↓↓ //
	// =============== //

	const getScrollXYPositions = (): State => ({ ...scroll });
	const getScrollXPosition = (): number => scroll.x;
	const getScrollYPosition = (): number => scroll.y;

	// =============== //
	// ↓↓↓ Setters ↓↓↓ //
	// =============== //

	const setScroll = (state: Partial<State>) =>
		_setScroll({ ...scroll, ...state });

	// =============== //
	// ↓↓↓ Exports ↓↓↓ //
	// =============== //

	const state = scroll;

	const getters = {
		getScrollXYPositions,
		getScrollXPosition,
		getScrollYPosition,
	};

	const setters = {
		setScroll,
	};

	return {
		scroll: { state, getters, setters },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <useScrollContext.Provider>{children}</useScrollContext.Provider>;
};
