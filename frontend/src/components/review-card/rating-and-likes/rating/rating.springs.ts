import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function formDesktop() {
	return Spring.useSpring({
		to: {
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.components.reviewCard.ratingAndLike.formDesktop.light
					: Constants.theme.components.reviewCard.ratingAndLike.formDesktop.dark,
		},
		config: { duration: 100 },
	});
}

export function input() {
	return Spring.useSpring({
		to: {
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.components.reviewCard.ratingAndLike.input.light
					: Constants.theme.components.reviewCard.ratingAndLike.input.dark,
		},
		config: { duration: 100 },
	});
}

export function formMobile(isOpen: boolean) {
	return Spring.useSpring({
		from: { transform: "translateY(20px)", opacity: 0, zIndex: -1 },
		to: {
			transform: isOpen ? "translateY(10px)" : "translateY(20px)",
			opacity: 1,
			zIndex: 1,
			border:
				localStorage.mode === "light"
					? `${Constants.theme.components.reviewCard.ratingAndLike.formMobile.border.light} solid 1px`
					: `${Constants.theme.components.reviewCard.ratingAndLike.formMobile.border.dark} solid 1px`,
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.components.reviewCard.ratingAndLike.formMobile.background
							.light
					: Constants.theme.components.reviewCard.ratingAndLike.formMobile.background
							.dark,
			boxShadow:
				localStorage.mode === "light"
					? Constants.theme.shadowOne.light
					: Constants.theme.shadowOne.dark,
		},
		config: { duration: 100 },
	});
}
