import * as Spring from "react-spring";

import * as Context from "@/context";
import * as Constants from "@/utils/style/constants";
import * as Colors from "@/utils/style/colors";

export function fill(mode: Context.Theme.Mode, state: boolean) {
	return Spring.useSpring({
		to: {
			fill: state
				? Colors.PRIMARY_100
				: mode === "light"
				? Constants.theme.components.navbarMobile.option.light
				: Constants.theme.components.navbarMobile.option.dark,
 		},
		config: { duration: 100 },
	});
}
