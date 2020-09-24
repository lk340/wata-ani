import * as React from "react";
import * as ReactRedux from "react-redux";

import * as Actions from "@/redux/actions";
import * as Functions from "@/utils/functions";
import * as Types from "@/utils/types";

import * as Styled from "./rating.styled";

import { UserRating } from "./user-rating";
import { RatingFormDesktop } from "./rating-form-desktop";
import { RatingFormMobile } from "./rating-form-mobile";

type Props = {
	postId: number;
	userRating: number | "N/A";
	userRatingCount: number;
	postRatings: number[];
	currentUserRating: number;
};

export const Rating = (props: Props) => {
	const { postId, userRating, userRatingCount, postRatings, currentUserRating } = props;

	const [rating, setRating] = React.useState("");
	const [error, setError] = React.useState("");
	const [mobileFormOpen, setMobileFormOpen] = React.useState(false);

	const dispatch = ReactRedux.useDispatch();
	const currentUser = Functions.getSession();
	const postRedux = Functions.getPosts()[postId];
	const ratingsErrorsRedux = Functions.getRatingsErrors();

	function handleError(): void {
		if (rating === "") setError("Enter a number between 1 and 10!");
		else if (Number(rating) < 1) setError("Too small!");
		else if (Number(rating) > 10) setError("Too big!");
		else if (!Number(rating)) setError("Enter a number between 1 and 10!");
		else setError("");
	}

	function handleRatingChange(event: Types.Input): void {
		setRating(event.currentTarget.value);
	}

	function handleSubmit(event: Types.Submit): void {
		event.preventDefault();

		if (error === "") {
			currentUser.ratings.forEach((ratingId: number) => {
				// User has already rated.
				if (postRedux.ratings.includes(ratingId)) {
					console.log("User has already rated.");
					const data = { rating: Number(rating) };
					Actions.Ratings.thunkUpdateRating(ratingId, data, dispatch, ratingsErrorsRedux);
				}
				// User has not rated, yet.
				else {
					console.log("User has not rated, yet.");
					const owner = currentUser;
					const post = postRedux;
					const data = { rating: Number(rating), owner, post };
					Actions.Ratings.thunkCreateRating(data, dispatch, ratingsErrorsRedux);
				}
			});
		}

		console.log("Rating:", rating);
		console.log("Error:", error);
		console.log("Post Id:", postId);
	}

	function toggleMobileFormOpen(): void {
		setMobileFormOpen(!mobileFormOpen);
	}

	React.useEffect((): void => {
		if (currentUserRating !== 0) setRating(String(currentUserRating));
	}, [currentUserRating]);

	React.useEffect((): void => handleError(), [rating]);

	return (
		<Styled.Rating>
			<UserRating userRating={userRating} userRatingCount={userRatingCount} />

			<RatingFormDesktop
				rating={rating}
				handleRatingChange={handleRatingChange}
				handleSubmit={handleSubmit}
			/>

			<ToggleFormButton toggleMobileFormOpen={toggleMobileFormOpen} />

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
	toggleMobileFormOpen: React.MouseEventHandler;
};

const ToggleFormButton = (props: ToggleButtonProps) => {
	const { toggleMobileFormOpen } = props;

	return (
		<Styled.RatingToggleMobileFormButtonContainer>
			<Styled.RatingToggleMobileFormButton onClick={toggleMobileFormOpen}>
				Rate
			</Styled.RatingToggleMobileFormButton>
		</Styled.RatingToggleMobileFormButtonContainer>
	);
};
