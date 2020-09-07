import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function block() {
	return Spring.useSpring({
		to: {
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.pages.home.description.block.background.light
					: Constants.theme.pages.home.description.block.background.dark,
		},
		config: { duration: 100 },
	});
}
