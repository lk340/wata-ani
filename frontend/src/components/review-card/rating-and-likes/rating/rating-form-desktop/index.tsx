import * as React from "react";

import * as Styled from "./rating-form-desktop.styled";
import * as Springs from "./rating-form-desktop.springs";

export const RatingFormDesktop = () => {
	const animateForm = Springs.form();
	const animateInput = Springs.input();

	return (
		<Styled.RatingForm onSubmit={reviewCard.handlers.handleSubmit} style={animateForm}>
			<Styled.RatingFormInputGroup>
				<Styled.RatingFormInput
					onChange={reviewCard.handlers.handleRatingChange}
					value={reviewCard.state.rating}
					style={animateInput}
				/>
				<Styled.RatingFormInputText margin={"true"}>/</Styled.RatingFormInputText>
				<Styled.RatingFormInputText margin={"false"}>10</Styled.RatingFormInputText>
			</Styled.RatingFormInputGroup>

			<Styled.RatingFormSubmitButton>Rate</Styled.RatingFormSubmitButton>
		</Styled.RatingForm>
	);
};
