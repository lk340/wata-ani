import * as React from "react";

import * as Styled from "./user-rating.styled";

type Props = {
	userRating: number | "N/A";
	userRatingCount: number;
};

export const UserRating = (props: Props) => {
	const { userRating, userRatingCount } = props;

	return (
		<Styled.UserRating>
			{/* Value & Fraction */}
			<Styled.UserRatingValue_Fraction>
				<Styled.UserRatingValue>{userRating}</Styled.UserRatingValue>
				<Styled.UserRatingFraction>/10</Styled.UserRatingFraction>
			</Styled.UserRatingValue_Fraction>

			{/* Count */}
			<Styled.UserRatingCount>
				{userRatingCount}&nbsp;
				{userRatingCount > 1 || userRatingCount === 0 ? "ratings" : "rating"}
			</Styled.UserRatingCount>
		</Styled.UserRating>
	);
};
