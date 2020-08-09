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

export const useMouseContext = Helpers.createUseContext(() => {
	const [mouse, _setMouse] = React.useState<State>({ ...initialState });

	// =============== //
	// ↓↓↓ Getters ↓↓↓ //
	// =============== //

	const getMouseXYPosition = (): State => ({ ...mouse });
	const getMouseXPosition = (): number => mouse.x;
	const getMouseYPosition = (): number => mouse.y;

	// =============== //
	// ↓↓↓ Setters ↓↓↓ //
	// =============== //

	const setMouse = (state: Partial<State>) => _setMouse({ ...mouse, ...state });

	// =============== //
	// ↓↓↓ Exports ↓↓↓ //
	// =============== //

	const state = mouse;

	const getters = {
		getMouseXYPosition,
		getMouseXPosition,
		getMouseYPosition,
	};

	const setters = {
		setMouse,
	};

	return {
		mouse: { state, getters, setters },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <useMouseContext.Provider>{children}</useMouseContext.Provider>;
};
