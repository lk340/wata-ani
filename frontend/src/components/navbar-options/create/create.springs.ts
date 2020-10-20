import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function transition(show: boolean, isMobile: boolean) {
	return Spring.useTransition(show, null, {
		from: {
			position: "absolute",
			opacity: "0",
			transform: isMobile ? "translateY(10px)" : "translateY(-25px)",
		},
		enter: {
			opacity: "1",
			transform: isMobile ? "translateY(0px)" : "translateY(-20px)",
		},
		leave: {
			opacity: "0",
			transform: isMobile ? "translateY(10px)" : "translateY(-25px)",
		},
		config: { duration: 100 },
	});
}

export function create() {
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

export function header() {
	return Spring.useSpring({
		to: {
			color:
				localStorage.mode === "light"
					? Constants.theme.components.navbarOptions.header.text.light
					: Constants.theme.components.navbarOptions.header.text.dark,
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.components.navbarOptions.header.background.light
					: Constants.theme.components.navbarOptions.header.background.dark,
			borderBottom:
				localStorage.mode === "light"
					? `${Constants.theme.components.navbarOptions.border.light} solid 1px`
					: `${Constants.theme.components.navbarOptions.border.dark} solid 1px`,
		},
		config: { duration: 100 },
	});
}

export function characterCount() {
	return Spring.useSpring({
		to: {
			color:
				localStorage.mode === "light"
					? Constants.theme.components.navbarOptions.create.form.characterCount.light
					: Constants.theme.components.navbarOptions.create.form.characterCount.dark,
		},
		config: { duration: 100 },
	});
}

export function error() {
	return Spring.useSpring({
		to: {
			color:
				localStorage.mode === "light"
					? Constants.theme.components.navbarOptions.create.form.error.light
					: Constants.theme.components.navbarOptions.create.form.error.dark,
		},
		config: { duration: 100 },
	});
}

export function input() {
	return Spring.useSpring({
		to: {
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.components.navbarOptions.input.background.light
					: Constants.theme.components.navbarOptions.input.background.dark,
			border:
				localStorage.mode === "light"
					? `${Constants.theme.components.navbarOptions.input.border.light} solid 2px`
					: `${Constants.theme.components.navbarOptions.input.border.dark} solid 2px`,
		},
		config: { duration: 100 },
	});
}
