import * as React from "react";

import * as Types from "@/utils/types";

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

	const [rating, setRating] = React.useState("");
	const [error, setError] = React.useState("");
	const [mobileFormOpen, setMobileFormOpen] = React.useState(false);

	type ErrorType = "too small" | "too big" | "not valid" | "clear";

	function handleErrorChange(errorType: ErrorType): void {
		if (errorType === "too small") setError("Too small!");
		else if (errorType === "too big") setError("Too big!");
		else if (errorType === "not valid") setError("Enter a number between 1 and 10!");
		else setError("");
	}

	function handleRatingChange(event: Types.Input): void {
		setRating(event.currentTarget.value);
	}

	function handleSubmit(event: Types.Submit): void {
		event.preventDefault();

		if (rating === "") handleErrorChange("not valid");
		else if (Number(rating) < 1) handleErrorChange("too small");
		else if (Number(rating) > 10) handleErrorChange("too big");
		else if (!Number(rating)) handleErrorChange("not valid");
		else handleErrorChange("clear");

		console.log("Rating:", rating);
		console.log("Error:", error);
	}

	function toggleMobileFormOpen(): void {
		setMobileFormOpen(!mobileFormOpen);
	}

	React.useEffect((): void => {
		if (currentUserRating !== 0) setRating(String(currentUserRating));
	}, [currentUserRating]);

	return (
		<Styled.Rating>
			<UserRating userRating={userRating} userRatingCount={userRatingCount} />

			<RatingFormDesktop
				rating={rating}
				handleRatingChange={handleRatingChange}
				handleSubmit={handleSubmit}
			/>

			<ToggleFormButton
				mobileFormOpen={mobileFormOpen}
				toggleMobileFormOpen={toggleMobileFormOpen}
			/>

			<RatingFormMobile
				mobileFormOpen={mobileFormOpen}
				toggleMobileFormOpen={toggleMobileFormOpen}
				handleRatingChange={handleRatingChange}
				handleSubmit={handleSubmit}
			/>
		</Styled.Rating>
	);
};

// ============================ //
// ↓↓↓ Toggle Form (mobile) ↓↓↓ //
// ============================ //

type ToggleButtonProps = {
	mobileFormOpen: boolean;
	toggleMobileFormOpen: React.MouseEventHandler;
};

const ToggleFormButton = (props: ToggleButtonProps) => {
	const { mobileFormOpen, toggleMobileFormOpen } = props;

	return (
		<Styled.RatingToggleMobileFormButtonContainer>
			<Styled.RatingToggleMobileFormButton
				onClick={toggleMobileFormOpen}
				open={mobileFormOpen.toString()}
			>
				Rate
			</Styled.RatingToggleMobileFormButton>
		</Styled.RatingToggleMobileFormButtonContainer>
	);
};
