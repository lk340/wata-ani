import * as React from "react";

import * as Styled from "./likes.styled";
import * as Springs from "./likes.springs";

type Props = { likes: number };

export const Likes = (props: Props) => {
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
