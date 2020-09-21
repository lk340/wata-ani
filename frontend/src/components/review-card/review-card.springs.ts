import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function reviewCard() {
	return Spring.useSpring({
		to: {
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.components.reviewCard.background.light
					: Constants.theme.components.reviewCard.background.dark,
			border:
				localStorage.mode === "light"
					? `${Constants.theme.components.reviewCard.border.light} solid 2px`
					: `${Constants.theme.components.reviewCard.border.dark} solid 2px`,
		},
		config: { duration: 100 },
	});
}

export function cardDate() {
	return Spring.useSpring({
		to: {
			color:
				localStorage.mode === "light"
					? Constants.theme.components.reviewCard.date.light
					: Constants.theme.components.reviewCard.date.light,
		},
		config: { duration: 100 },
	});
}

export function tag() {
	return Spring.useSpring({
		to: {
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.components.reviewCard.tag.light
					: Constants.theme.components.reviewCard.tag.dark,
		},
		config: { duration: 100 },
	});
}
