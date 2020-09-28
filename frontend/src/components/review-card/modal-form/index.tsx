import * as React from "react";
import * as ReactRedux from "react-redux";

import * as Lodash from "lodash";

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
};

export const ModalForm = (props: Props) => {
	const [series_title, setSeries] = React.useState("");
	const [title, setTitle] = React.useState("");
	const [review, setReview] = React.useState("");
	const [personal_rating, setRating] = React.useState("0");
	const [ratingError, setRatingError] = React.useState("");

	React.useEffect(() => {
		setSeries(props.postSeries);
		setTitle(props.postTitle);
		setReview(props.postReview);
		setRating(props.personalRating.toString());
	}, []);

	React.useEffect(() => {
		handleRatingError();
	}, [personal_rating]);

	const animateForm = Springs.form();
	const animateInput = Springs.input();

	const dispatch = ReactRedux.useDispatch();
	const author = Functions.getSession().id;
	const postRatingsRedux = Functions.getPosts()[props.postId].ratings;
	const postErrorsRedux = Functions.getPostsErrors();

	const tagsRedux = Functions.getTags();
	const tagTitles = Object.entries(Lodash.mapValues(tagsRedux, (tag) => tag.title));
	const tagCount = tagTitles.length;
	const lastTagId = tagCount + 1;
	const tags = tagTitles.map((tag: [string, string]) => {
		const id = tag[0];
		const title = tag[1];
		const isLastTag = Number(id) === lastTagId;

		return (
			<Styled.TagContainer key={id}>
				<Tag title={title} margin={isLastTag ? false : true} />
			</Styled.TagContainer>
		);
	});

	function handleRatingError(): void {
		if (personal_rating === "") setRatingError("");
		else if (!Number(personal_rating)) setRatingError("Must be a number!");
		else if (Number(personal_rating) < 1) setRatingError("Minimum rating is 1!");
		else if (Number(personal_rating) > 10) setRatingError("Maximum rating is 10!");
		else setRatingError("");
	}

	type InputType = "series title" | "post title" | "review" | "rating";

	function handleChange(event: Types.Input | Types.Textarea, inputType: InputType): void {
		switch (inputType) {
			case "series title":
				setSeries(event.currentTarget.value);
				break;

			case "post title":
				setTitle(event.currentTarget.value);
				break;

			case "review":
				setReview(event.currentTarget.value);
				break;

			default:
				setRating(event.currentTarget.value);
				break;
		}
	}

	function handleSubmit(event: Types.Submit): void {
		event.preventDefault();

		const data = {
			title,
			series_title,
			review,
			personal_rating: Number(personal_rating),
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
							value={series_title}
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
								value={personal_rating}
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
