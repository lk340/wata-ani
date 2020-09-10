import * as React from "react";

import * as Context from "@/context";
import * as Colors from "@/utils/style/colors";

import * as Styled from "./pagination.styled";

import { Arrow } from "@/icons/pagination/arrow";

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

	let arrowIconFill: string;
	if (localStorage.mode === "light") arrowIconFill = Colors.LIGHT.five;
	else arrowIconFill = Colors.DARK.five;

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
