import * as React from "react";

import * as Components from "@/components";
import * as Functions from "@/utils/functions";

import * as Styled from "./review-card.styled";
import * as Springs from "./review-card.springs";
import * as ReviewCardTypes from "./_types";

import { RatingAndLikes } from "./rating-and-likes";
import { ModalForm } from "./modal-form";

type Props = {
	postId: number;
	userRating: number | "N/A";
	userRatingCount: number;
	userHasRated: boolean;
	ratingId: number;
} & ReviewCardTypes.Post &
	ReviewCardTypes.ReviewCardProps &
	ReviewCardTypes.RatingAndLikesProps &
	ReviewCardTypes.LikesProps;

export const ReviewCard = (props: Props) => {
	const [modalOpen, setModalOpen] = React.useState(false);

	function toggleModalOpen(): void {
		setModalOpen(!modalOpen);
	}

	// --- Animations --- //
	const animateReviewCard = Springs.reviewCard();
	const animateCardDate = Springs.cardDate();
	const animateTag = Springs.tag();

	// --- Fetching Redux State --- //
	const currentUser = Functions.getSession();
	const tagsRedux = Functions.getTags();
	const ratingsRedux = Functions.getRatings();

	// --- Review Card Tag Components --- //
	const tagCount = props.tags.length;
	const _postHasTags = tagCount > 0;
	const _tagsReduxHasLoaded = Object.keys(tagsRedux).length > 0;

	let reviewCardTagComponents;
	if (_postHasTags && _tagsReduxHasLoaded) {
		reviewCardTagComponents = props.tags.map((id: number) => {
			const tagTitle = tagsRedux[id].title.toLowerCase();
			return (
				<Styled.ReviewCardTagKeyWrapper key={id}>
					<Styled.ReviewCardTag style={animateTag}>{tagTitle}</Styled.ReviewCardTag>
				</Styled.ReviewCardTagKeyWrapper>
			);
		});
	} else {
		reviewCardTagComponents = "";
	}

	// If user has made a rating, display it in the form and make the request a PATCH request
	// 	instead of a POST request.
	const userRatings = currentUser.ratings;

	let currentUserRating: number = 0;
	if (Object.keys(ratingsRedux).length > 0 && userRatings) {
		props.ratings.forEach((postRating: number) => {
			if (userRatings.includes(postRating)) {
				currentUserRating = ratingsRedux[postRating].rating;
			} else {
				currentUserRating = 0;
			}
		});
	}

	return (
		<Styled.ReviewCard style={animateReviewCard}>
			<ModalForm
				isOpen={modalOpen}
				toggleModalOpen={toggleModalOpen}
				postId={props.postId}
				postSeries={props.seriesTitle}
				postTitle={props.title}
				postReview={props.review}
				personalRating={props.personalRating}
				postTags={props.tags}
				currentUser={currentUser}
				tagsRedux={tagsRedux}
				ratingsRedux={ratingsRedux}
			/>

			{/* Header */}
			<Styled.ReviewCardHeader>
				{/* Profile Picture & Username */}
				<Styled.ReviewCardProfilePicture_Username>
					<Styled.ReviewCardProfilePicture />
					<Styled.ReviewCardUsername>{props.username}</Styled.ReviewCardUsername>
				</Styled.ReviewCardProfilePicture_Username>
				{/* Modal Button (ellipses) */}
				<Styled.ReviewCardModalButton
					onClick={toggleModalOpen}
					belongs_to_current_user={props.belongsToCurrentUser.toString()}
				>
					<Styled.ReviewCardModalButtonDot />
					<Components.Spacer height={"2px"} />
					<Styled.ReviewCardModalButtonDot />
					<Components.Spacer height={"2px"} />
					<Styled.ReviewCardModalButtonDot />
				</Styled.ReviewCardModalButton>
			</Styled.ReviewCardHeader>

			{/* Rating & Likes */}
			<RatingAndLikes
				postId={props.postId}
				userRating={props.userRating}
				userRatingCount={props.userRatingCount}
				currentUserRating={currentUserRating}
				likes={props.likes}
				belongsToCurrentUser={props.belongsToCurrentUser}
				userHasRated={props.userHasRated}
				ratingId={props.ratingId}
			/>

			{/* Series Name */}
			<Styled.ReviewCardSeriesTitle
				belongs_to_current_user={props.belongsToCurrentUser.toString()}
			>
				{props.seriesTitle}
			</Styled.ReviewCardSeriesTitle>

			{/* Title & Date & Text */}
			<Styled.ReviewCardTitleDateText>
				<Styled.ReviewCardTitle>{props.title}</Styled.ReviewCardTitle>
				<Styled.ReviewCardDate style={animateCardDate}>
					{props.dateCreated}
				</Styled.ReviewCardDate>
				<Styled.ReviewCardText>{props.review}</Styled.ReviewCardText>
			</Styled.ReviewCardTitleDateText>

			{/* Author Rating */}
			<Styled.ReviewCardAuthorRating tagLength={tagCount}>
				<Styled.ReviewCardAuthorRatingText>
					I give this series a rating of:&nbsp;
				</Styled.ReviewCardAuthorRatingText>
				<Styled.ReviewCardAuthorRatingValue>
					{props.personalRating}/10
				</Styled.ReviewCardAuthorRatingValue>
			</Styled.ReviewCardAuthorRating>

			{/* Tags */}
			<Styled.ReviewCardTagContainer length={tagCount}>
				{reviewCardTagComponents}
			</Styled.ReviewCardTagContainer>
		</Styled.ReviewCard>
	);
};
