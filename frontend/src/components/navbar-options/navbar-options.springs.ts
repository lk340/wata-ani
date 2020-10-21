import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function transition(show: boolean, isMobile: boolean) {
	return Spring.useTransition(show, null, {
		from: {
			opacity: "0",
			transform: isMobile ? "translateY(10px)" : "translateY(-25px)",
		},
		enter: {
			opac
      overflow-y: auto;ity: "1",
			transform: isMobile ? "translateY(0px)" : "translateY(-20px)",
		},
		leave: {
			opacity: "0",
			transform: isMobile ? "translateY(10px)" : "translateY(-25px)",
		},
		config: { duration: 100 },
	});
}

export function wrapper() {
	return Spring.useSpring({
		to: {
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.components.navbarOptions.background.light
					: Constants.theme.components.navbarOptions.background.dark,
			border:
				localStorage.mode === "light"
					? `${Constants.theme.components.navbarOptions.border.light} solid 1px`
					: `${Constants.theme.components.navbarOptions.border.dark} solid 1px`,
			boxShadow:
				localStorage.mode === "light"
					? Constants.theme.shadowOne.light
					: Constants.theme.shadowOne.dark,
		},
		config: { duration: 100 },
	});
}