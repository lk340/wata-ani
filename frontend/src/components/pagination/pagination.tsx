import * as React from "react";

import * as Context from "@/context";
import * as Colors from "@/utils/style/colors";

import * as Styled from "./pagination.styled";

import { Arrow } from "@/icons/pagination/arrow";

export const Pagination = () => {
	const { pagination } = Context.Pagination.usePaginationContext();
	const { currentPage, lastPage } = pagination.state;

	React.useEffect(() => {
		if (Number(localStorage.currentPage) > Number(localStorage.lastPage)) {
			pagination.setters.incrementLastPage();
		} else if (
			Number(localStorage.currentPage) < Number(localStorage.lastPage) - 4 &&
			Number(localStorage.lastPage) - 5 > 0
		) {
			pagination.setters.decrementLastPage();
		}
	}, [localStorage.currentPage]);

	console.log("Current Page:", pagination.state.currentPage);
	console.log("Last Page:", pagination.state.lastPage);

	let arrowIconFill: string;
	if (localStorage.mode === "light") arrowIconFill = Colors.LIGHT.five;
	else arrowIconFill = Colors.DARK.five;

	const firstPage = Number(localStorage.lastPage) - 4;
	const secondPage = Number(localStorage.lastPage) - 3;
	const thirdPage = Number(localStorage.lastPage) - 2;
	const fourthPage = Number(localStorage.lastPage) - 1;

	const isFirstPage = Number(localStorage.currentPage) === firstPage;
	const isSecondPage = Number(localStorage.currentPage) === secondPage;
	const isThirdPage = Number(localStorage.currentPage) === thirdPage;
	const isFourthPage = Number(localStorage.currentPage) === fourthPage;
	const isLastPage = Number(localStorage.currentPage) === Number(localStorage.lastPage);

	return (
		<Styled.Pagination>
			{/* Left Arrow */}
			<Styled.PaginationArrowContainer
				onClick={pagination.setters.decrementCurrentPage}
				flip={"true"}
			>
				<Arrow fill={arrowIconFill} width="20" />
			</Styled.PaginationArrowContainer>

			{/* Pages */}
			<Styled.PaginationPages>
				{/* First Page */}
				<Styled.PaginationPagesNumber
					onClick={() => pagination.setters.setCurrentPage(firstPage)}
					isCurrentPage={isFirstPage.toString()}
				>
					{firstPage}
				</Styled.PaginationPagesNumber>

				{/* Second Page */}
				<Styled.PaginationPagesNumber
					onClick={() => pagination.setters.setCurrentPage(secondPage)}
					isCurrentPage={isSecondPage.toString()}
				>
					{secondPage}
				</Styled.PaginationPagesNumber>

				{/* Third Page */}
				<Styled.PaginationPagesNumber
					onClick={() => pagination.setters.setCurrentPage(thirdPage)}
					isCurrentPage={isThirdPage.toString()}
				>
					{thirdPage}
				</Styled.PaginationPagesNumber>

				{/* Fourth Page */}
				<Styled.PaginationPagesNumber
					onClick={() => pagination.setters.setCurrentPage(fourthPage)}
					isCurrentPage={isFourthPage.toString()}
				>
					{fourthPage}
				</Styled.PaginationPagesNumber>

				{/* Last (fifth) Page */}
				<Styled.PaginationPagesNumber
					onClick={() => pagination.setters.setCurrentPage(lastPage)}
					isCurrentPage={isLastPage.toString()}
				>
					{lastPage}
				</Styled.PaginationPagesNumber>
			</Styled.PaginationPages>

			{/* Right Arrow */}
			<Styled.PaginationArrowContainer
				onClick={pagination.setters.incrementCurrentPage}
				flip={"false"}
			>
				<Arrow fill={arrowIconFill} width="20" />
			</Styled.PaginationArrowContainer>
		</Styled.Pagination>
	);
};
