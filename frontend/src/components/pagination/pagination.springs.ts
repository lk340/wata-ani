import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function pages() {
	return Spring.useSpring({
		to: {
			color:
				localStorage.mode === "light"
					? Constants.theme.text.light
					: Constants.theme.text.dark,
		},
	});
}
