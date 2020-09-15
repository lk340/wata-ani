import * as React from "react";

import * as Styled from "./likes.styled";
import * as Springs from "./likes.springs";

export const Likes = () => {
	const animateLikesCount = Springs.likesCount();

	return (
		<Styled.Likes>
			<Styled.LikesIconContainer>
				<Styled.LikesIconHollow />
				<Styled.LikesIconFilled />
			</Styled.LikesIconContainer>
			<Styled.LikesCount style={animateLikesCount}>123</Styled.LikesCount>
		</Styled.Likes>
	);
};
