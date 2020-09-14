import * as React from "react";

import * as FormTypes from "@/utils/types/_form";

import * as Styled from "./rating-and-likes.styled";
import * as Springs from "./rating-and-likes.springs";

export const RatingAndLikes = () => {
	const [rating, setRating] = React.useState("");
	const [error, setError] = React.useState("");

	function handleRatingChange(event: FormTypes.Input): void {
		const userInput = event.currentTarget.value;
		setRating(userInput);
	}

	function handleSubmit(event: FormTypes.Submit): void {
		event.preventDefault();
		console.log("Rating:", rating);
	}

	function handleErrorChange(
		type: "too small" | "too big" | "not valid" | "clear",
	): void {
		switch (type) {
			case "too small":
				setError("Too small!");
				break;

			case "too big":
				setError("Too big!");
				break;

			case "not valid":
				setError("Use a number between 1 and 10!");
				break;

			default:
				setError("");
				break;
		}
	}

	React.useEffect(() => {
		if (Number(rating) < 1) handleErrorChange("too small");
		else if (Number(rating) > 10) handleErrorChange("too big");
		else if (!Number(rating)) handleErrorChange("not valid");
		else handleErrorChange("clear");
	}, [rating]);

	const animateRatingAndLikes = Springs.ratingAndLikes();
	const animateLikesCount = Springs.likesCount();
	const animateRatingForm = Springs.ratingForm();
	const animateRatingInput = Springs.ratingInput();
	const animateRatingSubmit = Springs.ratingSubmit();

	return (
		<Styled.RatingAndLikes style={animateRatingAndLikes}>
			{/* Rating */}
			<Styled.Rating>
				{/* User Rating */}
				<Styled.UserRatingContainer>
					<Styled.UserRating>
						<Styled.UserRatingValue>8.2</Styled.UserRatingValue>
						<Styled.UserRatingFraction>/</Styled.UserRatingFraction>
						<Styled.UserRatingFraction>10</Styled.UserRatingFraction>
					</Styled.UserRating>
					<Styled.UserRatingCount>83 Users</Styled.UserRatingCount>
				</Styled.UserRatingContainer>

				{/* Rating Form */}
				<Styled.RatingForm onSubmit={handleSubmit} style={animateRatingForm}>
					<Styled.RatingFormInputGroup>
						<Styled.RatingFormInput
							onChange={handleRatingChange}
							style={animateRatingInput}
						/>
						<Styled.RatingFormInputText margin={"true"}>/</Styled.RatingFormInputText>
						<Styled.RatingFormInputText margin={"false"}>10</Styled.RatingFormInputText>
					</Styled.RatingFormInputGroup>
					<Styled.RatingFormSubmitButton style={animateRatingSubmit}>
						Rate
					</Styled.RatingFormSubmitButton>
				</Styled.RatingForm>
			</Styled.Rating>

			{/* Likes */}
			<Styled.Likes>
				<Styled.LikesIconContainer>
					<Styled.LikesIconHollow />
					<Styled.LikesIconFilled />
				</Styled.LikesIconContainer>
				<Styled.LikesCount style={animateLikesCount}>123</Styled.LikesCount>
			</Styled.Likes>
		</Styled.RatingAndLikes>
	);
};
