import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function copyBody() {
	return Spring.useSpring({
		to: {
			color:
				localStorage.mode === "light"
					? Constants.theme.pages.home.reviews.light
					: Constants.theme.pages.home.reviews.dark,
		},
	});
}
