import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";



export function ratingForm() {
	return Spring.useSpring({
		to: {
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.components.reviewCard.ratingAndLike.form.light
					: Constants.theme.components.reviewCard.ratingAndLike.form.dark,
		},
		config: { duration: 100 },
	});
}

export function ratingInput() {
	return Spring.useSpring({
		to: {
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.components.reviewCard.ratingAndLike.input.light
					: Constants.theme.components.reviewCard.ratingAndLike.input.dark,
		},
		config: { duration: 100 },
	});
}
