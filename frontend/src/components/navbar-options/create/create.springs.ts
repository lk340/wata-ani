import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function characterCount() {
	return Spring.useSpring({
		to: {
			color:
				localStorage.mode === "light"
					? Constants.theme.components.navbarOptions.create.form.characterCount.light
					: Constants.theme.components.navbarOptions.create.form.characterCount.dark,
		},
		config: { duration: 100 },
	});
}

export function error() {
	return Spring.useSpring({
		to: {
			color:
				localStorage.mode === "light"
					? Constants.theme.components.navbarOptions.create.form.error.light
					: Constants.theme.components.navbarOptions.create.form.error.dark,
		},
		config: { duration: 100 },
	});
}

export function input() {
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
