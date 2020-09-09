import * as React from "react";

import * as Colors from "@/utils/style/colors";

import * as Styled from "./pagination.styled";
import * as Springs from "./pagination.springs";

import { Arrow } from "@/icons/pagination/arrow";

export const Pagination = () => {
	let fill: string;
	if (localStorage.mode === "light") fill = Colors.LIGHT.five;
	else fill = Colors.DARK.five;

	return (
		<Styled.Pagination>
			{/* Left Arrow */}
			<Styled.PaginationArrowContainer flip={"true"}>
				<Arrow fill={fill} width="20" />
			</Styled.PaginationArrowContainer>

			{/* Pages */}
			<Styled.PaginationPages>
				<Styled.PaginationPagesNumber>1</Styled.PaginationPagesNumber>
				<Styled.PaginationPagesNumber>2</Styled.PaginationPagesNumber>
				<Styled.PaginationPagesNumber>3</Styled.PaginationPagesNumber>
				<Styled.PaginationPagesNumber>4</Styled.PaginationPagesNumber>
				<Styled.PaginationPagesNumber>5</Styled.PaginationPagesNumber>
			</Styled.PaginationPages>

			{/* Right Arrow */}
			<Styled.PaginationArrowContainer flip={"false"}>
				<Arrow fill={fill} width="20" />
			</Styled.PaginationArrowContainer>
		</Styled.Pagination>
	);
};
