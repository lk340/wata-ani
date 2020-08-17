import * as Spring from "react-spring";

import * as Context from "@/context";
import * as Constants from "@/utils/style/constants";
import * as Colors from "@/utils/style/colors";

export function navbarMobile(mode: Context.Theme.Mode) {
	return Spring.useSpring({
		to:
			mode === "light"
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

export function optionIconText(mode: Context.Theme.Mode, state: boolean) {
	return Spring.useSpring({
		to: {
			color:
				state
					? Colors.PRIMARY_100
					: mode === "light"
					? Constants.theme.components.navbarMobile.option.light
					: Constants.theme.components.navbarMobile.option.dark,
		},
		config: { duration: 100 },
	});
}
