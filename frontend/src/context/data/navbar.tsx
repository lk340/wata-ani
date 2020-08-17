import * as React from "react";

import * as Helpers from "@/context/helpers";

type State = {
	likes: boolean;
	create: boolean;
	search: boolean;
	settings: boolean;
	iconFill: string;
};

const initialState = Object.freeze<State>({
	likes: false,
	create: false,
	search: false,
	settings: false,
	iconFill: "",
});

export const useNavbarContext = Helpers.createUseContext(() => {
	const [navbar, _setNavbar] = React.useState<State>({ ...initialState });

	// =============== //
	// ↓↓↓ Setters ↓↓↓ //
	// =============== //

	const setNavbar = (state: Partial<State>) => _setNavbar({ ...navbar, ...state });

	const toggleLikes = (): void => setNavbar({ likes: !navbar.likes });

	const toggleCreate = (): void => setNavbar({ create: !navbar.create });

	const toggleSearch = (): void => setNavbar({ search: !navbar.search });

	const toggleSettings = (): void => setNavbar({ settings: !navbar.settings });

	const setFill = (fillColor: string): void => setNavbar({ iconFill: fillColor });

	// =============== //
	// ↓↓↓ Exports ↓↓↓ //
	// =============== //

	const state = navbar;

	const getters = {};

	const setters = {
		setNavbar,
		toggleLikes,
		toggleCreate,
		toggleSearch,
		toggleSettings,
		setFill,
	};

	const handlers = {};

	const api = {};

	return {
		navbar: { state, getters, setters, handlers, api },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <useNavbarContext.Provider>{children}</useNavbarContext.Provider>;
};
