import * as React from "react";
import * as ReactRedux from "react-redux";

import * as Components from "@/components";
import * as Types from "@/utils/types";

import * as Styled from "./review-card.styled";
import * as Springs from "./review-card.springs";

import { RatingAndLikes } from "./rating-and-likes";

type Props = {
	username: string;
	userRating: number | "N/A";
	userRatingCount: number;
	likes: number;
	seriesTitle: string;
	title: string;
	dateCreated: string;
	review: string;
	personalRating: number;
	tags: number[];
	ratings: number[];
	belongsToCurrentUser: boolean;
};

export const ReviewCard = (props: Props) => {
	const {
		username,
		userRating,
		userRatingCount,
		likes,
		seriesTitle,
		title,
		dateCreated,
		review,
		personalRating,
		tags,
		ratings,
		belongsToCurrentUser,
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

	// Review Card Tag Components
	const tagCount = tags.length;
	const _postHasTags = tagCount > 0;
	const _tagsReduxLoaded = Object.keys(tagsRedux).length > 0;

	let reviewCardTags;
	if (_postHasTags && _tagsReduxLoaded) {
		reviewCardTags = tags.map((id: number) => {
			const tagTitle = tagsRedux[id].title.toLowerCase();
			return (
				<React.Fragment key={id}>
					<Styled.ReviewCardTag style={animateTag}>{tagTitle}</Styled.ReviewCardTag>
				</React.Fragment>
			);
		});
	} else {
		reviewCardTags = "";
	}

	// If user has made a rating, display it in the form and make the request a PATCH request
	// 	instead of a POST request.
	const userRatings = currentUser.ratings;

	let currentUserRating: number = 0;
	if (Object.keys(ratingsRedux).length > 0 && userRatings) {
		ratings.forEach((postRating: number) => {
			if (userRatings.includes(postRating)) {
				currentUserRating = ratingsRedux[postRating].rating;
			} else {
				currentUserRating = 0;
			}
		});
	}

	return (
		<Styled.ReviewCard style={animateReviewCard}>
			{/* Header */}
			<Styled.ReviewCardHeader>
				{/* Profile Picture & Username */}
				<Styled.ReviewCardProfilePicture_Username>
					<Styled.ReviewCardProfilePicture />
					<Styled.ReviewCardUsername>{username}</Styled.ReviewCardUsername>
				</Styled.ReviewCardProfilePicture_Username>
				{/* Modal Button (ellipses) */}
				<Styled.ReviewCardModalButton>
					<Styled.ReviewCardModalButtonDot />
					<Components.Spacer height={"2px"} />
					<Styled.ReviewCardModalButtonDot />
					<Components.Spacer height={"2px"} />
					<Styled.ReviewCardModalButtonDot />
				</Styled.ReviewCardModalButton>
			</Styled.ReviewCardHeader>

			{/* Rating & Likes */}
			<RatingAndLikes
				userRating={userRating}
				userRatingCount={userRatingCount}
				currentUserRating={currentUserRating}
				likes={likes}
				belongsToCurrentUser={belongsToCurrentUser}
			/>

			{/* Series Name */}
			<Styled.ReviewCardSeriesTitle belongs_to_current_user={belongsToCurrentUser.toString()}>
				{seriesTitle}
			</Styled.ReviewCardSeriesTitle>

			{/* Title & Date & Text */}
			<Styled.ReviewCardTitleDateText>
				<Styled.ReviewCardTitle>{title}</Styled.ReviewCardTitle>
				<Styled.ReviewCardDate style={animateCardDate}>
					{dateCreated}
				</Styled.ReviewCardDate>
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
