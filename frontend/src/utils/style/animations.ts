import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

/**
 * background
 * text
 * opacity
 */

export function background(light: string, dark: string, duration: number = 100) {
	return Spring.useSpring({
		to: { backgroundColor: localStorage.mode === "light" ? light : dark },
		config: { duration },
	});
}

export function text(duration: number = 100) {
	return Spring.useSpring({
		to: {
			color:
				localStorage.mode === "light"
					? Constants.theme.text.light
					: Constants.theme.text.dark,
		},
		config: { duration },
	});
}

export function opacity(show: boolean, duration: number = 100) {
	return Spring.useSpring({
		to: { opacity: show ? "1" : "0" },
		config: { duration },
	});
}
