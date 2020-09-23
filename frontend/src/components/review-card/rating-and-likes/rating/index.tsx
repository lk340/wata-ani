import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./rating.styled";
import * as Springs from "./rating.springs";

import { UserRating } from "./user-rating";

type Props = {
	userRating: number | "N/A";
	userRatingCount: number;
	currentUserRating: number;
};

export const Rating = (props: Props) => {
	const { userRating, userRatingCount, currentUserRating } = props;

	const { reviewCard } = Context.ReviewCard.useReviewCardContext();

	const [rating, setRating] = React.useState("");
	const [error, setError] = React.useState("");
	const [mobileFormOpen, setMobileFormOpen] = React.useState(false);

	const animateForm = Springs.formDesktop();
	const animateInput = Springs.input();

	React.useEffect(() => {
		if (currentUserRating !== 0) {
			reviewCard.setters.setReviewCard({ rating: String(currentUserRating) });
		}
	}, [currentUserRating]);

	return (
		<Styled.Rating>
			<UserRating userRating={userRating} userRatingCount={userRatingCount} />

			{/* Rating Form */}
			<Styled.RatingFormDesktop
				onSubmit={reviewCard.handlers.handleSubmit}
				style={animateForm}
			>
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
