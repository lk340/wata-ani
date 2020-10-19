import * as React from "react";

import * as Context from "@/context";
import * as Colors from "@/utils/style/colors";

import * as Styled from "./pagination.styled";

import { Arrow as ArrowIcon } from "@/icons/pagination/arrow";

export const Pagination = () => {
	const { pagination } = Context.Pagination.usePaginationContext();
	const { currentPage, lastPage } = pagination.state;

	// console.log("Current Page:", pagination.state.currentPage);
	// console.log("Last Page:", pagination.state.lastPage);
	// console.log("Max Page:", pagination.state.maxPage);
	// console.log("Previous Link:", pagination.state.previous);
	// console.log("Next Link:", pagination.state.next);
	// console.log("===================================================");

	// Automatically increments the five page values depending on whether or not
	// pagination.state.currentPage goes beyond pagination.state.lastPage or lower
	// than the lowest page.
	React.useEffect(() => {
		const firstPage = lastPage - 4;
		if (currentPage > lastPage) {
			pagination.setters.incrementLastPage();
		} else if (currentPage < firstPage && lastPage - 5 > 0) {
			pagination.setters.decrementLastPage();
		}
	}, [currentPage]);

	// Automatically increments/decrements current page group (our group of five pages),
	// depending on the last page value.
	React.useEffect(() => {
		pagination.setters.setPagination({
			currentPageGroup: pagination.state.lastPage / 5 - 1,
		});
	}, [lastPage]);

	// pageGroup is an array that contains our five <Page /> components, as we'd only like
	// to show five pages at a time in the pagination UI.
	// pageGroups is an array that contains pageGroup arrays. We'll use this to render the
	// correct page numbers in the pagination UI.
	const pageGroups = [];
	let pageGroup: React.ReactNode[] = [];
	for (let pageNumber = 1; pageNumber <= pagination.state.maxPage; pageNumber++) {
		if (pageGroup.length === 5) {
			pageGroups.push(pageGroup);
			pageGroup = [];
		} else {
			pageGroup.push(
				<React.Fragment key={`pagination-${pageNumber}`}>
					<Page pageNumber={pageNumber} />
				</React.Fragment>,
			);
		}
	}

	if (pageGroup.length < 5) pageGroups.push(pageGroup);

	return (
		<Styled.Pagination>
			{/* Left Arrow */}
			<Arrow flip={true} nextPreviousPageHandler={pagination.api.goToPreviousPage} />

			{/* Pages */}
			<Styled.PaginationPages>
				{pageGroups[pagination.state.currentPageGroup]}
			</Styled.PaginationPages>

			{/* Right Arrow */}
			<Arrow flip={false} nextPreviousPageHandler={pagination.api.goToNextPage} />
		</Styled.Pagination>
	);
};

// ============= //
// ↓↓↓ Arrow ↓↓↓ //
// ============= //

type ArrowProps = {
	flip: boolean;
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

type PageProps = { pageNumber: number };

const Page = (props: PageProps) => {
	const { pagination } = Context.Pagination.usePaginationContext();

	const isCurrentPage = props.pageNumber === pagination.state.currentPage;

	return (
		<Styled.PaginationPagesNumber
			// onClick={() => pagination.setters.setCurrentPage(props.pageNumber)}
			onClick={() => pagination.api.handlePageClick(props.pageNumber)}
			isCurrentPage={isCurrentPage.toString()}
		>
			{props.pageNumber}
		</Styled.PaginationPagesNumber>
	);
};
