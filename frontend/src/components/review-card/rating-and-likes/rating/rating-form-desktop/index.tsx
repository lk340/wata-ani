import * as React from "react";

import * as Styled from "./rating-form-desktop.styled";
import * as Springs from "./rating-form-desktop.springs";

type Props = {
	rating: string;
	handleRatingChange: React.ChangeEventHandler;
	handleSubmit: React.FormEventHandler;
};

export const RatingFormDesktop = (props: Props) => {
	const { rating, handleRatingChange, handleSubmit } = props;

	const animateForm = Springs.form();
	const animateInput = Springs.input();

	return (
		<Styled.RatingForm onSubmit={handleSubmit} style={animateForm}>
			<Styled.RatingFormInputGroup>
				<Styled.RatingFormInput
					onChange={handleRatingChange}
					value={rating}
					style={animateInput}
				/>
				<Styled.RatingFormInputText margin={"true"}>/</Styled.RatingFormInputText>
				<Styled.RatingFormInputText margin={"false"}>10</Styled.RatingFormInputText>
			</Styled.RatingFormInputGroup>

			<Styled.RatingFormSubmitButton>Rate</Styled.RatingFormSubmitButton>
		</Styled.RatingForm>
	);
};
