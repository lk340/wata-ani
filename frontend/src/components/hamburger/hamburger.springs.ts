import * as Spring from "react-spring";

export function lineTop(open: boolean) {
	return Spring.useSpring({
		from: { top: "0%", transform: "translateY(0%) rotate(0deg)" },
		to: open
			? { top: "50%", transform: "translateY(-50%) rotate(45deg)" }
			: { top: "0%", transform: "translateY(0%) rotate(0deg)" },
		config: { duration: 200 },
	});
}

export function lineMiddle(open: boolean) {
	return Spring.useSpring({
		from: { opacity: "1" },
		to: open ? { opacity: "0" } : { opacity: "1" },
		config: { duration: 200 },
	});
}

export function lineBottom(open: boolean) {
	return Spring.useSpring({
		from: { bottom: "0%", transform: "translateY(0%) rotate(0deg)" },
		to: open
			? { bottom: "50%", transform: "translateY(50%) rotate(-45deg)" }
			: { bottom: "0%", transform: "translateY(0%) rotate(0deg)" },
		config: { duration: 200 },
	});
}
