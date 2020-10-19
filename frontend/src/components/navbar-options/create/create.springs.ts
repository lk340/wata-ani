import * as Spring from "react-spring";

export function transition(show: boolean, isMobile: boolean) {
	return Spring.useTransition(show, null, {
		from: {
			position: "absolute",
			opacity: "0",
			transform: isMobile ? "translateY(10px)" : "translateY(-25px)",
			border: "red solid 1px",
		},
		enter: {
			opacity: "1",
			transform: isMobile ? "translateY(0px)" : "translateY(-20px)",
			border: "red solid 1px",
		},
		leave: {
			opacity: "0",
			transform: isMobile ? "translateY(10px)" : "translateY(-25px)",
			border: "red solid 1px",
		},
		config: { duration: 100 },
	});
}
