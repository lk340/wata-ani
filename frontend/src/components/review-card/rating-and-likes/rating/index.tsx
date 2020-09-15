import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./rating.styled";
import * as Springs from "./rating.springs";

export const Rating = () => {
	const { reviewCard } = Context.ReviewCard.useReviewCardContext();

	const animateForm = Springs.formDesktop();
	const animateInput = Springs.input();

	return (
		<Styled.Rating>
			{/* User Rating */}
			<Styled.UserRatingContainer>
				<Styled.UserRating>
					<Styled.UserRatingValue>8.2</Styled.UserRatingValue>
					<Styled.UserRatingFraction>/</Styled.UserRatingFraction>
					<Styled.UserRatingFraction>10</Styled.UserRatingFraction>
				</Styled.UserRating>
				<Styled.UserRatingCount>83 Users</Styled.UserRatingCount>
			</Styled.UserRatingContainer>

			{/* Rating Form */}
			<Styled.RatingFormDesktop
				onSubmit={reviewCard.handlers.handleSubmit}
				style={animateForm}
			>
				<Styled.RatingFormInputGroup>
					<Styled.RatingFormInput
						onChange={reviewCard.handlers.handleRatingChange}
						style={animateInput}
					/>
					<Styled.RatingFormInputText margin={"true"}>/</Styled.RatingFormInputText>
					<Styled.RatingFormInputText margin={"false"}>10</Styled.RatingFormInputText>
				</Styled.RatingFormInputGroup>
				<Styled.RatingFormSubmitButton>Rate</Styled.RatingFormSubmitButton>
			</Styled.RatingFormDesktop>

			{/* Mobile Toggle Form Button */}
			<Styled.RatingFormMobileButtonContainer>
				<Styled.RatingFormMobileButton
					onClick={reviewCard.setters.toggleMobileFormOpen}
					open={reviewCard.state.mobileFormOpen.toString()}
				>
					Rate
				</Styled.RatingFormMobileButton>
			</Styled.RatingFormMobileButtonContainer>

			{/* Rating Form Mobile */}
			<RatingFormMobile />
		</Styled.Rating>
	);
};

// ========================== //
// ↓↓↓ Rating Form Mobile ↓↓↓ //
// ========================== //

const RatingFormMobile = () => {
	const { reviewCard } = Context.ReviewCard.useReviewCardContext();

	const animateFormMobile = Springs.formMobile(reviewCard.state.mobileFormOpen);
	const animateInput = Springs.input();

	return (
		<Styled.RatingFormMobile
			onSubmit={reviewCard.handlers.handleSubmit}
			style={animateFormMobile}
		>
			<Styled.RatingFormMobileInputSubmit>
				<Styled.RatingFormInputGroup>
					<Styled.RatingFormInput
						onChange={reviewCard.handlers.handleRatingChange}
						style={animateInput}
					/>
					<Styled.RatingFormInputText margin={"true"}>/</Styled.RatingFormInputText>
					<Styled.RatingFormInputText margin={"false"}>10</Styled.RatingFormInputText>
				</Styled.RatingFormInputGroup>

				<Styled.RatingFormSubmitButton>Submit</Styled.RatingFormSubmitButton>
			</Styled.RatingFormMobileInputSubmit>

			<Styled.RatingFormMobileClose onClick={reviewCard.setters.toggleMobileFormOpen} />
		</Styled.RatingFormMobile>
	);
};
