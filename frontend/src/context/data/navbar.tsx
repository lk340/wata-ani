import * as React from "react";

import * as Helpers from "@/context/helpers";

export type Options = "home" | "likes" | "create" | "search" | "settings" | "profile";

type State = {
	home: boolean;
	likes: boolean;
	create: boolean;
	search: boolean;
	settings: boolean;
	profile: boolean;
	iconFill: string;
	hamburgerOpen: boolean;
};

const initialState = Object.freeze<State>({
	home: false,
	likes: false,
	create: false,
	search: false,
	settings: false,
	profile: false,
	iconFill: "",
	hamburgerOpen: false,
});

export const useNavbarContext = Helpers.createUseContext(() => {
	const [navbar, _setNavbar] = React.useState<State>({ ...initialState });

	// =============== //
	// ↓↓↓ Setters ↓↓↓ //
	// =============== //

	const setNavbar = (state: Partial<State>) => _setNavbar({ ...navbar, ...state });

	function toggleOption(option: Options): void {
		setNavbar({ [option]: !navbar[option], home: false, profile: false });
	}

	function setHome(): void {
		setNavbar({ home: true, profile: false });
	}

	function setProfile(): void {
		setNavbar({ home: false, profile: true });
	}

	const setIconFill = (fillColor: string): void => setNavbar({ iconFill: fillColor });

	function toggleHamburgerOpen(): void {
		setNavbar({ hamburgerOpen: !navbar.hamburgerOpen });
	}

	// =============== //
	// ↓↓↓ Exports ↓↓↓ //
	// =============== //

	const state = navbar;

	const getters = {};

	const setters = {
		setNavbar,
		toggleOption,
		setHome,
		setProfile,
		setIconFill,
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
