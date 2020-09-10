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
		localStorage.lastPage = lastPage;
	}

	function decrementLastPage(): void {
		setPagination({ lastPage: lastPage - 5 });
		localStorage.lastPage = lastPage;
	}

	function incrementCurrentPage(): void {
		setPagination({ currentPage: currentPage + 1 });
		localStorage.currentPage = currentPage;
	}

	function decrementCurrentPage(): void {
		setPagination({ currentPage: currentPage - 1 < 1 ? 1 : currentPage - 1 });
		localStorage.currentPage = currentPage;
	}

	function setCurrentPage(currentPage: number): void {
		setPagination({ currentPage });
		localStorage.currentPage = currentPage;
	}

	// =============== //
	// ↓↓↓ Handlers ↓↓↓ //
	// =============== //

	React.useEffect(() => {
		if (!localStorage.lastPage && !localStorage.currentPage) {
			localStorage.lastPage = lastPage;
			localStorage.currentPage = currentPage;
		} else {
			setPagination({
				currentPage: Number(localStorage.currentPage),
				lastPage: Number(localStorage.lastPage),
			});
		}
	}, []);

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
