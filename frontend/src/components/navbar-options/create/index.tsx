import * as React from "react";
import axios from "axios";

import * as Context from "@/context";
import * as Functions from "@/utils/functions";
import * as Types from "@/utils/types";
import * as AxiosHelpers from "@/utils/api/axios-helpers";

import * as Styled from "./create.styled";
import * as Springs from "./create.springs";

/**
 * Animations
 * Fetching Redux State
 * Handlers
 */

export const Create = () => {
	const { navbar } = Context.Navbar.useNavbarContext();
	const { userAgent } = Context.UserAgent.useUserAgentContext();

	const [seriesTitle, setSeriesTitle] = React.useState("");
	const [postTitle, setPostTitle] = React.useState("");
	const [review, setReview] = React.useState("");
	const [personalRating, setPersonalRating] = React.useState(0);
	const [personalRatingErrors, setPersonalRatingErrors] = React.useState("");

	// --- Animations --- //
	const transitionAnimation = Springs.transition(
		navbar.state.create,
		userAgent.state.isMobile,
	);

	const animateCreate = Springs.create();
	const animateHeader = Springs.header();
	const animateInput = Springs.input();

	// --- Setting Personal Rating Errors --- //
	React.useEffect(() => {}, [personalRating]);

	// --- Fetching Redux State --- //
	const currentUser = Functions.getSession();

	// --- Handlers --- //
	function handleTitleChange(
		event: Types.Input,
		type: "series" | "post" | "personal rating",
	): void {
		if (type === "series") setSeriesTitle(event.currentTarget.value);
		else if (type === "post") setPostTitle(event.currentTarget.value);
		else setPersonalRating(Number(personalRating));
	}

	function handleReviewChange(event: Types.Textarea): void {
		setReview(event.currentTarget.value);
	}

	function handleSubmit(event: Types.Submit): void {
		event.preventDefault();

		async function createPost(): Promise<void> {
			try {
				const data = {
					title: postTitle,
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
					setPostTitle("");
					setReview("");
					setPersonalRating(0);
					setPersonalRatingErrors("");
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

		if (currentUser.id) createPost();
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
								<Styled.CreateBodyFormInput
									onChange={(event: Types.Input) => handleTitleChange(event, "series")}
									placeholder="Series title here (max 100 characters)"
									style={animateInput}
								/>

								{/* Post Title Input */}
								<Styled.CreateBodyFormInput
									onChange={(event: Types.Input) => handleTitleChange(event, "post")}
									style={animateInput}
									placeholder="Your title here (max 50 characters)"
								/>

								{/* Personal Rating */}
								<Styled.CreateBodyFormInput
									onChange={(event: Types.Input) =>
										handleTitleChange(event, "personal rating")
									}
									placeholder="Your personal rating here"
									style={animateInput}
								/>

								{/* Review Text Area */}
								<Styled.CreateBodyFormReviewTextarea
									onChange={handleReviewChange}
									style={animateInput}
								/>
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

// ================== //
// ↓↓↓ Form Title Group ↓↓↓ //
// ================== //

type FormTitleGroupProps = {
	title: string;
	characterCount: number;
	errorMessage: string;
};

const FormTitleGroup = (props: FormTitleGroupProps) => {
	return (
		<div>
			<Styled.CreateBodyFormTitle_Count>
				<Styled.CreateBodyFormTitle>{props.title}</Styled.CreateBodyFormTitle>
				<Styled.CreateBodyFormCharacterCount>
					{props.characterCount}
				</Styled.CreateBodyFormCharacterCount>
			</Styled.CreateBodyFormTitle_Count>
			<Styled.CreateBodyFormPersonalRatingError>
				{props.errorMessage}
			</Styled.CreateBodyFormPersonalRatingError>
		</div>
	);
};
