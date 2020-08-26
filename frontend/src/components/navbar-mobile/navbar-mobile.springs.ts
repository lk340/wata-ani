import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Colors from "@/utils/style/colors";

export function navbarMobile() {
	return Spring.useSpring({
		to:
			localStorage.mode === "light"
				? {
						backgroundColor: Constants.theme.background.light,
						borderTop: `${Constants.theme.components.navbarMobile.borderTop.light} solid 1px`,
				  }
				: {
						backgroundColor: Constants.theme.background.dark,
						borderTop: `${Constants.theme.components.navbarMobile.borderTop.dark} solid 1px`,
				  },
	});
}

export function optionIconText(state: boolean) {
	return Spring.useSpring({
		to: {
			color: state
				? Colors.PRIMARY_100
				: localStorage.mode === "light"
				? Constants.theme.components.navbarMobile.option.light
				: Constants.theme.components.navbarMobile.option.dark,
		},
		config: { duration: 100 },
	});
}
