import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./rating.styled";

import { UserRating } from "./user-rating";
import { RatingFormDesktop } from "./rating-form-desktop";
import { RatingFormMobile } from "./rating-form-mobile";

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

	React.useEffect(() => {
		if (currentUserRating !== 0) {
			reviewCard.setters.setReviewCard({ rating: String(currentUserRating) });
		}
	}, [currentUserRating]);

	return (
		<Styled.Rating>
			<UserRating userRating={userRating} userRatingCount={userRatingCount} />

			{/* Rating Form Desktop */}

			<ToggleFormButton />

			{/* Rating Form Mobile */}
		</Styled.Rating>
	);
};

// ============================ //
// ↓↓↓ Toggle Form (mobile) ↓↓↓ //
// ============================ //

const ToggleFormButton = () => {
	return (
		<Styled.RatingToggleMobileFormButtonContainer>
			<Styled.RatingToggleMobileFormButton
				onClick={reviewCard.setters.toggleMobileFormOpen}
				open={reviewCard.state.mobileFormOpen.toString()}
			>
				Rate
			</Styled.RatingToggleMobileFormButton>
		</Styled.RatingToggleMobileFormButtonContainer>
	);
};
