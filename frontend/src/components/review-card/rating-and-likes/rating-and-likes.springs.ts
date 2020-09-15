import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function ratingAndLikes() {
	return Spring.useSpring({
		to: {
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.components.reviewCard.ratingAndLike.background.light
					: Constants.theme.components.reviewCard.ratingAndLike.background.dark,
			border:
				localStorage.mode === "light"
					? `${Constants.theme.components.reviewCard.ratingAndLike.border.light} solid 1px`
					: `${Constants.theme.components.reviewCard.ratingAndLike.border.dark} solid 1px`,
		},
		config: { duration: 100 },
	});
}
