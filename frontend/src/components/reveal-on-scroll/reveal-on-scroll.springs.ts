import * as Spring from "react-spring";

export function visibility(isVisible: boolean, yOffset: number = 10, delay: number = 0) {
	return Spring.useSpring({
		from: {
			transform: `translateY(${yOffset}px)`,
			opacity: "0",
		},
		to: {
			transform: isVisible ? "translateY(0px)" : `translateY(${yOffset}px)`,
			opacity: isVisible ? "1" : "0",
		},
		delay,
	});
}
