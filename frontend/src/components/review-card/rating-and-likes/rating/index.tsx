import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./rating.styled";
import * as Springs from "./rating.springs";

export const Rating = () => {
	const { reviewCard } = Context.ReviewCard.useReviewCardContext();

	const animateRatingForm = Springs.ratingForm();
	const animateRatingInput = Springs.ratingInput();

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
			<Styled.RatingForm
				onSubmit={reviewCard.handlers.handleSubmit}
				style={animateRatingForm}
			>
				<Styled.RatingFormInputGroup>
					<Styled.RatingFormInput
						onChange={reviewCard.handlers.handleRatingChange}
						style={animateRatingInput}
					/>
					<Styled.RatingFormInputText margin={"true"}>/</Styled.RatingFormInputText>
					<Styled.RatingFormInputText margin={"false"}>10</Styled.RatingFormInputText>
				</Styled.RatingFormInputGroup>
				<Styled.RatingFormSubmitButton>Rate</Styled.RatingFormSubmitButton>
			</Styled.RatingForm>
		</Styled.Rating>
	);
};
