import * as React from "react";
import * as Use from "react-use";

import * as Context from "@/context";
import * as Components from "@/components";
import * as Actions from "@/redux/actions";
import * as Functions from "@/utils/functions";
import * as Types from "@/utils/types";

import * as Styled from "./post.styled";
import * as Springs from "./post.springs";

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
 * Post Tag Components
 * Rating Logic
 */

export const Post = (props: Props) => {
	const { location } = Context.Location.useLocationContext();
	const { windows } = Context.Windows.useWindowsContext();

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
	const postContainerRef = React.useRef(null);
	const postRef = React.useRef(null);
	const postWrapperRef = React.useRef(null);

	let wrapperWidth = 0;
	if (postWrapperRef.current) {
		wrapperWidth = postWrapperRef.current.clientWidth;
	}

	React.useEffect(() => {
		if (postContainerRef.current && postRef.current) {
			const postContainerHeight = postContainerRef.current.clientHeight;
			const postHeight = postRef.current.clientHeight;

			if (postHeight > postContainerHeight) {
				setShowReadMore(true);
			} else {
				setShowReadMore(false);
			}
		}
	}, [postContainerRef, postRef]);

	// --- Animations --- //
	const animatePost = Springs.post();
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

	// --- Post Tag Components --- //
	const tags = props.post.tags;
	const tagCount = tags.length;
	const _postHasTags = tagCount > 0;
	const _tagsReduxHasLoaded = Object.keys(tagsRedux).length > 0;

	let postTagComponents;
	if (_postHasTags && _tagsReduxHasLoaded) {
		postTagComponents = props.post.tags.map((tagId: number) => {
			const tagGenre = tagsRedux[tagId].genre.toLowerCase();
			return (
				<Styled.PostTagKeyWrapper key={tagId}>
					<Styled.PostTag style={animateTag}>{tagGenre}</Styled.PostTag>
				</Styled.PostTagKeyWrapper>
			);
		});
	} else {
		postTagComponents = "";
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
		if (props.currentUser.ratings) {
			if (props.currentUser.ratings.includes(postUserRatingId)) {
				userHasRated = true;
				userHasRatedRatingId = postUserRatingId;
			} else {
				userHasRated = false;
			}
		}
	});

	return (
		<Styled.PostContainer
			ref={postContainerRef}
			read_more_expanded={readMoreExpanded.toString()}
			is_profile={location.state.pathname.includes("profile").toString()}
			style={animatePost}
		>
			<ModalForm
				isOpen={modalOpen}
				toggleModalOpen={toggleModalOpen}
				post={props.post}
				currentUser={props.currentUser}
			/>

			<Styled.PostWrapper ref={postWrapperRef} style={animateWrapper}>
				{/* Fade */}
				<Styled.PostWrapperFade style={animateFade} />

				<Styled.Post ref={postRef}>
					{/* Header */}
					<Styled.PostHeader>
						{/* Profile Picture & Username */}
						<Styled.PostProfilePicture_Username>
							{/* <Styled.PostProfilePicture /> */}
							<Styled.PostUsername to={`/profile/?username=${props.username}`}>
								{props.username}
							</Styled.PostUsername>
						</Styled.PostProfilePicture_Username>
						{/* Modal Button (ellipses) */}
						<Styled.PostModalButtonDotContainer
							onClick={toggleModalOpen}
							belongs_to_current_user={belongsToCurrentUser.toString()}
						>
							<Styled.PostModalButtonDot />
							<Components.Spacer height={"2px"} />
							<Styled.PostModalButtonDot />
							<Components.Spacer height={"2px"} />
							<Styled.PostModalButtonDot />
						</Styled.PostModalButtonDotContainer>
					</Styled.PostHeader>

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
					<Styled.PostSeriesTitle
						belongs_to_current_user={belongsToCurrentUser.toString()}
					>
						{props.post.series_title}
					</Styled.PostSeriesTitle>

					{/* Title & Date & Text */}
					<Styled.PostTitleDateText>
						<Styled.PostTitle>{props.post.title}</Styled.PostTitle>
						<Styled.PostDate style={animateCardDate}>{dateCreated}</Styled.PostDate>
						<Styled.PostText>{props.post.review}</Styled.PostText>
					</Styled.PostTitleDateText>

					{/* Author Rating */}
					<Styled.PostAuthorRating tag_count={tagCount}>
						<Styled.PostAuthorRatingText>
							I give this series a rating of:&nbsp;
						</Styled.PostAuthorRatingText>
						<Styled.PostAuthorRatingValue>
							{props.post.personal_rating}/10
						</Styled.PostAuthorRatingValue>
					</Styled.PostAuthorRating>

					{/* Tags */}
					<Styled.PostTagContainer tag_count={tagCount} wrapper_width={wrapperWidth}>
						{postTagComponents}
					</Styled.PostTagContainer>
				</Styled.Post>
			</Styled.PostWrapper>

			{/* Read More */}
			<Styled.PostReadMore style={animateReadMore}>
				<Styled.PostReadMoreText onClick={toggleReadMore}>
					{readMoreExpanded ? "Read Less" : "Read More"}
				</Styled.PostReadMoreText>
			</Styled.PostReadMore>
		</Styled.PostContainer>
	);
};
