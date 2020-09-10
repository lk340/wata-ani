import * as React from "react";

import * as Helpers from "@/context/helpers";

type State = {
	currentPage: number;
	lastPage: number;
};

const initialState = Object.freeze<State>({
	currentPage: 1,
	lastPage: 5,
});

export const usePaginationContext = Helpers.createUseContext(() => {
	const [pagination, _setPagination] = React.useState<State>({ ...initialState });
	const { currentPage, lastPage } = pagination;

	// =============== //
	// ↓↓↓ Getters ↓↓↓ //
	// =============== //

	// =============== //
	// ↓↓↓ Setters ↓↓↓ //
	// =============== //

	const setPagination = (state: Partial<State>) =>
		_setPagination({ ...pagination, ...state });

	function incrementLastPage(): void {
		setPagination({ lastPage: lastPage + 5 });
	}

	function decrementLastPage(): void {
		setPagination({ lastPage: lastPage - 5 });
	}

	function incrementCurrentPage(): void {
		setPagination({ currentPage: currentPage + 1 });
	}

	function decrementCurrentPage(): void {
		setPagination({ currentPage: currentPage - 1 < 1 ? 1 : currentPage - 1 });
	}

	function setCurrentPage(currentPage: number): void {
		setPagination({ currentPage });
	}

	// =============== //
	// ↓↓↓ Handlers ↓↓↓ //
	// =============== //

	// =============== //
	// ↓↓↓ API ↓↓↓ //
	// =============== //

	// =============== //
	// ↓↓↓ Exports ↓↓↓ //
	// =============== //

	const state = pagination;

	const getters = {};

	const setters = {
		setPagination,
		incrementLastPage,
		decrementLastPage,
		incrementCurrentPage,
		decrementCurrentPage,
		setCurrentPage,
	};

	const handlers = {};

	const api = {};

	return {
		pagination: { state, getters, setters, handlers, api },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <usePaginationContext.Provider>{children}</usePaginationContext.Provider>;
};
