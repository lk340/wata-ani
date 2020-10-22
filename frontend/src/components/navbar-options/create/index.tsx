import * as React from "react";
import * as ReactRedux from "react-redux";

import * as Context from "@/context";
import * as Functions from "@/utils/functions";
import * as Types from "@/utils/types";

import * as OptionStyled from "../navbar-options.styled";
import * as OptionSprings from "../navbar-options.springs";

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
	const transitionAnimation = OptionSprings.transition(
		navbar.state.create,
		userAgent.state.isMobile,
	);

	const animateWrapper = OptionSprings.wrapper();
	const animateHeader = OptionSprings.header();
	const animateInput = Springs.input();

	return transitionAnimation.map(({ item, key, props }) => {
		return (
			item && (
				<OptionStyled.Container key={key} style={props}>
					<OptionStyled.Wrapper style={animateWrapper}>
						{/* Header */}
						<OptionStyled.Header style={animateHeader}>
							<OptionStyled.HeaderTitle>Create A Review</OptionStyled.HeaderTitle>
							<OptionStyled.HeaderClose onClick={navbar.setters.toggleCreate} />
						</OptionStyled.Header>
						{/* Body */}
						<OptionStyled.Body>
							{/* Form */}
							<Styled.CreateForm
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
								<Styled.CreateFormGroup>
									<FormTitleGroup
										title="Series Title"
										characterCount={navbarOptionsCreate.state.seriesTitle.length}
										errorMessage={navbarOptionsCreate.state.seriesTitleError}
									/>
									<Styled.CreateFormSeriesTitleInput
										onChange={(event: Types.Input) =>
											navbarOptionsCreate.handlers.handleTitleChange(event, "series")
										}
										style={animateInput}
									/>
								</Styled.CreateFormGroup>

								{/* Review Title Input */}
								<Styled.CreateFormGroup>
									<FormTitleGroup
										title="Review Title"
										characterCount={navbarOptionsCreate.state.reviewTitle.length}
										errorMessage={navbarOptionsCreate.state.reviewTitleError}
									/>
									<Styled.CreateFormReviewTitleInput
										onChange={(event: Types.Input) =>
											navbarOptionsCreate.handlers.handleTitleChange(event, "post")
										}
										style={animateInput}
									/>
								</Styled.CreateFormGroup>

								{/* Personal Rating */}
								<Styled.CreateFormGroup>
									<FormTitleGroup
										title="Personal Rating"
										errorMessage={navbarOptionsCreate.state.personalRatingError}
									/>
									<Styled.CreateFormPersonalRatingInput
										onChange={(event: Types.Input) =>
											navbarOptionsCreate.handlers.handleTitleChange(
												event,
												"personal rating",
											)
										}
										style={animateInput}
									/>
								</Styled.CreateFormGroup>

								{/* Review Text Area */}
								<Styled.CreateFormGroup>
									<FormTitleGroup
										title="Your Review"
										characterCount={navbarOptionsCreate.state.review.length}
										errorMessage={navbarOptionsCreate.state.reviewError}
									/>
									<Styled.CreateFormReviewTextarea
										onChange={navbarOptionsCreate.handlers.handleReviewChange}
										style={animateInput}
									/>
								</Styled.CreateFormGroup>
								{/* Submit Button */}
								<Styled.CreateFormSubmitButton>Submit</Styled.CreateFormSubmitButton>
							</Styled.CreateForm>
						</OptionStyled.Body>
					</OptionStyled.Wrapper>
				</OptionStyled.Container>
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
			<Styled.CreateFormCharacterCount style={animateCharacterCount}>
				{props.characterCount}
			</Styled.CreateFormCharacterCount>
		);
	}

	return (
		<>
			<Styled.CreateFormTitle_Count>
				<Styled.CreateFormTitle>{props.title}</Styled.CreateFormTitle>
				{characterCount}
			</Styled.CreateFormTitle_Count>
			<Styled.CreateFormPersonalRatingError style={animateError}>
				{props.errorMessage}
			</Styled.CreateFormPersonalRatingError>
		</>
	);
};
