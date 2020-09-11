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
			<Styled.ReviewCardRatingLikesContainer>
				<Rating />
				<Likes />
			</Styled.ReviewCardRatingLikesContainer>

			{/* Rating Modal */}
			<RatingModal />
		</Styled.ReviewCard>
	);
};

// =============== //
// ↓↓↓ Ratings ↓↓↓ //
// =============== //

const Rating = () => {
	const [rated, setRated] = React.useState(false);
	const toggleRated = (): void => setRated(!rated);

	const animateRatedIcon = Springs.icon(rated);

	return (
		<Styled.ReviewCardRatingContainer>
			<Styled.ReviewCardIconContainer onClick={toggleRated}>
				<Styled.ReviewCardRatingIconHollow />
				<Styled.ReviewCardRatingIconFilled style={animateRatedIcon} />
			</Styled.ReviewCardIconContainer>
			<Styled.ReviewCardCount>83</Styled.ReviewCardCount>
		</Styled.ReviewCardRatingContainer>
	);
};

// ============= //
// ↓↓↓ Likes ↓↓↓ //
// ============= //

const Likes = () => {
	const [liked, setLiked] = React.useState(false);
	const toggleLiked = (): void => setLiked(!liked);

	const animateLikedIcon = Springs.icon(liked);

	return (
		<Styled.ReviewCardLikesContainer>
			<Styled.ReviewCardIconContainer onClick={toggleLiked}>
				<Styled.ReviewCardLikesIconHollow />
				<Styled.ReviewCardLikesIconFilled style={animateLikedIcon} />
			</Styled.ReviewCardIconContainer>
			<Styled.ReviewCardCount>123</Styled.ReviewCardCount>
		</Styled.ReviewCardLikesContainer>
	);
};

// ==================== //
// ↓↓↓ Rating Modal ↓↓↓ //
// ==================== //

const RatingModal = () => {
	const animateRatingModal = Springs.ratingModal();

	return (
		<Styled.ReviewCardRatingModal style={animateRatingModal}>
			Modal
		</Styled.ReviewCardRatingModal>
	);
};
