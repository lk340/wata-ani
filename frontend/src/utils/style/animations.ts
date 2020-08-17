import * as Spring from "react-spring";

import * as Context from "@/context";
import * as Constants from "@/utils/style/constants";

/**
 * background
 * text
 * opacity
 */

export function background(
	mode: Context.Theme.Mode,
	light: string,
	dark: string,
	duration: number = 100,
) {
	return Spring.useSpring({
		to: { backgroundColor: mode === "light" ? light : dark },
		config: { duration },
	});
}

export function text(mode: Context.Theme.Mode, duration: number = 100) {
	return Spring.useSpring({
		to: {
			color: mode === "light" ? Constants.theme.text.light : Constants.theme.text.dark,
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
