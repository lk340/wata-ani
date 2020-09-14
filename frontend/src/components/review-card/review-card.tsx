import * as React from "react";

import * as Styled from "./review-card.styled";
import * as Springs from "./review-card.springs";

type Props = {
	username: string;
	seriesName: string;
	title: string;
	date: string;
	text: string;
};

export const ReviewCard = (props: Props) => {
	const { username, seriesName, title, date, text } = props;

	const animateReviewCard = Springs.reviewCard();
	const animateCardDate = Springs.cardDate();

	return (
		<Styled.ReviewCard style={animateReviewCard}>
			{/* Header */}
			<Styled.ReviewCardHeader>
				<Styled.ReviewCardUsername>{username}</Styled.ReviewCardUsername>
			</Styled.ReviewCardHeader>

			{/* Series Name */}
			<Styled.ReviewCardSeriesName>{seriesName}</Styled.ReviewCardSeriesName>

			{/* Title & Date & Text */}
			<Styled.ReviewCardTitleDateText>
				<Styled.ReviewCardTitle>{title}</Styled.ReviewCardTitle>
				<Styled.ReviewCardDate style={animateCardDate}>{date}</Styled.ReviewCardDate>
				<Styled.ReviewCardText>{text}</Styled.ReviewCardText>
			</Styled.ReviewCardTitleDateText>

			{/* Rating & Likes */}
		</Styled.ReviewCard>
	);
};
