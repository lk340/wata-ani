import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function container(open: boolean) {
	return Spring.useSpring({
		to: { display: open ? "block" : "none" },
		config: { duration: 100 },
	});
}

export function form() {
	return Spring.useSpring({
		to: {
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.components.post.modalForm.background.light
					: Constants.theme.components.post.modalForm.background.dark,
		},
		config: { duration: 100 },
	});
}

export function header() {
	return Spring.useSpring({
		to: {
			color:
				localStorage.mode == "light"
					? Constants.theme.components.post.modalForm.header.light
					: Constants.theme.components.post.modalForm.header.dark,
		},
		config: { duration: 100 },
	});
}

export function characterCount() {
	return Spring.useSpring({
		to: {
			color:
				localStorage.mode === "light"
					? Constants.theme.components.post.modalForm.characterCount.light
					: Constants.theme.components.post.modalForm.characterCount.dark,
		},
		config: { duration: 100 },
	});
}

export function error() {
	return Spring.useSpring({
		to: {
			color:
				localStorage.mode === "light"
					? Constants.theme.components.post.modalForm.error.light
					: Constants.theme.components.post.modalForm.error.dark,
		},
		config: { duration: 100 },
	});
}

export function input() {
	return Spring.useSpring({
		to: {
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.components.post.modalForm.inputBackground.light
					: Constants.theme.components.post.modalForm.inputBackground.dark,
			border:
				localStorage.mode === "light"
					? `${Constants.theme.components.post.modalForm.inputBorder.light} solid 2px`
					: `${Constants.theme.components.post.modalForm.inputBorder.dark} solid 2px`,
		},
		config: { duration: 100 },
	});
}
