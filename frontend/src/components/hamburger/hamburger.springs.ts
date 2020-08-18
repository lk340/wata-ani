import * as Spring from "react-spring";

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
