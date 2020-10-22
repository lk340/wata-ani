import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Colors from "@/utils/style/colors";

export function togglePasswordHideIcon(revealPassword: boolean) {
	return Spring.useSpring({
		from: { display: "block" },
		to: { display: revealPassword ? "none" : "block" },
	});
}

export function togglePasswordShowIcon(revealPassword: boolean) {
	return Spring.useSpring({
		from: { display: "none" },
		to: { display: revealPassword ? "block" : "none" },
	});
}

export function container() {
	return Spring.useSpring({
		to: {
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.components.navbarOptions.input.background.light
					: Constants.theme.components.navbarOptions.input.background.dark,
			border:
				localStorage.mode === "light"
					? `${Constants.theme.components.navbarOptions.input.border.light} solid 2px`
					: `${Constants.theme.components.navbarOptions.input.border.dark} solid 2px`,
		},
		config: { duration: 100 },
	});
}
