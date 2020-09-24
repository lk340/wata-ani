import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function form(isOpen: boolean) {
	return Spring.useSpring({
		from: { transform: "translateX(50px)", opacity: "0" },
		to: {
			transform: isOpen ? "translateX(0px)" : "translateX(50px)",
			opacity: isOpen ? "1" : "0",
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.components.reviewCard.modalForm.background.light
					: Constants.theme.components.reviewCard.modalForm.background.dark,
		},
		config: { duration: 100 },
	});
}
