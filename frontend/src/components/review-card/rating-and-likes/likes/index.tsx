import * as React from "react";

import * as Styled from "./likes.styled";
import * as Springs from "./likes.springs";
import * as ReviewCardTypes from "../../_types";

export const Likes = (props: ReviewCardTypes.LikesProps) => {
	const { likes } = props;

	const animateLikesCount = Springs.likesCount();

	return (
		<Styled.Likes>
			<Styled.LikesIconContainer>
				<Styled.LikesIconHollow />
				<Styled.LikesIconFilled />
			</Styled.LikesIconContainer>
			<Styled.LikesCount style={animateLikesCount}>{likes}</Styled.LikesCount>
		</Styled.Likes>
	);
};
