import * as React from "react";

import * as Helpers from "@/context/helpers";
import * as Actions from "@/redux/actions";
import * as Types from "@/utils/types";

type State = {
	seriesTitle: string;
	reviewTitle: string;
	review: string;
	personalRating: string;
	seriesTitleError: string;
	reviewTitleError: string;
	reviewError: string;
	personalRatingError: string;
};

const initialState = Object.freeze<State>({
	seriesTitle: "",
	reviewTitle: "",
	review: "",
	personalRating: "",
	seriesTitleError: "",
	reviewTitleError: "",
	reviewError: "",
	personalRatingError: "",
});

export const useNavbarOptionsCreateContext = Helpers.createUseContext(() => {
	const [navbarOptionsCreate, _setNavbarOptionsCreate] = React.useState<State>({
		...initialState,
	});

	const {
		seriesTitle,
		reviewTitle,
		review,
		personalRating,
		seriesTitleError,
		reviewTitleError,
		reviewError,
		personalRatingError,
	} = navbarOptionsCreate;

	// ====================== //
	// ↓↓↓ Error Handling ↓↓↓ //
	// ====================== //

	React.useEffect(() => handleSeriesTitleError(), [seriesTitle]);
	React.useEffect(() => handleReviewTitleError(), [reviewTitle]);
	React.useEffect(() => handleReviewError(), [review]);
	React.useEffect(() => handlePersonalRatingError(), [personalRating]);

	// =============== //
	// ↓↓↓ Setters ↓↓↓ //
	// =============== //

	function setNavbarOptionsCreate(state: Partial<State>): void {
		_setNavbarOptionsCreate({ ...navbarOptionsCreate, ...state });
	}

	function clearErrors(): void {
		setNavbarOptionsCreate({
			seriesTitleError: "",
			reviewTitleError: "",
			reviewError: "",
			personalRatingError: "",
		});
	}

	// ================ //
	// ↓↓↓ Handlers ↓↓↓ //
	// ================ //

	// --- Error Handlers --- //
	function handleSeriesTitleError(): void {
		if (seriesTitle === "") {
			setNavbarOptionsCreate({ seriesTitleError: "" });
		} else if (seriesTitle.length > 100) {
			setNavbarOptionsCreate({ seriesTitleError: "Max 100 characters!" });
		} else if (seriesTitle.length < 100) {
			setNavbarOptionsCreate({ seriesTitleError: "" });
		} else {
			setNavbarOptionsCreate({ seriesTitleError: "" });
		}
	}

	function handleReviewTitleError(): void {
		if (reviewTitle === "") {
			setNavbarOptionsCreate({ reviewTitleError: "" });
		} else if (reviewTitle.length > 50) {
			setNavbarOptionsCreate({ reviewTitleError: "Max 50 characters!" });
		} else if (reviewTitle.length < 50) {
			setNavbarOptionsCreate({ reviewTitleError: "" });
		} else {
			setNavbarOptionsCreate({ reviewTitleError: "" });
		}
	}

	function handleReviewError(): void {
		if (review === "") {
			setNavbarOptionsCreate({ reviewError: "" });
		} else if (review.length > 500) {
			setNavbarOptionsCreate({ reviewError: "Max 500 characters!" });
		} else if (review.length < 500) {
			setNavbarOptionsCreate({ reviewError: "" });
		} else {
			setNavbarOptionsCreate({ reviewError: "" });
		}
	}

	function handlePersonalRatingError(): void {
		if (personalRating === "") {
			setNavbarOptionsCreate({ personalRatingError: "You must  set a rating!" });
		} else if (personalRating === "0") {
			setNavbarOptionsCreate({ personalRatingError: "Must be between 1 and 10!" });
		} else if (Number(personalRating) < 1) {
			setNavbarOptionsCreate({ personalRatingError: "Must be between 1 and 10!" });
		} else if (Number(personalRating) > 10) {
			setNavbarOptionsCreate({ personalRatingError: "Must be between 1 and 10!" });
		} else if (!Number(personalRating)) {
			setNavbarOptionsCreate({ personalRatingError: "Must be a number!" });
		} else {
			setNavbarOptionsCreate({ personalRatingError: "" });
		}
	}

	// --- Form Handlers --- //
	function handleTitleChange(
		event: Types.Input,
		type: "series" | "post" | "personal rating",
	): void {
		const userInput = event.currentTarget.value;
		if (type === "series") setNavbarOptionsCreate({ seriesTitle: userInput });
		else if (type === "post") setNavbarOptionsCreate({ reviewTitle: userInput });
		else setNavbarOptionsCreate({ personalRating: userInput });
	}

	function handleReviewChange(event: Types.Textarea): void {
		const userInput = event.currentTarget.value;
		setNavbarOptionsCreate({ review: userInput });
	}

	function handleSubmit(
		event: Types.Submit,
		closeModal: Function,
		currentUserId: number,
		dispatch: Function,
		postsErrorsRedux: any,
		tagIds: number[]
	): void {
		event.preventDefault();

		function checkNoErrors(): boolean {
			const noSeriesTitleError = seriesTitleError === "";
			const noReviewTitleError = reviewTitleError === "";
			const noReviewError = reviewError === "";
			const noPersonalRatingError = personalRatingError === "";

			return (
				noSeriesTitleError && noReviewTitleError && noReviewError && noPersonalRatingError
			);
		}

		if (currentUserId && checkNoErrors()) {
			const data = {
				title: reviewTitle,
				series_title: seriesTitle,
				review,
				personal_rating: Number(personalRating),
				author: currentUserId,
				user_ratings: [],
				tags: tagIds
			};

			Actions.Posts.thunkCreateUserPost(data, dispatch, postsErrorsRedux);

			clearErrors();
			closeModal();
		}
	}

	// =============== //
	// ↓↓↓ Exports ↓↓↓ //
	// =============== //

	const state = navbarOptionsCreate;

	const setters = {
		setNavbarOptionsCreate,
	};

	const handlers = {
		handleTitleChange,
		handleReviewChange,
		handleSubmit,
	};

	return {
		navbarOptionsCreate: { state, setters, handlers },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<useNavbarOptionsCreateContext.Provider>
			{children}
		</useNavbarOptionsCreateContext.Provider>
	);
};
