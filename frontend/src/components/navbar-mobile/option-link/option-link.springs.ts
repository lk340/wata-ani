import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Colors from "@/utils/style/colors";

export function optionIconText() {
	return Spring.useSpring({
		to: {
			color:
				localStorage.mode === "light"
					? Constants.theme.components.navbarMobile.option.light
					: Constants.theme.components.navbarMobile.option.dark,
		},
		config: { duration: 100 },
	});
}
