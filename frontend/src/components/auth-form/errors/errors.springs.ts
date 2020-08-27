import * as Spring from "react-spring";

import * as Colors from "@/utils/style/colors";

export function text() {
	return Spring.useSpring({
		from: {
			color:
				localStorage.mode === "light"
					? Colors.ALERTS.error.light
					: Colors.ALERTS.error.dark,
		},
		to: {
			color:
				localStorage.mode === "light"
					? Colors.ALERTS.error.light
					: Colors.ALERTS.error.dark,
		},
		config: { duration: 100 },
	});
}
