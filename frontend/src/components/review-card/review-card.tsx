import * as React from "react";

import * as Context from "@/context";
import * as Components from "@/components";
import * as Actions from "@/redux/actions";
import * as Functions from "@/utils/functions";
import * as Types from "@/utils/types";

import * as Styled from "./review-card.styled";
import * as Springs from "./review-card.springs";

import { RatingAndLikes } from "./rating-and-likes";
import { ModalForm } from "./modal-form";

type Props = {
	post: Actions.Posts.Post;
	currentUser: Context.AuthForm.CurrentUser;
	ratingsRedux: Types.Ratings;
	username: string;

	// postId: number;
	// username: string;
	// seriesTitle: string;
	// title: string;
	// dateCreated: string;
	// review: string;
	// personalRating: number;
	// tags: number[];
	// ratings: number[];
	// likes: number;
	// ratingId: number;
	// userRating: number | "N/A";
	// userRatingCount: number;
	// userHasRated: boolean;
	// belongsToCurrentUser: boolean;
	// dispatch: Function;
	// currentUser: Context.AuthForm.CurrentUser;
	// postsRedux: Types.Posts;
	// postsErrorsRedux: any;
	// ratingsRedux: Types.Ratings;
};

/**
 * Refs
 * Animations
 * Fetching Redux state
 * Review Card Tag Components
 */

export const ReviewCard = (props: Props) => {
	const [modalOpen, setModalOpen] = React.useState(false);
	const [showReadMore, setShowReadMore] = React.useState(false);
	const [readMoreExpanded, setReadMoreExpanded] = React.useState(false);

	function toggleModalOpen(): void {
		setModalOpen(!modalOpen);
	}

	function toggleReadMore(): void {
		setReadMoreExpanded(!readMoreExpanded);
	}

	// --- Refs --- //
	const reviewCardContainerRef = React.useRef(null);
	const reviewCardRef = React.useRef(null);

	React.useEffect(() => {
		if (reviewCardContainerRef.current && reviewCardRef.current) {
			const reviewCardContainerHeight = reviewCardContainerRef.current.clientHeight;
			const reviewCardHeight = reviewCardRef.current.clientHeight;

			if (reviewCardHeight > reviewCardContainerHeight) {
				setShowReadMore(true);
			} else {
				setShowReadMore(false);
			}
		}
	}, [reviewCardContainerRef, reviewCardRef]);

	// --- Animations --- //
	const animateReviewCard = Springs.reviewCard();
	const animateWrapper = Springs.wrapper(readMoreExpanded);
	const animateFade = Springs.fade(showReadMore, readMoreExpanded);
	const animateCardDate = Springs.cardDate();
	const animateTag = Springs.tag();
	const animateReadMore = Springs.readMore(showReadMore);

	// --- Fetching Redux State --- //
	const tagsRedux = Functions.getTags();

	// --- Post Logic --- //
	const _parsedDate = new Date(props.post.date_created.slice(0, 10))
		.toString()
		.slice(4, 15);
	const dateCreated = _parsedDate.slice(0, 6) + ", " + _parsedDate.slice(6);

	const averageUserRating = Functions.getPostAverageUserRatings(props.post.id);
	// const averageUserRating = Functions.getPostAverageUserRatings(props.post.id).toFixed(1);

	// --- Review Card Tag Components --- //
	const tags = Functions.getPostTags(props.post.id);

	// const tagCount = props.tags.length;
	// const _postHasTags = tagCount > 0;
	// const _tagsReduxHasLoaded = Object.keys(tagsRedux).length > 0;

	const tagCount = tags.length;

	let reviewCardTagComponents;
	if (_postHasTags && _tagsReduxHasLoaded) {
		reviewCardTagComponents = props.tags.map((id: number) => {
			const tagGenre = tagsRedux[id].genre.toLowerCase();
			return (
				<Styled.ReviewCardTagKeyWrapper key={id}>
					<Styled.ReviewCardTag style={animateTag}>{tagGenre}</Styled.ReviewCardTag>
				</Styled.ReviewCardTagKeyWrapper>
			);
		});
	} else {
		reviewCardTagComponents = "";
	}

	// If user has made a rating, display it in the form and make the request a PATCH request
	// 	instead of a POST request.

	const userRating = Functions.getUserRating(props.currentUser.id, props.post.id);

	// const userRatings = props.currentUser.ratings;
	// let currentUserRating: number = 0;
	// if (Object.keys(props.ratingsRedux).length > 0 && userRatings) {
	// 	props.ratings.forEach((postRating: number) => {
	// 		if (userRatings.includes(postRating)) {
	// 			currentUserRating = props.ratingsRedux[postRating].rating;
	// 		} else {
	// 			currentUserRating = 0;
	// 		}
	// 	});
	// }

	const belongsToCurrentUser = props.post.author === props.currentUser.id;

	return (
		<Styled.ReviewCardContainer
			ref={reviewCardContainerRef}
			read_more_expanded={readMoreExpanded.toString()}
			style={animateReviewCard}
		>
			<ModalForm
				isOpen={modalOpen}
				toggleModalOpen={toggleModalOpen}
				post={props.post}
				currentUser={props.currentUser}
				// postId={props.postId}
				// postSeries={props.seriesTitle}
				// postTitle={props.title}
				// postReview={props.review}
				// personalRating={props.personalRating}
				// postTags={props.tags}
				// dispatch={props.dispatch}
				// currentUser={props.currentUser}
				// tagsRedux={tagsRedux}
				// ratingsRedux={props.ratingsRedux}
				// postsRedux={props.postsRedux}
				// postsErrorsRedux={props.postsErrorsRedux}
			/>

			<Styled.ReviewCardWrapper style={animateWrapper}>
				{/* Fade */}
				<Styled.ReviewCardWrapperFade style={animateFade} />

				<Styled.ReviewCard ref={reviewCardRef}>
					{/* Header */}
					<Styled.ReviewCardHeader>
						{/* Profile Picture & Username */}
						<Styled.ReviewCardProfilePicture_Username>
							<Styled.ReviewCardProfilePicture />
							<Styled.ReviewCardUsername>{props.username}</Styled.ReviewCardUsername>
						</Styled.ReviewCardProfilePicture_Username>
						{/* Modal Button (ellipses) */}
						<Styled.ReviewCardModalButtonDotContainer
							onClick={toggleModalOpen}
							belongs_to_current_user={belongsToCurrentUser.toString()}
						>
							<Styled.ReviewCardModalButtonDot />
							<Components.Spacer height={"2px"} />
							<Styled.ReviewCardModalButtonDot />
							<Components.Spacer height={"2px"} />
							<Styled.ReviewCardModalButtonDot />
						</Styled.ReviewCardModalButtonDotContainer>
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
						belongs_to_current_user={belongsToCurrentUser.toString()}
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
			</Styled.ReviewCardWrapper>

			{/* Read More */}
			<Styled.ReviewCardReadMore style={animateReadMore}>
				<Styled.ReviewCardReadMoreText onClick={toggleReadMore}>
					{readMoreExpanded ? "Read Less" : "Read More"}
				</Styled.ReviewCardReadMoreText>
			</Styled.ReviewCardReadMore>
		</Styled.ReviewCardContainer>
	);
};
