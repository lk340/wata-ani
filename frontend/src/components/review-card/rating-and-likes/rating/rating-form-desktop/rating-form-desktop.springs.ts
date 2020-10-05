import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function form() {
	return Spring.useSpring({
		to: {
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.components.reviewCard.ratingAndLike.formDesktop.light
					: Constants.theme.components.reviewCard.ratingAndLike.formDesktop.dark,
 		},
		config: { duration: 100 },
	});
}

export function input() {
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
