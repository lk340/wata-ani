import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function CTA() {
	return Spring.useSpring({
		to: {
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.pages.home.cta.background.light
					: Constants.theme.pages.home.cta.background.dark,
		},
		config: { duration: 100 },
	});
}
