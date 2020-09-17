import * as React from "react";

import * as Actions from "@/redux/actions";

import * as Styled from "./review-card.styled";
import * as Springs from "./review-card.springs";

import { RatingAndLikes } from "./rating-and-likes";

type Props = {
	username: string;
	userRating: number | "N/A";
	userRatingCount: number;
	likes: number;
	seriesName: string;
	title: string;
	date: string;
	text: string;
	personalRating: number;
	tags: Actions.Tags.Tag[] | [];
};

export const ReviewCard = (props: Props) => {
	const {
		username,
		userRating,
		userRatingCount,
		likes,
		seriesName,
		title,
		date,
		text,
		personalRating,
		tags,
	} = props;

	const animateReviewCard = Springs.reviewCard();
	const animateCardDate = Springs.cardDate();
	const animateTag = Springs.tag();

	const tagCount = tags.length;

	let reviewCardTags;
	if (tags.length > 0) {
		reviewCardTags = tags.map((tag: Actions.Tags.Tag) => {
			return (
				<React.Fragment key={tag.id}>
					<Styled.ReviewCardTag style={animateTag}>{tag.title}</Styled.ReviewCardTag>
				</React.Fragment>
			);
		});
	} else {
		reviewCardTags = "";
	}

	return (
		<Styled.ReviewCard style={animateReviewCard}>
			{/* Header */}
			<Styled.ReviewCardHeader>
				<Styled.ReviewCardProfilePicture />
				<Styled.ReviewCardUsername>{username}</Styled.ReviewCardUsername>
			</Styled.ReviewCardHeader>

			{/* Rating & Likes */}
			<RatingAndLikes
				userRating={userRating}
				userRatingCount={userRatingCount}
				likes={likes}
			/>

			{/* Series Name */}
			<Styled.ReviewCardSeriesName>{seriesName}</Styled.ReviewCardSeriesName>

			{/* Title & Date & Text */}
			<Styled.ReviewCardTitleDateText>
				<Styled.ReviewCardTitle>{title}</Styled.ReviewCardTitle>
				<Styled.ReviewCardDate style={animateCardDate}>{date}</Styled.ReviewCardDate>
				<Styled.ReviewCardText>{text}</Styled.ReviewCardText>
			</Styled.ReviewCardTitleDateText>

			{/* Author Rating */}
			<Styled.ReviewCardAuthorRating tagLength={tagCount}>
				<Styled.ReviewCardAuthorRatingText>
					I give this series a rating of:&nbsp;
				</Styled.ReviewCardAuthorRatingText>
				<Styled.ReviewCardAuthorRatingValue>
					{personalRating}/10
				</Styled.ReviewCardAuthorRatingValue>
			</Styled.ReviewCardAuthorRating>

			{/* Tags */}
			<Styled.ReviewCardTagContainer length={tagCount}>
				{reviewCardTags}
			</Styled.ReviewCardTagContainer>
		</Styled.ReviewCard>
	);
};
