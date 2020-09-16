import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function copy() {
	return Spring.useSpring({
		from: { transform: "translateY(-10px)", opacity: "0" },
		to: { transform: "translateY(0px)", opacity: "1" },
	});
}

export function formDummy() {
	return Spring.useSpring({
		from: { transform: "translateY(90px)", opacity: "0" },
		to: { transform: "translateY(100px)", opacity: "1" },
		delay: 150,
	});
}

export function profileDummy() {
	return Spring.useSpring({
		from: { transform: "translateY(190px)", opacity: "0" },
		to: { transform: "translateY(200px)", opacity: "1" },
		delay: 300,
	});
}

export function copyBody() {
	return Spring.useSpring({
		to: {
			color:
				localStorage.mode === "light"
					? Constants.theme.pages.home.atf.body.light
					: Constants.theme.pages.home.atf.body.dark,
		},
	});
}
