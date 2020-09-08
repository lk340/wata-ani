import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function copyBody() {
	return Spring.useSpring({
		to: {
			color:
				localStorage.mode === "light"
					? Constants.theme.pages.home.atf.body.light
					: Constants.theme.pages.home.atf.body.dark,
		},
	});
}
