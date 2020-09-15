import * as React from "react";
import axios from "axios";

import * as Helpers from "@/context/helpers";
import * as FormTypes from "@/utils/types";

type State = {
	rating: string;
	error: string;
	mobileFormOpen: boolean;
};

const initialState = Object.freeze<State>({
	rating: "",
	error: "",
	mobileFormOpen: false,
});

export const useReviewCardContext = Helpers.createUseContext(() => {
	const [reviewCard, _setReviewCard] = React.useState<State>({ ...initialState });

	// =============== //
	// ↓↓↓ Getters ↓↓↓ //
	// =============== //

	// =============== //
	// ↓↓↓ Setters ↓↓↓ //
	// =============== //

	const setReviewCard = (state: Partial<State>): void =>
		_setReviewCard({ ...reviewCard, ...state });

	function toggleMobileFormOpen(): void {
		setReviewCard({ mobileFormOpen: !reviewCard.mobileFormOpen });
	}

	// ================ //
	// ↓↓↓ Handlers ↓↓↓ //
	// ================ //

	type ErrorType = "too small" | "too big" | "not valid" | "clear";

	function handleErrorChange(errorType: ErrorType): void {
		switch (errorType) {
			case "too small":
				setReviewCard({ error: "Too small!" });
				break;

			case "too big":
				setReviewCard({ error: "Too big!" });
				break;

			case "not valid":
				setReviewCard({ error: "Enter a number between 1 and 10!" });
				break;

			default:
				setReviewCard({ error: "" });
				break;
		}
	}

	function handleRatingChange(event: FormTypes.Input): void {
		const userInput = event.currentTarget.value;
		setReviewCard({ rating: userInput });
	}

	function handleSubmit(event: FormTypes.Submit): void {
		event.preventDefault();

		if (reviewCard.rating === "") handleErrorChange("not valid");
		else if (Number(reviewCard.rating) < 1) handleErrorChange("too small");
		else if (Number(reviewCard.rating) > 10) handleErrorChange("too big");
		else if (!Number(reviewCard.rating)) handleErrorChange("not valid");
		else handleErrorChange("clear");

		console.log("Rating:", reviewCard.rating);
		console.log("Error:", reviewCard.error);
	}

	// =============== //
	// ↓↓↓ API ↓↓↓ //
	// =============== //

	// =============== //
	// ↓↓↓ Exports ↓↓↓ //
	// =============== //

	const state = reviewCard;

	const getters = {};

	const setters = {
		setReviewCard,
		toggleMobileFormOpen,
	};

	const handlers = {
		handleRatingChange,
		handleSubmit,
	};

	const api = {};

	return {
		reviewCard: { state, getters, setters, handlers, api },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <useReviewCardContext.Provider>{children}</useReviewCardContext.Provider>;
};
