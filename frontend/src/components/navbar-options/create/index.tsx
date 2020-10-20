import * as React from "react";
import * as ReactRedux from "react-redux";
import axios from "axios";

import * as Context from "@/context";
import * as Actions from "@/redux/actions";
import * as Functions from "@/utils/functions";
import * as Types from "@/utils/types";
import * as AxiosHelpers from "@/utils/api/axios-helpers";

import * as Styled from "./create.styled";
import * as Springs from "./create.springs";

/**
 * Animations
 * Error Handling
 * Fetching Redux State
 * Error Handlers
 * Form Handlers
 */

export const Create = () => {
	const { navbar } = Context.Navbar.useNavbarContext();
	const { userAgent } = Context.UserAgent.useUserAgentContext();

	const [seriesTitle, setSeriesTitle] = React.useState("");
	const [reviewTitle, setReviewTitle] = React.useState("");
	const [review, setReview] = React.useState("");
	const [personalRating, setPersonalRating] = React.useState("");
	const [seriesTitleError, setSeriesTitleError] = React.useState("");
	const [reviewTitleError, setReviewTitleError] = React.useState("");
	const [reviewError, setReviewError] = React.useState("");
	const [personalRatingError, setPersonalRatingError] = React.useState("");

	// --- Animations --- //
	const transitionAnimation = Springs.transition(
		navbar.state.create,
		userAgent.state.isMobile,
	);

	const animateCreate = Springs.create();
	const animateHeader = Springs.header();
	const animateInput = Springs.input();

	// --- Error Handling --- //
	React.useEffect(() => handleSeriesTitleError(), [seriesTitle]);
	React.useEffect(() => handleReviewTitleError(), [reviewTitle]);
	React.useEffect(() => handleReviewError(), [review]);
	React.useEffect(() => handlePersonalRatingError(), [personalRating]);

	// --- Fetching Redux State --- //
	const dispatch = ReactRedux.useDispatch();
	const currentUser = Functions.getSession();
	const postsErrors = Functions.getPostsErrors();

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
	function handleTitleChange(
		event: Types.Input,
		type: "series" | "post" | "personal rating",
	): void {
		const userInput = event.currentTarget.value;
		if (type === "series") setSeriesTitle(userInput);
		else if (type === "post") setReviewTitle(userInput);
		else setPersonalRating(userInput);
	}

	function handleReviewChange(event: Types.Textarea): void {
		setReview(event.currentTarget.value);
	}

	function handleSubmit(event: Types.Submit): void {
		event.preventDefault();

		async function createPost(): Promise<void> {
			try {
				const data = {
					title: reviewTitle,
					series_title: seriesTitle,
					review,
					personal_rating: personalRating,
					author: currentUser.id,
					user_ratings: [],
				};

				const validateStatus = AxiosHelpers.validateStatus;
				const response = await axios.post(`/api/posts/`, data, { validateStatus });

				// Success
				if (response.status < 400) {
					console.log(response.data);

					setSeriesTitle("");
					setReviewTitle("");
					setReview("");
					setPersonalRating("");
					setSeriesTitleError("");
					setReviewTitleError("");
					setReviewError("");
					setPersonalRatingError("");
					navbar.setters.toggleCreate();
				}
				// Failure
				else {
					console.log(response.data);
				}
			} catch (error) {
				// Dev Debug Log
				console.log(error);
			}
		}

		// if (currentUser.id) createPost();

		if (
			currentUser.id &&
			seriesTitleError === "" &&
			reviewTitleError === "" &&
			reviewError === "" &&
			personalRatingError === ""
		) {
			const data = {
				title: reviewTitle,
				series_title: seriesTitle,
				review,
				personal_rating: Number(personalRating),
				author: currentUser.id,
				user_ratings: [],
			};

			Actions.Posts.thunkCreateUserPost(data, dispatch, postsErrors);

			setSeriesTitle("");
			setReviewTitle("");
			setReview("");
			setPersonalRating("");
			setSeriesTitleError("");
			setReviewTitleError("");
			setReviewError("");
			setPersonalRatingError("");
			navbar.setters.toggleCreate();
		}
	}

	return transitionAnimation.map(({ item, key, props }) => {
		return (
			item && (
				<Styled.CreateContainer key={key} style={props}>
					<Styled.Create style={animateCreate}>
						{/* Header */}
						<Styled.CreateHeader style={animateHeader}>
							<Styled.CreateHeaderTitle>Create A Review</Styled.CreateHeaderTitle>
							<Styled.CreateHeaderClose onClick={navbar.setters.toggleCreate} />
						</Styled.CreateHeader>
						{/* Body */}
						<Styled.CreateBody>
							{/* Form */}
							<Styled.CreateBodyForm onSubmit={handleSubmit}>
								{/* Series Title Input */}
								<Styled.CreateBodyFormGroup>
									<FormTitleGroup
										title="Series Title"
										characterCount={seriesTitle.length}
										errorMessage={seriesTitleError}
									/>
									<Styled.CreateBodyFormSeriesTitleInput
										onChange={(event: Types.Input) => handleTitleChange(event, "series")}
										style={animateInput}
									/>
								</Styled.CreateBodyFormGroup>

								{/* Review Title Input */}
								<Styled.CreateBodyFormGroup>
									<FormTitleGroup
										title="Review Title"
										characterCount={reviewTitle.length}
										errorMessage={reviewTitleError}
									/>
									<Styled.CreateBodyFormReviewTitleInput
										onChange={(event: Types.Input) => handleTitleChange(event, "post")}
										style={animateInput}
									/>
								</Styled.CreateBodyFormGroup>

								{/* Personal Rating */}
								<Styled.CreateBodyFormGroup>
									<FormTitleGroup
										title="Personal Rating"
										errorMessage={personalRatingError}
									/>
									<Styled.CreateBodyFormPersonalRatingInput
										onChange={(event: Types.Input) =>
											handleTitleChange(event, "personal rating")
										}
										style={animateInput}
									/>
								</Styled.CreateBodyFormGroup>

								{/* Review Text Area */}
								<Styled.CreateBodyFormGroup>
									<FormTitleGroup
										title="Your Review"
										characterCount={review.length}
										errorMessage={reviewError}
									/>
									<Styled.CreateBodyFormReviewTextarea
										onChange={handleReviewChange}
										style={animateInput}
									/>
								</Styled.CreateBodyFormGroup>
								{/* Submit Button */}
								<Styled.CreateBodyFormSubmitButton>
									Submit
								</Styled.CreateBodyFormSubmitButton>
							</Styled.CreateBodyForm>
						</Styled.CreateBody>
					</Styled.Create>
				</Styled.CreateContainer>
			)
		);
	});
};

// ======================== //
// ↓↓↓ Form Title Group ↓↓↓ //
// ======================== //

type FormTitleGroupProps = {
	title: string;
	characterCount?: number;
	errorMessage: string;
};

const FormTitleGroup = (props: FormTitleGroupProps) => {
	const animateCharacterCount = Springs.characterCount();
	const animateError = Springs.error();

	let characterCount: React.ReactNode | "" = "";

	if (props.characterCount) {
		characterCount = (
			<Styled.CreateBodyFormCharacterCount style={animateCharacterCount}>
				{props.characterCount}
			</Styled.CreateBodyFormCharacterCount>
		);
	}

	return (
		<>
			<Styled.CreateBodyFormTitle_Count>
				<Styled.CreateBodyFormTitle>{props.title}</Styled.CreateBodyFormTitle>
				{characterCount}
			</Styled.CreateBodyFormTitle_Count>
			<Styled.CreateBodyFormPersonalRatingError style={animateError}>
				{props.errorMessage}
			</Styled.CreateBodyFormPersonalRatingError>
		</>
	);
};
