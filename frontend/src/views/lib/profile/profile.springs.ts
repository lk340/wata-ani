import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function background() {
	return Spring.useSpring({
		to: {
			color:
				localStorage.mode === "light"
					? Constants.theme.text.light
					: Constants.theme.text.dark,
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.pages.profile.background.light
					: Constants.theme.pages.profile.background.dark,
		},
		config: { duration: 100 },
	});
}

export function information() {
	return Spring.useSpring({
		to: {
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.pages.profile.information.background.light
					: Constants.theme.pages.profile.information.background.dark,
			borderBottom:
				localStorage.mode === "light"
					? `${Constants.theme.pages.profile.information.borderBottom.light} solid 1px`
					: `${Constants.theme.pages.profile.information.borderBottom.dark} solid 1px;`,
		},
		config: { duration: 100 },
	});
}

export function profilePicture() {
	return Spring.useSpring({
		to: {
			border:
				localStorage.mode === "light"
					? `${Constants.theme.pages.profile.information.profilePicture.light} solid 1px`
					: `${Constants.theme.pages.profile.information.profilePicture.dark} solid 1px`,
		},
		config: { duration: 100 },
	});
}

export function data() {
	return Spring.useSpring({
		to: {
			color:
				localStorage.mode === "light"
					? Constants.theme.pages.profile.information.data.light
					: Constants.theme.pages.profile.information.data.dark,
		},
		config: { duration: 100 },
	});
}
