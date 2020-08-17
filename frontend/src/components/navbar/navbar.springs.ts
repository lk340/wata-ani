import * as Spring from "react-spring";

import * as Context from "@/context";
import * as Constants from "@/utils/style/constants";

export function navbar(mode: Context.Theme.Mode) {
	return Spring.useSpring({
		to:
			mode === "light"
				? {
						color: Constants.theme.text.light,
						backgroundColor: Constants.theme.background.light,
						borderBottom: `${Constants.theme.components.navbar.borderBottom.light} solid 1px`,
				  }
				: {
						color: Constants.theme.text.dark,
						backgroundColor: Constants.theme.background.dark,
						borderBottom: `${Constants.theme.components.navbar.borderBottom.dark} solid 1px`,
				  },
		config: { duration: 100 },
	});
}
