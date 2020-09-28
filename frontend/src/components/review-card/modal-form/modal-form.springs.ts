import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function form() {
	return Spring.useSpring({
		to: {
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.components.reviewCard.modalForm.background.light
					: Constants.theme.components.reviewCard.modalForm.background.dark,
			borderLeft:
				localStorage.mode === "light"
					? `${Constants.theme.components.reviewCard.modalForm.borderLeft.light} solid 1px`
					: `${Constants.theme.components.reviewCard.modalForm.borderLeft.dark} solid 1px`,
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
