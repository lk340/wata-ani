import * as React from "react";
import * as ReactRedux from "react-redux";

import * as Lodash from "lodash";

import * as Context from "@/context";
import * as Components from "@/components";
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
	currentUser: Context.AuthForm.CurrentUser;
	tagsRedux: Types.Tags;
	ratingsRedux: Types.Ratings;
};

export const ModalForm = (props: Props) => {
	const [seriesTitle, setSeries] = React.useState(props.postSeries);
	const [title, setTitle] = React.useState(props.postTitle);
	const [review, setReview] = React.useState(props.postReview);
	const [personalRating, setRating] = React.useState(props.personalRating.toString());
	const [ratingError, setRatingError] = React.useState("");

	React.useEffect(() => handleRatingError(), [personalRating]);

	// --- Animations --- //
	const animateForm = Springs.form();
	const animateInput = Springs.input();

	// --- Fetching Redux State --- //
	const dispatch = ReactRedux.useDispatch();
	const author = props.currentUser.id;
	const postRatingsRedux = Functions.getPosts()[props.postId].ratings;
	const postErrorsRedux = Functions.getPostsErrors();

	// --- Setting Tag Components --- //
	const tagsRedux = Functions.getTags();
	const tagTitles = Object.entries(Lodash.mapValues(tagsRedux, (tag) => tag.title));
	const tagCount = tagTitles.length;
	const tags = tagTitles.map((tag: [string, string]) => {
		const id = tag[0];
		const title = tag[1];
		const isLastTag = Number(id) === tagCount;

		return (
			<Styled.TagContainer key={id}>
				<Tag title={title} margin={isLastTag ? false : true} />
			</Styled.TagContainer>
		);
	});

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
		};

		if (ratingError === "") {
			Actions.Posts.thunkUpdatePost(props.postId, data, dispatch, postErrorsRedux);
			props.toggleModalOpen();
		}
	}

	return (
		<Styled.ModalFormContainer is_open={props.isOpen.toString()}>
			<Styled.ModalFormContainerOverlay onClick={() => props.toggleModalOpen()} />
			{/* Form */}
			<Styled.ModalFormWrapper>
				<Styled.ModalForm onSubmit={handleSubmit} style={animateForm}>
					{/* Close Icon */}
					<Styled.ModalFormCloseContainer>
						<Components.Spacer height="1px" />
						<Styled.ModalFormClose onClick={() => props.toggleModalOpen()} />
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
