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

	console.log("Current Page:", pagination.state.currentPage);
	console.log("Last Page:", pagination.state.lastPage);
	console.log("Max Page:", pagination.state.maxPage);
	console.log("Previous Link:", pagination.state.previous);
	console.log("Next Link:", pagination.state.next);
	console.log("===================================================");

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

	return (
		<Styled.Pagination>
			{/* Left Arrow */}
			{/* <Arrow flip={true} setCurrentPage={pagination.setters.decrementCurrentPage} /> */}
			<Arrow flip={true} nextPreviousPageHandler={pagination.api.goToPreviousPage} />

			{/* Pages */}
			<Styled.PaginationPages>
				<Page pageNumber={firstPage} />
				<Page pageNumber={secondPage} />
				<Page pageNumber={thirdPage} />
				<Page pageNumber={fourthPage} />
				<Page pageNumber={lastPage} />
			</Styled.PaginationPages>

			{/* Right Arrow */}
			{/* <Arrow flip={false} setCurrentPage={pagination.setters.incrementCurrentPage} /> */}
			<Arrow flip={false} nextPreviousPageHandler={pagination.api.goToNextPage} />
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
};

const Page = (props: PageProps) => {
	const { pageNumber } = props;

	const { pagination } = Context.Pagination.usePaginationContext();

	const isCurrentPage = pageNumber === pagination.state.currentPage;

	return (
		<Styled.PaginationPagesNumber
			onClick={() => pagination.setters.setCurrentPage(pageNumber)}
			isCurrentPage={isCurrentPage.toString()}
		>
			{pageNumber}
		</Styled.PaginationPagesNumber>
	);
};
