import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function profileIcon() {
	return Spring.useSpring({
		to: {
			border:
				localStorage.mode === "light"
					? `${Constants.theme.components.navbar.profileIcon.light} solid 1px`
					: `${Constants.theme.components.navbar.profileIcon.light} solid 1px`,
		},
		config: { duration: 100 },
	});
}
