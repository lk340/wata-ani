import * as React from "react";
import * as ReactRedux from "react-redux";

import * as Types from "@/utils/types";

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
	tags: number[];
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

	const tagsRedux = ReactRedux.useSelector(
		(state: Types.ReduxState) => state.entities.tags,
	);

	const animateReviewCard = Springs.reviewCard();
	const animateCardDate = Springs.cardDate();
	const animateTag = Springs.tag();

	const tagCount = tags.length;
	const _postHasTags = tagCount > 0;
	const _tagsReduxLoaded = Object.keys(tagsRedux).length > 0;

	let reviewCardTags;
	if (_postHasTags && _tagsReduxLoaded) {
		reviewCardTags = tags.map((id: number) => {
			return (
				<React.Fragment key={id}>
					<Styled.ReviewCardTag style={animateTag}>
						{tagsRedux[id].title}
					</Styled.ReviewCardTag>
				</React.Fragment>
			);
		});
	} else {
		reviewCardTags = "";
	}

	console.log("Tags Redux:", tagsRedux);
	console.log("Review Card Tags:", reviewCardTags);
	console.log("Tags Length:", tags.length);

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
