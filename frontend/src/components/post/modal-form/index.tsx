import * as React from "react";
import * as ReactRedux from "react-redux";
import * as Lodash from "lodash";

import * as Context from "@/context";
import * as Actions from "@/redux/actions";
import * as Types from "@/utils/types";
import * as Functions from "@/utils/functions";

import * as Styled from "./modal-form.styled";
import * as Springs from "./modal-form.springs";

import { Tag } from "./tag";

type Props = {
	post: Actions.Posts.Post;
	currentUser: Context.AuthForm.CurrentUser;
	isOpen: boolean;
	toggleModalOpen: Function;
};

export type SelectedTags = {
	[key: string]: Actions.Tags.Tag;
};

/**
 * Fetching Redux State
 * selectedTags (state) Handlers
 * Initializing selectedTags (state)
 * Animations
 * Setting Tag Components
 * Error Handlers
 * Form Handlers
 */

export const ModalForm = (props: Props) => {
	const [seriesTitle, setSeriesTitle] = React.useState(props.post.series_title);
	const [reviewTitle, setReviewTitle] = React.useState(props.post.title);
	const [review, setReview] = React.useState(props.post.review);
	const [personalRating, setRating] = React.useState(
		props.post.personal_rating.toString(),
	);
	const [seriesTitleError, setSeriesTitleError] = React.useState("");
	const [reviewTitleError, setReviewTitleError] = React.useState("");
	const [reviewError, setReviewError] = React.useState("");
	const [personalRatingError, setPersonalRatingError] = React.useState("");
	const [selectedTags, setSelectedTags] = React.useState<SelectedTags>({});

	// --- Fetching Redux State --- //
	const dispatch = ReactRedux.useDispatch();
	const author = props.currentUser.id;
	const postErrorsRedux = Functions.getPostsErrors();
	const tagsRedux = Functions.getTags();

	// --- selectedTags (state) Handlers --- //
	function addToSelectedTags(tagId: string): void {
		const newTags = selectedTags;
		newTags[tagId] = tagsRedux[tagId];
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

	// --- Initializing selectedTags (state) --- //
	React.useEffect(() => {
		if (Object.values(tagsRedux).length > 0) {
			props.post.tags.forEach((tagId: number) => {
				const newTags = selectedTags;
				newTags[tagId] = tagsRedux[tagId];
				setSelectedTags(newTags);
			});
		}
	}, [Object.values(tagsRedux).length]);

	React.useEffect(() => handleSeriesTitleError(), [seriesTitle]);
	React.useEffect(() => handleReviewTitleError(), [reviewTitle]);
	React.useEffect(() => handleReviewError(), [review]);
	React.useEffect(() => handlePersonalRatingError(), [personalRating]);

	// --- Animations --- //
	const animateContainer = Springs.container(props.isOpen);
	const animateForm = Springs.form();
	const animateHeader = Springs.header();
	const animateCharacterCount = Springs.characterCount();
	const animateError = Springs.error();
	const animateInput = Springs.input();

	// --- Setting Tag Components --- //
	const tagGenres = Object.entries(Lodash.mapValues(tagsRedux, (tag) => tag.genre));
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

	// --- Error Handlers --- //
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
		if (personalRating === "") setPersonalRatingError("You must set a rating!");
		else if (personalRating === "0") setPersonalRatingError("Must be between 1 and 10!");
		else if (Number(personalRating) < 1)
			setPersonalRatingError("Must be between 1 and 10!");
		else if (Number(personalRating) > 10)
			setPersonalRatingError("Must be between 1 and 10!");
		else if (!Number(personalRating)) setPersonalRatingError("Must be a number!");
		else setPersonalRatingError("");
	}

	// --- Form Handlers --- //
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
			user_ratings: props.post.user_ratings,
			tags: Functions.convertKeysToIntegers(selectedTags),
		};

		if (personalRatingError === "") {
			Actions.Posts.thunkUpdatePost(props.post.id, data, dispatch, postErrorsRedux);
			props.toggleModalOpen();
		}
	}

	return (
		<Styled.ModalFormContainer style={animateContainer}>
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
						<Styled.ModalFormGroupTitle_Count>
							<Styled.ModalFormGroupTitle>Series Title</Styled.ModalFormGroupTitle>
							<Styled.ModalFormGroupCharacterCount style={animateCharacterCount}>
								{seriesTitle.length}
							</Styled.ModalFormGroupCharacterCount>
						</Styled.ModalFormGroupTitle_Count>
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
						<Styled.ModalFormGroupTitle_Count>
							<Styled.ModalFormGroupTitle>Review Title</Styled.ModalFormGroupTitle>
							<Styled.ModalFormGroupCharacterCount style={animateCharacterCount}>
								{reviewTitle.length}
							</Styled.ModalFormGroupCharacterCount>
						</Styled.ModalFormGroupTitle_Count>
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
						<Styled.ModalFormGroupTitle_Count>
							<Styled.ModalFormGroupTitle>Your Review</Styled.ModalFormGroupTitle>
							<Styled.ModalFormGroupCharacterCount style={animateCharacterCount}>
								{review.length}
							</Styled.ModalFormGroupCharacterCount>
						</Styled.ModalFormGroupTitle_Count>
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
