import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function fill() {
	return Spring.useSpring({
		to: {
			fill:
				localStorage.mode === "light"
					? Constants.theme.pages.profile.information.data.light
					: Constants.theme.pages.profile.information.data.dark,
		},
		config: { duration: 100 },
	});
}
