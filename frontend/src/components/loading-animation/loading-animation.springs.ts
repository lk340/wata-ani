import * as Spring from "react-spring";

export function loading() {
	return Spring.useSpring({
		from: { opacity: "0" },
		to: { opacity: "1" },
	});
}
