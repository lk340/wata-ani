import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function Footer() {
	return Spring.useSpring({
		to: {
			color:
				localStorage.mode === "light"
					? Constants.theme.text.light
					: Constants.theme.text.dark,
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.components.footer.background.light
					: Constants.theme.components.footer.background.dark,
		},
		config: { duration: 100 },
	});
}
