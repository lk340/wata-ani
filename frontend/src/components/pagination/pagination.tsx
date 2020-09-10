import * as React from "react";

import * as Context from "@/context";
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

	return (
		<Styled.Pagination>
			{/* Left Arrow */}
			<Arrow flip={true} setCurrentPage={pagination.setters.decrementCurrentPage} />

			{/* Pages */}
			<Styled.PaginationPages>
				<Page pageNumber={firstPage} isCurrentPage={isFirstPage} />
				<Page pageNumber={secondPage} isCurrentPage={isSecondPage} />
				<Page pageNumber={thirdPage} isCurrentPage={isThirdPage} />
				<Page pageNumber={fourthPage} isCurrentPage={isFourthPage} />
				<Page pageNumber={lastPage} isCurrentPage={isLastPage} />
			</Styled.PaginationPages>

			{/* Right Arrow */}
			<Arrow flip={false} setCurrentPage={pagination.setters.incrementCurrentPage} />
		</Styled.Pagination>
	);
};

// ============= //
// ↓↓↓ Arrow ↓↓↓ //
// ============= //

type ArrowProps = {
	flip: boolean;
	setCurrentPage: React.MouseEventHandler;
};

const Arrow = (props: ArrowProps) => {
	const { flip, setCurrentPage } = props;

	let arrowIconFill: string;
	if (localStorage.mode === "light") arrowIconFill = Colors.LIGHT.five;
	else arrowIconFill = Colors.DARK.five;

	return (
		<Styled.PaginationArrowContainer onClick={setCurrentPage} flip={flip.toString()}>
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
