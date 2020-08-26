import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function navbar() {
	return Spring.useSpring({
		to:
			localStorage.mode === "light"
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
