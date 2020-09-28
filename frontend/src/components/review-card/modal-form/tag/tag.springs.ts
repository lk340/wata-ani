import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function tag(selected: boolean) {
	return Spring.useSpring({
		to: {
			border: selected
				? localStorage.mode === "light"
					? `${Constants.theme.components.reviewCard.modalForm.tag.border.light} solid 1px`
					: `${Constants.theme.components.reviewCard.modalForm.tag.border.dark} solid 1px`
				: "none",
			background: selected
				? localStorage.mode === "light"
					? Constants.theme.components.reviewCard.modalForm.tag.backgroundSelected.light
					: Constants.theme.components.reviewCard.modalForm.tag.backgroundSelected.dark
				: localStorage.mode === "light"
				? Constants.theme.components.reviewCard.modalForm.tag.backgroundNotSelected.light
				: Constants.theme.components.reviewCard.modalForm.tag.backgroundNotSelected.dark,
			color: selected
				? localStorage.mode === "light"
					? Constants.theme.text.light
					: Constants.theme.text.dark
				: Constants.theme.components.reviewCard.modalForm.tag.textNotSelected,
		},
		config: { duration: 100 },
	});
}
