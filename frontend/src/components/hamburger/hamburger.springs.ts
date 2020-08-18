import * as Spring from "react-spring";

import * as Context from "@/context";
import * as Constants from "@/utils/style/constants";

/**
 * Lines
 * Modal
 */

// ============= //
// ↓↓↓ Lines ↓↓↓ //
// ============= //

export function lineTop(open: boolean) {
	return Spring.useSpring({
		from: { top: "0%", transform: "translateY(0%)", opacity: "1" },
		to: open
			? { top: "50%", transform: "translateY(-50%)", opacity: "0" }
			: { top: "0%", transform: "translateY(0%)", opacity: "1" },
		config: { duration: 150 },
		delay: open ? 0 : 200,
	});
}

export function lineMiddle(open: boolean, degrees: number) {
	return Spring.useSpring({
		from: { transform: "translateY(-50%) rotate(0deg)" },
		to: open
			? {
					transform: `translateY(-50%) rotate(${degrees}deg)`,
			  }
			: {
					transform: "translateY(-50%) rotate(0deg)",
			  },
		config: { duration: 150 },
		delay: open ? 200 : 0,
	});
}

export function lineBottom(open: boolean) {
	return Spring.useSpring({
		from: { bottom: "0%", transform: "translateY(0%)", opacity: "1" },
		to: open
			? { bottom: "50%", transform: "translateY(50%)", opacity: "0" }
			: { bottom: "0%", transform: "translateY(0%)", opacity: "1" },
		config: { duration: 150 },
		delay: open ? 0 : 200,
	});
}

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

export function modalMain(open: boolean, mode: Context.Theme.Mode) {
	return Spring.useSpring({
		from: {
			transform: "translateX(100%)",
			backgroundColor:
				mode === "light"
					? Constants.theme.background.light
					: Constants.theme.background.dark,
		},
		to: open
			? {
					transform: "translateX(0%)",
					backgroundColor:
						mode === "light"
							? Constants.theme.background.light
							: Constants.theme.background.dark,
			  }
			: {
					transform: "translateX(100%)",
					backgroundColor:
						mode === "light"
							? Constants.theme.background.light
							: Constants.theme.background.dark,
			  },
		config: { duration: open ? undefined : 200 },
		delay: open ? 100 : 0,
	});
}
