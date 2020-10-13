import * as React from "react";

import * as Helpers from "@/context/helpers";
import * as Actions from "@/redux/actions";

type State = {
	postResults: Actions.Posts.Post[];
	currentPage: number;
	lastPage: number;
	maxPage: number;
	previous: string | null;
	next: string | null;
};

const initialState = Object.freeze<State>({
	postResults: [],
	currentPage: 1,
	lastPage: 5,
	maxPage: 0,
	previous: null,
	next: null,
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

	function setLastPage(resultPaginationCount: number, resultTotalCount: number): void {
		const maxPageCount = Math.ceil(resultTotalCount / resultPaginationCount);
		setPagination({ lastPage: maxPageCount });
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
		setLastPage,
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
