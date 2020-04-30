import * as React from "react";

import * as Helpers from "@/context/helpers";

type State = {
	message: string;
};

const initialState = Object.freeze<State>({
	message: "Gastby + TypeScript Starter",
});

export const useWelcomeContext = Helpers.createUseContext(() => {
	const [welcome, _setWelcome] = React.useState<State>({ ...initialState });

	// --- Getters --- //

	// --- Setters --- //
	const setWelcome = (state: Partial<State>) => _setWelcome({ ...welcome, ...state });

	// --- Handlers --- //

	// --- Exports --- //
	const state = welcome;

	const getters = {};

	const setters = {
		setWelcome,
	};

	const handlers = {};

	return {
		welcome: { state, getters, setters, handlers },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <useWelcomeContext.Provider>{children}</useWelcomeContext.Provider>;
};
