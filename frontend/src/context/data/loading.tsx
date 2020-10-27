import * as React from "react";

import * as Helpers from "@/context/helpers";

type State = {
	loading: boolean;
};

const initialState = Object.freeze<State>({
	loading: true,
});

export const useLoadingContext = Helpers.createUseContext(() => {
	const [loading, _setLoading] = React.useState<State>({ ...initialState });

	// =============== //
	// ↓↓↓ Getters ↓↓↓ //
	// =============== //

	// =============== //
	// ↓↓↓ Setters ↓↓↓ //
	// =============== //

	function setLoading(state: Partial<State>): void {
		_setLoading({ ...loading, ...state });
	}

	// ================ //
	// ↓↓↓ Handlers ↓↓↓ //
	// ================ //

	// =============== //
	// ↓↓↓ API ↓↓↓ //
	// =============== //

	// =============== //
	// ↓↓↓ Exports ↓↓↓ //
	// =============== //

	const state = loading;

	const getters = {};

	const setters = {
		setLoading,
	};

	const handlers = {};

	const api = {};

	return {
		loading: { state, getters, setters, handlers, api },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <useLoadingContext.Provider>{children}</useLoadingContext.Provider>;
};
