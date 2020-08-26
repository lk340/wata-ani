import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Colors from "@/utils/style/colors";

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
