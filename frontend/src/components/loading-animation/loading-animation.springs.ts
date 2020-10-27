import * as Spring from "react-spring";

import * as Colors from "@/utils/style/colors";

export function loading(loading: boolean) {
	return Spring.useTransition(loading, null, {
		from: { opacity: "0" },
		enter: { opacity: "1" },
		leave: { opacity: "0" },
		config: { duration: 0 },
	});
}

export function circle() {
	return Spring.useSpring({
		to: {
			border:
				localStorage.mode === "light"
					? `${Colors.LIGHT.two} solid 6px`
					: `${Colors.DARK.two} solid 6px`,
		},
		config: { duration: 100 },
	});
}
