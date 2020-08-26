import * as Spring from "react-spring";

import * as Context from "@/context";
import * as Constants from "@/utils/style/constants";

// ============= //
// ↓↓↓ Modal ↓↓↓ //
// ============= //

export function modal(open: boolean) {
	return Spring.useSpring({
		from: { transform: "translateX(100%)" },
		to: { transform: open ? "translateX(0%)" : "translateX(100%)" },
		config: { duration: open ? undefined : 200 },
		delay: open ? 0 : 100,
	});
}

export function modalMainContainer(open: boolean) {
	return Spring.useSpring({
		from: { transform: "translateX(100%)" },
		to: { transform: open ? "translateX(0%)" : "translateX(100%)" },
		config: { duration: open ? undefined : 100 },
		delay: open ? 100 : 0,
	});
}

export function modalMain(mode: Context.Theme.Mode) {
	return Spring.useSpring({
		from: {
			backgroundColor:
				mode === "light"
					? Constants.theme.background.light
					: Constants.theme.background.dark,
		},
		to: {
			backgroundColor:
				mode === "light"
					? Constants.theme.background.light
					: Constants.theme.background.dark,
		},
		config: { duration: 200 },
	});
}
