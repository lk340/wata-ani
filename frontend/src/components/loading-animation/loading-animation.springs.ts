import * as Spring from "react-spring";

export function loading() {
	return Spring.useTransition(null, null, {
		from: { opacity: "0" },
		enter: { opacity: "1" },
		leave: { opacity: "0" },
		config: { duration: 0 },
	});
}

export function circle() {
	return Spring.useSpring({
		from: { Animation },
		to: { Animation },
	});
}
