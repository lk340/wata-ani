import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function likesCount() {
	return Spring.useSpring({
		to: {
			color:
				localStorage.mode === "light"
					? Constants.theme.components.post.ratingAndLike.likes.light
					: Constants.theme.components.post.ratingAndLike.likes.dark,
 		},
		config: { duration: 100 },
	});
}
