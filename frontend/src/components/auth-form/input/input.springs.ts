import * as Spring from "react-spring";

export function togglePasswordHideIcon(revealPassword: boolean) {
	return Spring.useSpring({
		from: { display: "block" },
		to: { display: revealPassword ? "none" : "block" },
	});
}

export function togglePasswordShowIcon(revealPassword: boolean) {
	return Spring.useSpring({
		from: { display: "none" },
		to: { display: revealPassword ? "block" : "none" },
	});
}
