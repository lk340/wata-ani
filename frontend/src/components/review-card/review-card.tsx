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
	review: string;
	personalRating: number;
	tags: number[];
	ratings: number[];
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
		review,
		personalRating,
		tags,
		ratings,
	} = props;

	const animateReviewCard = Springs.reviewCard();
	const animateCardDate = Springs.cardDate();
	const animateTag = Springs.tag();

	// --- Tags Redux --- //
	const tagsRedux = ReactRedux.useSelector(
		(state: Types.ReduxState) => state.entities.tags,
	);

	// --- Ratings Redux --- //
	const ratingsRedux = ReactRedux.useSelector(
		(state: Types.ReduxState) => state.entities.ratings,
	);

	// --- Current User Redux --- //
	const currentUser = ReactRedux.useSelector((state: Types.ReduxState) => state.session);

	// Logic for rendering review card tags.
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

	// If user has made a rating, display it in the form and make the request a PATCH request
	//	instead of a POST request.
	const userRatings = currentUser.ratings;

	let currentUserRating: number | "" = "";
	if (Object.keys(ratingsRedux).length > 0 && userRatings) {
		ratings.forEach((postRating: number) => {
			if (userRatings.includes(postRating)) {
				currentUserRating = ratingsRedux[postRating].rating;
			} else {
				currentUserRating = "";
			}
		});
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
				currentUserRating={currentUserRating}
				likes={likes}
			/>

			{/* Series Name */}
			<Styled.ReviewCardSeriesName>{seriesName}</Styled.ReviewCardSeriesName>

			{/* Title & Date & Text */}
			<Styled.ReviewCardTitleDateText>
				<Styled.ReviewCardTitle>{title}</Styled.ReviewCardTitle>
				<Styled.ReviewCardDate style={animateCardDate}>{date}</Styled.ReviewCardDate>
				<Styled.ReviewCardText>{review}</Styled.ReviewCardText>
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
