import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function ratingAndLikes() {
	return Spring.useSpring({
		to: {
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.components.post.ratingAndLike.background.light
					: Constants.theme.components.post.ratingAndLike.background.dark,
			border:
				localStorage.mode === "light"
					? `${Constants.theme.components.post.ratingAndLike.border.light} solid 1px`
					: `${Constants.theme.components.post.ratingAndLike.border.dark} solid 1px`,
		},
		config: { duration: 100 },
	});
}
