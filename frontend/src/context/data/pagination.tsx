import * as React from "react";
import axios from "axios";

import * as Helpers from "@/context/helpers";
import * as Actions from "@/redux/actions";
import * as AxiosHelpers from "@/utils/api/axios-helpers";

type State = {
	postResults: Actions.Posts.Post[];
	currentPage: number;
	currentPageGroup: number;
	lastPage: number;
	maxPage: number;
	previous: string | null;
	next: string | null;
};

const initialState = Object.freeze<State>({
	postResults: [],
	currentPage: 1,
	currentPageGroup: 0,
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

	// =============== //
	// ↓↓↓ Handlers ↓↓↓ //
	// =============== //

	// =============== //
	// ↓↓↓ API ↓↓↓ //
	// =============== //

	const validateStatus = AxiosHelpers.validateStatus;

	async function goToPreviousPage(): Promise<void> {
		if (pagination.previous) {
			const response = await axios.get(pagination.previous, { validateStatus });

			setPagination({
				postResults: response.data.results,
				currentPage: pagination.currentPage - 1,
				previous: response.data.previous,
				next: response.data.next,
			});

			window.scrollTo(0, 0);
		}
	}

	async function goToNextPage(): Promise<void> {
		if (pagination.next) {
			const response = await axios.get(pagination.next, { validateStatus });

			setPagination({
				postResults: response.data.results,
				currentPage: pagination.currentPage + 1,
				previous: response.data.previous,
				next: response.data.next,
			});

			window.scrollTo(0, 0);
		}
	}

	async function handlePageClick(pageNumber: number): Promise<void> {
		let endpoint = "";

		if (pageNumber === 1) {
			endpoint = "/api/posts/descending/?limit=12";
		} else if (pageNumber > 1) {
			const multiplier = pageNumber - 1;
			endpoint = `/api/posts/descending/?limit=12&offset=${12 * multiplier}`;
		}

		if (endpoint.includes("api")) {
			const response = await axios.get(endpoint, { validateStatus });

			setPagination({
				postResults: response.data.results,
				currentPage: pageNumber,
				previous: response.data.previous,
				next: response.data.next,
			});

			window.scrollTo(0, 0);
		}
	}

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

	const api = {
		goToPreviousPage,
		goToNextPage,
		handlePageClick,
	};

	return {
		pagination: { state, getters, setters, handlers, api },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <usePaginationContext.Provider>{children}</usePaginationContext.Provider>;
};
