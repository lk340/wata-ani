import * as Spring from "react-spring";

import * as Context from "@/context";
import * as Colors from "@/utils/style/colors";

/**
 * background
 * text
 */

export function background(mode: Context.Theme.Mode, light: string, dark: string) {
	return Spring.useSpring({
		to: { backgroundColor: mode === "light" ? light : dark },
		config: { duration: 100 },
	});
}

export function text(mode: Context.Theme.Mode, light: string, dark: string) {
	return Spring.useSpring({
		to: { color: mode === "light" ? Colors.TEXT.black : Colors.TEXT.white },
	});
}
