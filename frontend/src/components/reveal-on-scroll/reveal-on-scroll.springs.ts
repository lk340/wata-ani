import * as Spring from "react-spring";

export function visibility(isVisible: boolean, yOffset: number = 10, delay: number = 0) {
	return Spring.useSpring({
		from: {
			opacity: "0",
			transform: `translateY(${yOffset}px)`,
		},
		to: {
			opacity: isVisible ? "1" : "0",
			transform: isVisible ? "translateY(0px)" : `translateY(${yOffset}px)`,
		},
		delay,
	});
}
