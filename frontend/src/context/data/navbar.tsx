import * as React from "react";

import * as Helpers from "@/context/helpers";

type Modal = "likes" | "create" | "search" | "settings";

type State = {
	likes: boolean;
	create: boolean;
	search: boolean;
	settings: boolean;
	iconFill: string;
	hamburgerOpen: boolean;
};

const initialState = Object.freeze<State>({
	likes: false,
	create: false,
	search: false,
	settings: false,
	iconFill: "",
	hamburgerOpen: false,
});

export const useNavbarContext = Helpers.createUseContext(() => {
	const [navbar, _setNavbar] = React.useState<State>({ ...initialState });

	// =============== //
	// ↓↓↓ Setters ↓↓↓ //
	// =============== //

	const setNavbar = (state: Partial<State>) => _setNavbar({ ...navbar, ...state });

	function toggleLikes(): void {
		setNavbar({
			likes: !navbar.likes,
			create: false,
			search: false,
			settings: false,
		});
	}

	function toggleCreate(): void {
		setNavbar({
			likes: false,
			create: !navbar.create,
			search: false,
			settings: false,
		});
	}

	function toggleSearch(): void {
		setNavbar({
			likes: false,
			create: false,
			search: !navbar.search,
			settings: false,
		});
	}

	function toggleSettings(): void {
		setNavbar({
			likes: false,
			create: false,
			search: false,
			settings: !navbar.settings,
		});
	}

	const setFill = (fillColor: string): void => setNavbar({ iconFill: fillColor });

	const toggleHamburgerOpen = (): void => setNavbar({ hamburgerOpen: !navbar.hamburgerOpen });

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
