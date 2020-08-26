import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Colors from "@/utils/style/colors";

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

export function profileIcon(isUser: boolean) {
	return Spring.useSpring({
		to: {
			border: isUser
				? `${Colors.PRIMARY_100} solid 1px`
				: localStorage.mode === "light"
				? `${Constants.theme.components.navbar.profileIcon.light} solid 1px`
				: `${Constants.theme.components.navbar.profileIcon.light} solid 1px`,
		},
	});
}
