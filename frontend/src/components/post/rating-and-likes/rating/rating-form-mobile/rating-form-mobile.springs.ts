import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function form(isOpen: boolean) {
	return Spring.useSpring({
		to: {
			transform: isOpen ? "translateY(10px)" : "translateY(20px)",
			opacity: isOpen ? "1" : "0",
			pointerEvents: isOpen ? "auto" : "none",
			userSelect: isOpen ? "auto" : "none",
			border:
				localStorage.mode === "light"
					? `${Constants.theme.components.post.ratingAndLike.formMobile.border.light} solid 1px`
					: `${Constants.theme.components.post.ratingAndLike.formMobile.border.dark} solid 1px`,
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.components.post.ratingAndLike.formMobile.background
							.light
					: Constants.theme.components.post.ratingAndLike.formMobile.background
							.dark,
			boxShadow:
				localStorage.mode === "light"
					? Constants.theme.shadowOne.light
					: Constants.theme.shadowOne.dark,
		},
		config: { duration: isOpen ? 180 : 100 },
	});
}

export function input() {
	return Spring.useSpring({
		to: {
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.components.post.ratingAndLike.input.light
					: Constants.theme.components.post.ratingAndLike.input.dark,
 		},
		config: { duration: 100 },
	});
}
