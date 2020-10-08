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
	username: string;
	ratingsRedux: Types.Ratings;
};

/**
 * Refs
 * Animations
 * Fetching Redux state
 * Post Logic
 * Review Card Tag Components
 * Rating Logic
 */

export const ReviewCard = (props: Props) => {
	const [currentUserRating, setCurrentUserRating] = React.useState(0);
	const [currentUserRatingError, setCurrentUserRatingError] = React.useState("");
	const [averageUserRating, setAverageUserRating] = React.useState<number | "N/A">("N/A");
	const [averageUserRatingError, setAverageUserRatingError] = React.useState("");
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
	const _monthDayYear = new Date(props.post.date_created.slice(0, 10))
		.toString()
		.slice(4, 15);
	const dateCreated = _monthDayYear.slice(0, 6) + ", " + _monthDayYear.slice(6);

	Functions.getPostAverageUserRatings(
		props.post.id,
		setAverageUserRating,
		setAverageUserRatingError,
	);

	// --- Review Card Tag Components --- //
	const tags = props.post.tags;
	const tagCount = tags.length;
	const _postHasTags = tagCount > 0;
	const _tagsReduxHasLoaded = Object.keys(tagsRedux).length > 0;

	let reviewCardTagComponents;
	if (_postHasTags && _tagsReduxHasLoaded) {
		reviewCardTagComponents = props.post.tags.map((tagId: number) => {
			const tagGenre = tagsRedux[tagId].genre.toLowerCase();
			return (
				<Styled.ReviewCardTagKeyWrapper key={tagId}>
					<Styled.ReviewCardTag style={animateTag}>{tagGenre}</Styled.ReviewCardTag>
				</Styled.ReviewCardTagKeyWrapper>
			);
		});
	} else {
		reviewCardTagComponents = "";
	}

	Functions.getUserRating(
		props.currentUser.id,
		props.post.id,
		setCurrentUserRating,
		setCurrentUserRatingError,
	);

	// --- Rating Logic --- //
	const belongsToCurrentUser = props.post.author === props.currentUser.id;
	
	let userHasRated = false;
	let userHasRatedRatingId = 0;

	props.post.user_ratings.forEach((postUserRatingId: number) => {
		if (props.currentUser.ratings.includes(postUserRatingId)) {
			userHasRated = true;
			userHasRatedRatingId = postUserRatingId;
		} else {
			userHasRated = false;
		}
	});

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
						post={props.post}
						averageUserRating={averageUserRating > 0 ? averageUserRating : "N/A"}
						currentUserRating={currentUserRating}
						belongsToCurrentUser={belongsToCurrentUser}
						userHasRated={userHasRated}
						userHasRatedRatingId={userHasRatedRatingId}
					/>

					{/* Series Name */}
					<Styled.ReviewCardSeriesTitle
						belongs_to_current_user={belongsToCurrentUser.toString()}
					>
						{props.post.series_title}
					</Styled.ReviewCardSeriesTitle>

					{/* Title & Date & Text */}
					<Styled.ReviewCardTitleDateText>
						<Styled.ReviewCardTitle>{props.post.title}</Styled.ReviewCardTitle>
						<Styled.ReviewCardDate style={animateCardDate}>
							{dateCreated}
						</Styled.ReviewCardDate>
						<Styled.ReviewCardText>{props.post.review}</Styled.ReviewCardText>
					</Styled.ReviewCardTitleDateText>

					{/* Author Rating */}
					<Styled.ReviewCardAuthorRating tag_count={tagCount}>
						<Styled.ReviewCardAuthorRatingText>
							I give this series a rating of:&nbsp;
						</Styled.ReviewCardAuthorRatingText>
						<Styled.ReviewCardAuthorRatingValue>
							{props.post.personal_rating}/10
						</Styled.ReviewCardAuthorRatingValue>
					</Styled.ReviewCardAuthorRating>

					{/* Tags */}
					<Styled.ReviewCardTagContainer tag_count={tagCount}>
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
