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
	const [seriesTitle, setSeries] = React.useState(props.postSeries);
	const [title, setTitle] = React.useState(props.postTitle);
	const [review, setReview] = React.useState(props.postReview);
	const [personalRating, setRating] = React.useState(props.personalRating.toString());
	const [ratingError, setRatingError] = React.useState("");
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

	React.useEffect(() => handleRatingError(), [personalRating]);

	// --- Animations --- //
	const animateForm = Springs.form();
	const animateHeader = Springs.header();
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
	function handleRatingError(): void {
		if (personalRating === "") setRatingError("");
		else if (!Number(personalRating)) setRatingError("Must be a number!");
		else if (Number(personalRating) < 1) setRatingError("Minimum rating is 1!");
		else if (Number(personalRating) > 10) setRatingError("Maximum rating is 10!");
		else setRatingError("");
	}

	type InputType = "series title" | "post title" | "review" | "rating";
	function handleChange(event: Types.Input | Types.Textarea, inputType: InputType): void {
		const userInput = event.currentTarget.value;
		if (inputType === "series title") setSeries(userInput);
		else if (inputType === "post title") setTitle(userInput);
		else if (inputType === "review") setReview(userInput);
		else setRating(userInput);
	}

	function handleSubmit(event: Types.Submit): void {
		event.preventDefault();

		const data = {
			title,
			series_title: seriesTitle,
			review,
			personal_rating: Number(personalRating),
			author,
			ratings: postRatingsRedux,
			tags: Functions.convertKeysToIntegers(selectedTags),
		};

		if (ratingError === "") {
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
						<Styled.ModalFormGrouptTitle>Series Title</Styled.ModalFormGrouptTitle>
						<Styled.ModalFormInputField
							onChange={(event: Types.Input) => handleChange(event, "series title")}
							value={seriesTitle}
							style={animateInput}
						/>
					</Styled.ModalFormGroup>

					{/* Post Title */}
					<Styled.ModalFormGroup>
						<Styled.ModalFormGrouptTitle>Post Title</Styled.ModalFormGrouptTitle>
						<Styled.ModalFormInputField
							onChange={(event: Types.Input) => handleChange(event, "post title")}
							value={title}
							style={animateInput}
						/>
					</Styled.ModalFormGroup>

					{/* Review */}
					<Styled.ModalFormGroup>
						<Styled.ModalFormGrouptTitle>Review</Styled.ModalFormGrouptTitle>
						<Styled.ModalFormTextareaField
							onChange={(event: Types.Textarea) => handleChange(event, "review")}
							value={review}
							style={animateInput}
						/>
					</Styled.ModalFormGroup>

					{/* Personal Rating */}
					<Styled.ModalFormGroup>
						<Styled.ModalFormGrouptTitle>Personal Rating</Styled.ModalFormGrouptTitle>
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
						<Styled.ModalFormGrouptTitle>Tags</Styled.ModalFormGrouptTitle>
						<Styled.Tags length={tagCount}>{tags}</Styled.Tags>
					</Styled.ModalFormGroup>

					{/* Submit Button */}
					<Styled.ModalFormSubmit>Edit</Styled.ModalFormSubmit>
				</Styled.ModalForm>
			</Styled.ModalFormWrapper>
		</Styled.ModalFormContainer>
	);
};
