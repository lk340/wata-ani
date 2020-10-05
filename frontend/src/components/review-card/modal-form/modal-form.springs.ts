import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function form() {
	return Spring.useSpring({
		to: {
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.components.reviewCard.modalForm.background.light
					: Constants.theme.components.reviewCard.modalForm.background.dark,
 		},
		config: { duration: 100 },
	});
}

export function header() {
	return Spring.useSpring({
		to: {
			color:
				localStorage.mode == "light"
					? Constants.theme.components.reviewCard.modalForm.header.light
					: Constants.theme.components.reviewCard.modalForm.header.dark,
 		},
		config: { duration: 100 },
	});
}

export function characterCount() {
	return Spring.useSpring({
		to: {
			color:
				localStorage.mode === "light"
					? Constants.theme.components.reviewCard.modalForm.characterCount.light
					: Constants.theme.components.reviewCard.modalForm.characterCount.dark,
 		},
		config: { duration: 100 },
	});
}

export function error() {
	return Spring.useSpring({
		to: {
			color:
				localStorage.mode === "light"
					? Constants.theme.components.reviewCard.modalForm.error.light
					: Constants.theme.components.reviewCard.modalForm.error.dark,
 		},
		config: { duration: 100 },
	});
}

export function input() {
	return Spring.useSpring({
		to: {
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.components.reviewCard.modalForm.inputBackground.light
					: Constants.theme.components.reviewCard.modalForm.inputBackground.dark,
			border:
				localStorage.mode === "light"
					? `${Constants.theme.components.reviewCard.modalForm.inputBorder.light} solid 2px`
					: `${Constants.theme.components.reviewCard.modalForm.inputBorder.dark} solid 2px`,
 		},
		config: { duration: 100 },
	});
}
