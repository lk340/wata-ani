import styled from "styled-components";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

// ================== //
// ↓↓↓ Pagination ↓↓↓ //
// ================== //

export const Pagination = styled("div")`
	${Snippets.flexRowCenter()};
	margin: 60px 0px;

	@media (max-width: ${Constants.breakpoints.mobile}px) {
		margin: 30px 0px;
	}
`;

// ============= //
// ↓↓↓ Arrow ↓↓↓ //
// ============= //

type ArrowProps = { flip: string };

export const PaginationArrowContainer = styled("div")<ArrowProps>`
	${Snippets.flexRowCenter()};
	transform: ${(props) => (props.flip === "true" ? "rotate(180deg)" : "rotate(0deg)")};
	cursor: pointer;
`;

// ============= //
// ↓↓↓ Pages ↓↓↓ //
// ============= //

export const PaginationPages = styled("div")`
	${Snippets.grid(5, "auto", 20, "center", "center")};
	margin: 0px 30px;
`;

type PagesNumberProps = { isCurrentPage: string };

export const PaginationPagesNumber = styled("span")<PagesNumberProps>`
	display: block;
	color: ${(props) => (props.isCurrentPage === "true" ? Colors.PRIMARY_100 : "inherit")};
	font-size: ${Constants.fontSizes.components.pagination};
	font-weight: bold;
	cursor: pointer;
`;
