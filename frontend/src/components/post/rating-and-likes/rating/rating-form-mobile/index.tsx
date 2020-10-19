import * as React from "react";

import * as Styled from "./rating-form-mobile.styled";
import * as Springs from "./rating-form-mobile.springs";

type Props = {
	mobileFormOpen: boolean;
	toggleMobileFormOpen: React.MouseEventHandler;
	handleRatingChange: React.ChangeEventHandler;
	handleSubmit: React.FormEventHandler;
};

export const RatingFormMobile = (props: Props) => {
	const {
		mobileFormOpen,
		toggleMobileFormOpen,
		handleRatingChange,
		handleSubmit,
	} = props;

	const animateFormMobile = Springs.form(mobileFormOpen);
	const animateInput = Springs.input();

	return (
		<Styled.RatingForm onSubmit={handleSubmit} style={animateFormMobile}>
			{/* Input Group & Submit Button */}
			<Styled.RatingFormInput_Submit>
				{/* Input Group */}
				<Styled.RatingFormInputGroup>
					<Styled.RatingFormInput onChange={handleRatingChange} style={animateInput} />
					<Styled.RatingFormInputText margin={"true"}>/</Styled.RatingFormInputText>
					<Styled.RatingFormInputText margin={"false"}>10</Styled.RatingFormInputText>
				</Styled.RatingFormInputGroup>

				{/* Submit button */}
				<Styled.RatingFormSubmitButton>Submit</Styled.RatingFormSubmitButton>
			</Styled.RatingFormInput_Submit>

			{/* Close */}
			<Styled.RatingFormClose onClick={toggleMobileFormOpen} />
		</Styled.RatingForm>
	);
};
