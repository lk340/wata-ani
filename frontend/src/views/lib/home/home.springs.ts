import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function home() {
	return Spring.useSpring({
		to: {
			color:
				localStorage.mode === "light"
					? Constants.theme.text.light
					: Constants.theme.text.dark,
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.pages.home.background.light
					: Constants.theme.pages.home.background.dark,
 		},
		config: { duration: 100 },
	});
}
