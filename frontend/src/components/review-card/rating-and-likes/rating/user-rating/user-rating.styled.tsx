import styled from "styled-components";

import * as Constants from "@/utils/style/constants";
import * as Snippets from "@/utils/style/snippets";
import * as Colors from "@/utils/style/colors";

export const UserRating = styled("div")`
	${Snippets.flex("column", "center", "auto")};
	margin-right: 20px;
	padding: 10px 0px;
`;

export const UserRatingValue_Fraction = styled("div")`
	${Snippets.grid(3, "auto", 4, "auto", "center")};
`;

export const UserRatingValue = styled("h2")`
	${Snippets.clearSpacing()};
	color: ${Colors.PRIMARY_100};
	font-size: ${Constants.fontSizes.components.reviewCard.ratingValue};
	font-weight: bold;
`;

export const UserRatingFraction = styled("span")`
	display: block;
	color: ${Colors.LIGHT.five};
	font-size: ${Constants.fontSizes.components.reviewCard.ratingFraction};
	font-weight: bold;
`;

export const UserRatingCount = styled("span")`
	display: block;
	font-size: ${Constants.fontSizes.components.reviewCard.ratingCount};
`;
