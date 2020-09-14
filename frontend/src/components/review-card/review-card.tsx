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
				<Styled.ReviewCardProfilePicture />
				<Styled.ReviewCardUsername>{username}</Styled.ReviewCardUsername>
			</Styled.ReviewCardHeader>

			{/* Rating & Likes */}
			<RatingAndLikes />

			{/* Series Name */}
			<Styled.ReviewCardSeriesName>{seriesName}</Styled.ReviewCardSeriesName>

			{/* Title & Date & Text */}
			<Styled.ReviewCardTitleDateText>
				<Styled.ReviewCardTitle>{title}</Styled.ReviewCardTitle>
				<Styled.ReviewCardDate style={animateCardDate}>{date}</Styled.ReviewCardDate>
				<Styled.ReviewCardText>{text}</Styled.ReviewCardText>
			</Styled.ReviewCardTitleDateText>
		</Styled.ReviewCard>
	);
};

// ====================== //
// ↓↓↓ Rating & Likes ↓↓↓ //
// ====================== //

const RatingAndLikes = () => {
	const animateRatingAndLikes = Springs.ratingAndLikes();

	return (
		<Styled.ReviewCardRatingAndLikes style={animateRatingAndLikes}>
			<Styled.ReviewCardRatingContainer>
				<Styled.ReviewCardRating>
					<Styled.ReviewCardRatingValue>8.2</Styled.ReviewCardRatingValue>
					<Styled.ReviewCardRatingFraction>/</Styled.ReviewCardRatingFraction>
					<Styled.ReviewCardRatingFraction>10</Styled.ReviewCardRatingFraction>
				</Styled.ReviewCardRating>
				<Styled.ReviewCardRatingCount>83 Users</Styled.ReviewCardRatingCount>
			</Styled.ReviewCardRatingContainer>
			<Styled.ReviewCardLikes>
				<Styled.ReviewCardLikesIconContainer>
					<Styled.ReviewCardLikesIconHollow />
					<Styled.ReviewCardLikesIconFilled />
				</Styled.ReviewCardLikesIconContainer>
				<Styled.ReviewCardLikesCount>123</Styled.ReviewCardLikesCount>
			</Styled.ReviewCardLikes>
		</Styled.ReviewCardRatingAndLikes>
	);
};
