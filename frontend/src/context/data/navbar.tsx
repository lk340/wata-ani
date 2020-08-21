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

	function setHomeOn(): void {
		setNavbar({
			home: true,
			likes: false,
			create: false,
			search: false,
			settings: false,
			profile: false,
		});
	}

	function setProfileOn(): void {
		setNavbar({
			home: false,
			likes: false,
			create: false,
			search: false,
			settings: false,
			profile: true,
		});
	}

	function toggleLikes(): void {
		setNavbar({
			home: !!navbar.likes,
			likes: !navbar.likes,
			create: false,
			search: false,
			settings: false,
			profile: false,
		});
	}

	function toggleCreate(): void {
		setNavbar({
			home: !!navbar.create,
			likes: false,
			create: !navbar.create,
			search: false,
			settings: false,
			profile: false,
		});
	}

	function toggleSearch(): void {
		setNavbar({
			home: !!navbar.search,
			likes: false,
			create: false,
			search: !navbar.search,
			settings: false,
			profile: false,
			hamburgerOpen: false,
		});
	}

	function toggleSettings(): void {
		setNavbar({
			home: !!navbar.settings,
			likes: false,
			create: false,
			search: false,
			settings: !navbar.settings,
			profile: false,
			hamburgerOpen: false,
		});
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
		setHomeOn,
		setProfileOn,
		toggleLikes,
		toggleCreate,
		toggleSearch,
		toggleSettings,
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
