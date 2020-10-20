import * as React from "react";
import * as ReactRedux from "react-redux";

import * as Context from "@/context";
import * as Functions from "@/utils/functions";
import * as Types from "@/utils/types";

import * as Styled from "./create.styled";
import * as Springs from "./create.springs";

/**
 * Fetching Redux State
 * Animations
 */

export const Create = () => {
	const {
		navbarOptionsCreate,
	} = Context.NavbarOptionsCreate.useNavbarOptionsCreateContext();
	const { navbar } = Context.Navbar.useNavbarContext();
	const { userAgent } = Context.UserAgent.useUserAgentContext();

	// --- Fetching Redux State --- //
	const dispatch = ReactRedux.useDispatch();
	const currentUser = Functions.getSession();
	const postsErrorsRedux = Functions.getPostsErrors();

	// --- Animations --- //
	const transitionAnimation = Springs.transition(
		navbar.state.create,
		userAgent.state.isMobile,
	);

	const animateCreate = Springs.create();
	const animateHeader = Springs.header();
	const animateInput = Springs.input();

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
							<Styled.CreateBodyForm
								onSubmit={(event: Types.Submit) =>
									navbarOptionsCreate.handlers.handleSubmit(
										event,
										navbar.setters.toggleCreate,
										currentUser.id,
										dispatch,
										postsErrorsRedux,
									)
								}
							>
								{/* Series Title Input */}
								<Styled.CreateBodyFormGroup>
									<FormTitleGroup
										title="Series Title"
										characterCount={navbarOptionsCreate.state.seriesTitle.length}
										errorMessage={navbarOptionsCreate.state.seriesTitleError}
									/>
									<Styled.CreateBodyFormSeriesTitleInput
										onChange={(event: Types.Input) =>
											navbarOptionsCreate.handlers.handleTitleChange(event, "series")
										}
										style={animateInput}
									/>
								</Styled.CreateBodyFormGroup>

								{/* Review Title Input */}
								<Styled.CreateBodyFormGroup>
									<FormTitleGroup
										title="Review Title"
										characterCount={navbarOptionsCreate.state.reviewTitle.length}
										errorMessage={navbarOptionsCreate.state.reviewTitleError}
									/>
									<Styled.CreateBodyFormReviewTitleInput
										onChange={(event: Types.Input) =>
											navbarOptionsCreate.handlers.handleTitleChange(event, "post")
										}
										style={animateInput}
									/>
								</Styled.CreateBodyFormGroup>

								{/* Personal Rating */}
								<Styled.CreateBodyFormGroup>
									<FormTitleGroup
										title="Personal Rating"
										errorMessage={navbarOptionsCreate.state.personalRatingError}
									/>
									<Styled.CreateBodyFormPersonalRatingInput
										onChange={(event: Types.Input) =>
											navbarOptionsCreate.handlers.handleTitleChange(
												event,
												"personal rating",
											)
										}
										style={animateInput}
									/>
								</Styled.CreateBodyFormGroup>

								{/* Review Text Area */}
								<Styled.CreateBodyFormGroup>
									<FormTitleGroup
										title="Your Review"
										characterCount={navbarOptionsCreate.state.review.length}
										errorMessage={navbarOptionsCreate.state.reviewError}
									/>
									<Styled.CreateBodyFormReviewTextarea
										onChange={navbarOptionsCreate.handlers.handleReviewChange}
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
