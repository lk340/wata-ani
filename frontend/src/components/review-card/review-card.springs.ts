import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Colors from "@/utils/style/colors";

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
					? Constants.theme.components.reviewCard.cardDate.light
					: Constants.theme.components.reviewCard.cardDate.light,
		},
		config: { duration: 100 },
	});
}

export function icon(selected: boolean) {
	return Spring.useSpring({
		from: { transform: "scale(0)" },
		to: { transform: selected ? "scale(1)" : "scale(0)" },
	});
}

export function ratingModal() {
	return Spring.useSpring({
		to: {
			backgroundColor:
				localStorage.mode === "light"
					? Colors.MODAL.overlay.light
					: Colors.MODAL.overlay.dark,
		},
	});
}
