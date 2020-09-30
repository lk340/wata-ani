import * as React from "react";
import * as Lodash from "lodash";

import * as Context from "@/context";
import * as Actions from "@/redux/actions";
import * as Types from "@/utils/types";
import * as Functions from "@/utils/functions";

import * as Styled from "./modal-form.styled";
import * as Springs from "./modal-form.springs";

import { Tag } from "./tag";

type Props = {
	isOpen: boolean;
	toggleModalOpen: Function;
	postId: number;
	postSeries: string;
	postTitle: string;
	postReview: string;
	personalRating: number;
	postTags: number[];
	dispatch: Function;
	currentUser: Context.AuthForm.CurrentUser;
	tagsRedux: Types.Tags;
	ratingsRedux: Types.Ratings;
	postsRedux: Types.Posts;
	postsErrorsRedux: any;
};

export type SelectedTags = {
	[key: string]: Actions.Tags.Tag;
};

export const ModalForm = (props: Props) => {
	const [seriesTitle, setSeriesTitle] = React.useState(props.postSeries);
	const [reviewTitle, setReviewTitle] = React.useState(props.postTitle);
	const [review, setReview] = React.useState(props.postReview);
	const [personalRating, setRating] = React.useState(props.personalRating.toString());
	const [seriesTitleError, setSeriesTitleError] = React.useState("");
	const [reviewTitleError, setReviewTitleError] = React.useState("");
	const [reviewError, setReviewError] = React.useState("");
	const [personalRatingError, setPersonalRatingError] = React.useState("");
	const [selectedTags, setSelectedTags] = React.useState<SelectedTags>({});

	// --- selectedTags Handlers --- //
	function addToSelectedTags(tagId: string): void {
		const newTags = selectedTags;
		newTags[tagId] = props.tagsRedux[tagId];
		setSelectedTags(newTags);
	}

	function removeFromSelectedTags(tagId: string): void {
		const newTags = selectedTags;
		delete newTags[tagId];
		setSelectedTags(newTags);
	}

	function isTagSelected(tagId: string): boolean {
		return !!selectedTags[tagId];
	}

	// --- Initializing selectedTags --- //
	React.useEffect(() => {
		if (Object.values(props.tagsRedux).length > 0) {
			props.postTags.forEach((tagId: number) => {
				const newTags = selectedTags;
				newTags[tagId] = props.tagsRedux[tagId];
				setSelectedTags(newTags);
			});
		}
	}, [Object.values(props.tagsRedux).length]);

	React.useEffect(() => handleSeriesTitleError(), [seriesTitle]);
	React.useEffect(() => handleReviewTitleError(), [reviewTitle]);
	React.useEffect(() => handleReviewError(), [review]);
	React.useEffect(() => handlePersonalRatingError(), [personalRating]);

	// --- Animations --- //
	const animateForm = Springs.form();
	const animateHeader = Springs.header();
	const animateError = Springs.error();
	const animateInput = Springs.input();

	// --- Fetching Redux State --- //
	const author = props.currentUser.id;
	const postRatingsRedux = props.postsRedux[props.postId].ratings;

	// --- Setting Tag Components --- //
	const tagGenres = Object.entries(Lodash.mapValues(props.tagsRedux, (tag) => tag.genre));
	const tagCount = tagGenres.length;
	const tags = tagGenres.map((tag: [string, string]) => {
		const id = tag[0];
		const genre = tag[1];
		const isLastTag = Number(id) === tagCount;

		return (
			<Styled.TagContainer key={id}>
				<Tag
					tagId={id}
					genre={genre}
					margin={isLastTag ? false : true}
					selectedTags={selectedTags}
					addToSelectedTags={addToSelectedTags}
					removeFromSelectedTags={removeFromSelectedTags}
					isTagSelected={isTagSelected}
				/>
			</Styled.TagContainer>
		);
	});

	// --- Handlers --- //
	function handleSeriesTitleError(): void {
		if (seriesTitle === "") setSeriesTitleError("");
		else if (seriesTitle.length > 100) setSeriesTitleError("Max 100 characters!");
		else if (seriesTitle.length < 100) setSeriesTitleError("");
		else setSeriesTitleError("");
	}

	function handleReviewTitleError(): void {
		if (reviewTitle === "") setReviewTitleError("");
		else if (reviewTitle.length > 50) setReviewTitleError("Max 50 characters!");
		else if (reviewTitle.length < 50) setReviewTitleError("");
		else setReviewTitleError("");
	}

	function handleReviewError(): void {
		if (review === "") setReviewError("");
		else if (review.length > 500) setReviewError("Max 500 characters!");
		else if (review.length < 500) setReviewError("");
		else setReviewError("");
	}

	function handlePersonalRatingError(): void {
		if (personalRating === "") setPersonalRatingError("");
		else if (personalRating === "0") setPersonalRatingError("Must be between 1 and 10!");
		else if (Number(personalRating) < 1) setPersonalRatingError("Must be between 1 and 10!");
		else if (Number(personalRating) > 10) setPersonalRatingError("Must be between 1 and 10!");
		else if (!Number(personalRating)) setPersonalRatingError("Must be a number!");
		else setPersonalRatingError("");
	}

	type InputType = "series title" | "post title" | "review" | "rating";
	function handleChange(event: Types.Input | Types.Textarea, inputType: InputType): void {
		const userInput = event.currentTarget.value;
		if (inputType === "series title") setSeriesTitle(userInput);
		else if (inputType === "post title") setReviewTitle(userInput);
		else if (inputType === "review") setReview(userInput);
		else setRating(userInput);
	}

	function handleSubmit(event: Types.Submit): void {
		event.preventDefault();

		const data = {
			title: reviewTitle,
			series_title: seriesTitle,
			review,
			personal_rating: Number(personalRating),
			author,
			ratings: postRatingsRedux,
			tags: Functions.convertKeysToIntegers(selectedTags),
		};

		if (personalRatingError === "") {
			Actions.Posts.thunkUpdatePost(
				props.postId,
				data,
				props.dispatch,
				props.postsErrorsRedux,
			);
			props.toggleModalOpen();
		}
	}

	return (
		<Styled.ModalFormContainer is_open={props.isOpen.toString()}>
			{/* Form */}
			<Styled.ModalFormWrapper>
				<Styled.ModalForm onSubmit={handleSubmit} style={animateForm}>
					{/* Close Icon */}
					<Styled.ModalFormCloseContainer>
						<Styled.ModalFormCloseTitle style={animateHeader}>
							Edit Post
						</Styled.ModalFormCloseTitle>
						<Styled.ModalFormCloseIcon onClick={() => props.toggleModalOpen()} />
					</Styled.ModalFormCloseContainer>

					{/* Series Title */}
					<Styled.ModalFormGroup>
						<Styled.ModalFormGroupTitle>Series Title</Styled.ModalFormGroupTitle>
						<Styled.ModalFormGroupError style={animateError}>
							{seriesTitleError}
						</Styled.ModalFormGroupError>
						<Styled.ModalFormInputField
							onChange={(event: Types.Input) => handleChange(event, "series title")}
							value={seriesTitle}
							style={animateInput}
						/>
					</Styled.ModalFormGroup>

					{/* Review Title */}
					<Styled.ModalFormGroup>
						<Styled.ModalFormGroupTitle>Review Title</Styled.ModalFormGroupTitle>
						<Styled.ModalFormGroupError style={animateError}>
							{reviewTitleError}
						</Styled.ModalFormGroupError>
						<Styled.ModalFormInputField
							onChange={(event: Types.Input) => handleChange(event, "post title")}
							value={reviewTitle}
							style={animateInput}
						/>
					</Styled.ModalFormGroup>

					{/* Review */}
					<Styled.ModalFormGroup>
						<Styled.ModalFormGroupTitle>Your Review</Styled.ModalFormGroupTitle>
						<Styled.ModalFormGroupError style={animateError}>
							{reviewError}
						</Styled.ModalFormGroupError>
						<Styled.ModalFormTextareaField
							onChange={(event: Types.Textarea) => handleChange(event, "review")}
							value={review}
							style={animateInput}
						/>
					</Styled.ModalFormGroup>

					{/* Personal Rating */}
					<Styled.ModalFormGroup>
						<Styled.ModalFormGroupTitle>
							What do you rate this series?
						</Styled.ModalFormGroupTitle>
						<Styled.ModalFormGroupError style={animateError}>
							{personalRatingError}
						</Styled.ModalFormGroupError>
						<Styled.ModalFormPersonalRating>
							<Styled.ModalFormPersonalRatingInput
								onChange={(event: Types.Input) => handleChange(event, "rating")}
								style={animateInput}
								value={personalRating}
							/>
						</Styled.ModalFormPersonalRating>
					</Styled.ModalFormGroup>

					{/* Tags */}
					<Styled.ModalFormGroup>
						<Styled.ModalFormGroupTitle>Tags</Styled.ModalFormGroupTitle>
						<Styled.Tags length={tagCount}>{tags}</Styled.Tags>
					</Styled.ModalFormGroup>

					{/* Submit Button */}
					<Styled.ModalFormSubmit>Save</Styled.ModalFormSubmit>
				</Styled.ModalForm>
			</Styled.ModalFormWrapper>
		</Styled.ModalFormContainer>
	);
};
