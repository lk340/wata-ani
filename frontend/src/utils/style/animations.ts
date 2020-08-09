import * as Spring from "react-spring";

import * as Colors from "@/utils/style/colors";

export function intro(delay: number, config: string) {
	return Spring.useSpring({
		from: { opacity: 0, transform: "translateY(-20px)" },
		to: { opacity: 1, transform: "translateY(0px)" },
		delay,
		config:
			config === "gentle"
				? Spring.config.gentle
				: config === "molasses"
				? Spring.config.molasses
				: config === "slow"
				? Spring.config.slow
				: config === "stiff"
				? Spring.config.stiff
				: config === "wobbly"
				? Spring.config.wobbly
				: Spring.config.default,
	});
}

export function buttonClick(clicked: boolean) {
	return Spring.useSpring({
		from: { transform: "scale(1)" },
		to: { transform: clicked ? "scale(0.95)" : "scale(1)" },
		config: { duration: 10 },
	});
}

export function entrance(y: number, config: string = "") {
	return Spring.useSpring({
		from: { opacity: "0", transform: `translateY(${y}px)` },
		to: { opacity: "1", transform: "translateY(0px)" },
		config:
			config === "gentle"
				? Spring.config.gentle
				: config === "molasses"
				? Spring.config.molasses
				: config === "slow"
				? Spring.config.slow
				: config === "stiff"
				? Spring.config.stiff
				: config === "wobbly"
				? Spring.config.wobbly
				: Spring.config.default,
	});
}

export function border(color: string) {
	return Spring.useSpring({
		from: { border: `${color} solid 2px` },
		to: { border: `${color} solid 2px` },
	});
}

export function opacity(visible: boolean) {
	return Spring.useSpring({
		from: { opacity: "1" },
		to: { opacity: visible ? "1" : "0" },
	});
}

export function text(mode: string) {
	return Spring.useSpring({
		from: { color: Colors.TEXT.black },
		to: { color: mode === "light" ? Colors.TEXT.black : Colors.TEXT.white },
	});
}
