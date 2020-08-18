import * as React from "react";

import * as Helpers from "@/context/helpers";

export type Options =
	| ""
	| "home"
	| "likes"
	| "create"
	| "search"
	| "settings"
	| "profile";

type State = {
	option: Options;
	iconFill: string;
	hamburgerOpen: boolean;
};

const initialState = Object.freeze<State>({
	option: "",
	iconFill: "",
	hamburgerOpen: false,
});

export const useNavbarContext = Helpers.createUseContext(() => {
	const [navbar, _setNavbar] = React.useState<State>({ ...initialState });

	// =============== //
	// ↓↓↓ Setters ↓↓↓ //
	// =============== //

	const setNavbar = (state: Partial<State>) => _setNavbar({ ...navbar, ...state });

	function setOption(option: Options): void {
		return setNavbar({
			option,
			hamburgerOpen: false,
		});
	}

	const setFill = (fillColor: string): void => setNavbar({ iconFill: fillColor });

	const toggleHamburgerOpen = (): void =>
		setNavbar({ hamburgerOpen: !navbar.hamburgerOpen });

	// =============== //
	// ↓↓↓ Exports ↓↓↓ //
	// =============== //

	const state = navbar;

	const getters = {};

	const setters = {
		setNavbar,
		setOption,
		setFill,
		toggleHamburgerOpen,
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
