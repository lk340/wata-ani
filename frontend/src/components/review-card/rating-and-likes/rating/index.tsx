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
	averageUserRating: number | "N/A";
	userRatingCount: number;
	currentUserRating: number;
	userHasRated: boolean;
	userHasRatedRatingId: number;
};

export const Rating = (props: Props) => {
	const { userHasRatedRatingId } = props;

	const [rating, setRating] = React.useState("");
	const [error, setError] = React.useState("");
	const [mobileFormOpen, setMobileFormOpen] = React.useState(false);

	const dispatch = ReactRedux.useDispatch();
	const currentUser = Functions.getSession();
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

	async function handleSubmit(event: Types.Submit): Promise<void> {
		event.preventDefault();

		if (error === "") {
			const owner = currentUser.id;
			const post = props.postId;
			const data = { rating: Number(rating), owner, post };

			if (props.userHasRated) {
				Actions.Ratings.thunkUpdateRating(
					userHasRatedRatingId,
					data,
					dispatch,
					ratingsErrorsRedux,
				);
			} else {
				Actions.Ratings.thunkCreateRating(data, dispatch, ratingsErrorsRedux);
			}
		}

		console.log(error);
	}

	function toggleMobileFormOpen(): void {
		setMobileFormOpen(!mobileFormOpen);
	}

	React.useEffect((): void => {
		if (props.currentUserRating !== 0) setRating(String(props.currentUserRating));
	}, [props.currentUserRating]);

	React.useEffect((): void => handleError(), [rating]);

	return (
		<Styled.Rating>
			<UserRating
				userRating={props.averageUserRating}
				userRatingCount={props.userRatingCount}
			/>

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
