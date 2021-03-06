import * as React from "react";

import * as Helpers from "@/context/helpers";

type State = {
	pathname: string;
};

const initialState = Object.freeze<State>({
	pathname: "",
});

export const useLocationContext = Helpers.createUseContext(() => {
	const [location, _setLocation] = React.useState<State>({ ...initialState });

	// =============== //
	// ↓↓↓ Setters ↓↓↓ //
	// =============== //

	const setLocation = (state: Partial<State>) => _setLocation({ ...location, ...state });

	// =============== //
	// ↓↓↓ Exports ↓↓↓ //
	// =============== //

	const state = location;

	const setters = {
		setLocation,
	};

	return {
		location: { state, setters },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <useLocationContext.Provider>{children}</useLocationContext.Provider>;
};
