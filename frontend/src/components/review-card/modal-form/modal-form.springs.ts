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
