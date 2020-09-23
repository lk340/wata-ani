import * as React from "react";

import * as Styled from "./rating-form-mobile.styled";
import * as Springs from "./rating-form-mobile.springs";

export const RatingFormMobile = () => {
	const { reviewCard } = Context.ReviewCard.useReviewCardContext();

	const animateFormMobile = Springs.form(reviewCard.state.mobileFormOpen);
	const animateInput = Springs.input();

	return (
		<Styled.RatingForm
			onSubmit={reviewCard.handlers.handleSubmit}
			style={animateFormMobile}
		>
			{/* Input Group & Submit Button */}
			<Styled.RatingFormInput_Submit>
				{/* Input Group */}
				<Styled.RatingFormInputGroup>
					<Styled.RatingFormInput
						onChange={reviewCard.handlers.handleRatingChange}
						style={animateInput}
					/>
					<Styled.RatingFormInputText margin={"true"}>/</Styled.RatingFormInputText>
					<Styled.RatingFormInputText margin={"false"}>10</Styled.RatingFormInputText>
				</Styled.RatingFormInputGroup>

				{/* Submit button */}
				<Styled.RatingFormSubmitButton>Submit</Styled.RatingFormSubmitButton>
			</Styled.RatingFormInput_Submit>

			{/* Close */}
			<Styled.RatingFormClose onClick={reviewCard.setters.toggleMobileFormOpen} />
		</Styled.RatingForm>
	);
};
