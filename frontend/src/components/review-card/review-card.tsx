import * as React from "react";

import * as Styled from "./review-card.styled";
import * as Springs from "./review-card.springs";

import { RatingAndLikes } from "./rating-and-likes";

type Props = {
	username: string;
	rating: number | "N/A";
	ratingUserCount: number;
	likes: number;
	seriesName: string;
	title: string;
	date: string;
	text: string;
	personalRating: number;
};

export const ReviewCard = (props: Props) => {
	const {
		username,
		rating,
		ratingUserCount,
		likes,
		seriesName,
		title,
		date,
		text,
		personalRating,
	} = props;

	const animateReviewCard = Springs.reviewCard();
	const animateCardDate = Springs.cardDate();

	return (
		<Styled.ReviewCard style={animateReviewCard}>
			{/* Header */}
			<Styled.ReviewCardHeader>
				<Styled.ReviewCardProfilePicture />
				<Styled.ReviewCardUsername>{username}</Styled.ReviewCardUsername>
			</Styled.ReviewCardHeader>

			{/* Rating & Likes */}
			<RatingAndLikes rating={rating} ratingUserCount={ratingUserCount} likes={likes} />

			{/* Series Name */}
			<Styled.ReviewCardSeriesName>{seriesName}</Styled.ReviewCardSeriesName>

			{/* Title & Date & Text */}
			<Styled.ReviewCardTitleDateText>
				<Styled.ReviewCardTitle>{title}</Styled.ReviewCardTitle>
				<Styled.ReviewCardDate style={animateCardDate}>{date}</Styled.ReviewCardDate>
				<Styled.ReviewCardText>{text}</Styled.ReviewCardText>
			</Styled.ReviewCardTitleDateText>

			{/* Author Rating */}
			<Styled.ReviewCardAuthorRating>
				<Styled.ReviewCardAuthorRatingText>
					I give this series a rating of:&nbsp;
				</Styled.ReviewCardAuthorRatingText>
				<Styled.ReviewCardAuthorRatingValue>
					{personalRating}/10
				</Styled.ReviewCardAuthorRatingValue>
			</Styled.ReviewCardAuthorRating>
		</Styled.ReviewCard>
	);
};
