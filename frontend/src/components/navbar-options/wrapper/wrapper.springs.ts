import * as Spring from "react-spring";

export function transition(show: boolean, isMobile: boolean) {
	return Spring.useTransition(show, null, {
		from: {
			opacity: "0",
			transform: isMobile ? "translateY(10px)" : "translateY(-10px)",
		},
		enter: {
			opacity: "1",
			transform: "translateY(0px)",
		},
		leave: {
			opacity: "0",
			transform: isMobile ? "translateY(10px)" : "translateY(-10px)",
		},
	});
}
