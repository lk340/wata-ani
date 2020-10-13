import * as React from "react";
import axios from "axios";

import * as Context from "@/context";
import * as AxiosHelpers from "@/utils/api/axios-helpers";
import * as Colors from "@/utils/style/colors";

import * as Styled from "./pagination.styled";

import { Arrow as ArrowIcon } from "@/icons/pagination/arrow";

export const Pagination = () => {
	const { pagination } = Context.Pagination.usePaginationContext();
	const { currentPage, lastPage } = pagination.state;

	React.useEffect(() => {
		if (currentPage > lastPage) {
			pagination.setters.incrementLastPage();
		} else if (currentPage < firstPage && lastPage - 5 > 0) {
			pagination.setters.decrementLastPage();
		}
	}, [currentPage]);

	const firstPage = lastPage - 4;
	const secondPage = lastPage - 3;
	const thirdPage = lastPage - 2;
	const fourthPage = lastPage - 1;

	const isFirstPage = currentPage === firstPage;
	const isSecondPage = currentPage === secondPage;
	const isThirdPage = currentPage === thirdPage;
	const isFourthPage = currentPage === fourthPage;
	const isLastPage = currentPage === lastPage;

	const validateStatus = AxiosHelpers.validateStatus;

	async function goToPreviousPage(): Promise<void> {
		console.log("This is the previous page handler!");
		console.log("Previous:", pagination.state.previous);
		console.log("Next:", pagination.state.next);

		if (pagination.state.previous) {
			const response = await axios.get(pagination.state.previous, { validateStatus });

			pagination.setters.setPagination({
				posts: response.data.results,
				previous: response.data.previous,
				next: response.data.next,
			});
		}
	}

	async function goToNextPage(): Promise<void> {
		console.log("This is the next page handler!");
		console.log("Previous:", pagination.state.previous);
		console.log("Next:", pagination.state.next);

		if (pagination.state.next) {
			const response = await axios.get(pagination.state.next, { validateStatus });

			pagination.setters.setPagination({
				posts: response.data.results,
				previous: response.data.previous,
				next: response.data.next,
			});
		}
	}

	return (
		<Styled.Pagination>
			{/* Left Arrow */}
			{/* <Arrow flip={true} setCurrentPage={pagination.setters.decrementCurrentPage} /> */}
			<Arrow flip={true} nextPreviousPageHandler={goToPreviousPage} />

			{/* Pages */}
			<Styled.PaginationPages>
				<Page pageNumber={firstPage} isCurrentPage={isFirstPage} />
				<Page pageNumber={secondPage} isCurrentPage={isSecondPage} />
				<Page pageNumber={thirdPage} isCurrentPage={isThirdPage} />
				<Page pageNumber={fourthPage} isCurrentPage={isFourthPage} />
				<Page pageNumber={lastPage} isCurrentPage={isLastPage} />
			</Styled.PaginationPages>

			{/* Right Arrow */}
			{/* <Arrow flip={false} setCurrentPage={pagination.setters.incrementCurrentPage} /> */}
			<Arrow flip={false} nextPreviousPageHandler={goToNextPage} />
		</Styled.Pagination>
	);
};

// ============= //
// ↓↓↓ Arrow ↓↓↓ //
// ============= //

type ArrowProps = {
	flip: boolean;
	// setCurrentPage: React.MouseEventHandler;
	nextPreviousPageHandler: Function;
};

const Arrow = (props: ArrowProps) => {
	const { flip, nextPreviousPageHandler } = props;

	let arrowIconFill: string;
	if (localStorage.mode === "light") arrowIconFill = Colors.LIGHT.five;
	else arrowIconFill = Colors.DARK.five;

	return (
		<Styled.PaginationArrowContainer
			onClick={() => nextPreviousPageHandler()}
			flip={flip.toString()}
		>
			<ArrowIcon fill={arrowIconFill} width="20" />
		</Styled.PaginationArrowContainer>
	);
};

// ============ //
// ↓↓↓ Page ↓↓↓ //
// ============ //

type PageProps = {
	pageNumber: number;
	isCurrentPage: boolean;
};

const Page = (props: PageProps) => {
	const { pageNumber, isCurrentPage } = props;

	const { pagination } = Context.Pagination.usePaginationContext();

	return (
		<Styled.PaginationPagesNumber
			onClick={() => pagination.setters.setCurrentPage(pageNumber)}
			isCurrentPage={isCurrentPage.toString()}
		>
			{pageNumber}
		</Styled.PaginationPagesNumber>
	);
};
