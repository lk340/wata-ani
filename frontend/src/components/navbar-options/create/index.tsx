import * as React from "react";
import * as ReactRedux from "react-redux";

import * as Context from "@/context";
import * as Functions from "@/utils/functions";
import * as Types from "@/utils/types";

import * as OptionStyled from "../navbar-options.styled";
import * as OptionSprings from "../navbar-options.springs";

import * as Styled from "./create.styled";

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
	const animateInput = OptionSprings.input();

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
							<OptionStyled.Form
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
								<OptionStyled.FormGroup>
									<FormTitleGroup
										title="Series Title"
										characterCount={navbarOptionsCreate.state.seriesTitle.length}
										errorMessage={navbarOptionsCreate.state.seriesTitleError}
									/>
									<OptionStyled.FormInput
										onChange={(event: Types.Input) =>
											navbarOptionsCreate.handlers.handleTitleChange(event, "series")
										}
										placeholder="Series title here (max 100 characters)"
										style={animateInput}
									/>
								</OptionStyled.FormGroup>

								{/* Review Title Input */}
								<OptionStyled.FormGroup>
									<FormTitleGroup
										title="Review Title"
										characterCount={navbarOptionsCreate.state.reviewTitle.length}
										errorMessage={navbarOptionsCreate.state.reviewTitleError}
									/>
									<OptionStyled.FormInput
										onChange={(event: Types.Input) =>
											navbarOptionsCreate.handlers.handleTitleChange(event, "post")
										}
										placeholder="Your title here (max 50 characters)"
										style={animateInput}
									/>
								</OptionStyled.FormGroup>

								{/* Personal Rating */}
								<OptionStyled.FormGroup>
									<FormTitleGroup
										title="Personal Rating"
										errorMessage={navbarOptionsCreate.state.personalRatingError}
									/>
									<OptionStyled.FormInput
										onChange={(event: Types.Input) =>
											navbarOptionsCreate.handlers.handleTitleChange(
												event,
												"personal rating",
											)
										}
										placeholder="Your personal rating here"
										style={animateInput}
									/>
								</OptionStyled.FormGroup>

								{/* Review Text Area */}
								<OptionStyled.FormGroup>
									<FormTitleGroup
										title="Your Review"
										characterCount={navbarOptionsCreate.state.review.length}
										errorMessage={navbarOptionsCreate.state.reviewError}
									/>
									<Styled.CreateFormReviewTextarea
										onChange={navbarOptionsCreate.handlers.handleReviewChange}
										placeholder="Your review here (max 500 characters)"
										style={animateInput}
									/>
								</OptionStyled.FormGroup>

								{/* Submit Button */}
								<OptionStyled.FormSubmitButton>Submit</OptionStyled.FormSubmitButton>
							</OptionStyled.Form>
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
	const animateCharacterCount = OptionSprings.characterCount();
	const animateError = OptionSprings.error();

	let characterCount: React.ReactNode | "" = "";

	if (props.characterCount) {
		characterCount = (
			<OptionStyled.FormCharacterCount style={animateCharacterCount}>
				{props.characterCount}
			</OptionStyled.FormCharacterCount>
		);
	}

	return (
		<>
			<OptionStyled.FormTitle_Count>
				<OptionStyled.FormTitle>{props.title}</OptionStyled.FormTitle>
				{characterCount}
			</OptionStyled.FormTitle_Count>
			<OptionStyled.FormPersonalRatingError style={animateError}>
				{props.errorMessage}
			</OptionStyled.FormPersonalRatingError>
		</>
	);
};
