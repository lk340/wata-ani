import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

export function post() {
	return Spring.useSpring({
		to: {
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.components.post.background.light
					: Constants.theme.components.post.background.dark,
			border:
				localStorage.mode === "light"
					? `${Constants.theme.components.post.border.light} solid 2px`
					: `${Constants.theme.components.post.border.dark} solid 2px`,
		},
		config: { duration: 100 },
	});
}

export function container(readMoreExpanded: boolean) {
	return Spring.useSpring({
		to: {},
	});
}

export function wrapper(readMoreExpanded: boolean) {
	return Spring.useSpring({
		to: { overflow: readMoreExpanded ? "visible" : "hidden" },
		config: { duration: 0 },
	});
}

export function fade(showReadMore: boolean, readMoreExpanded: boolean) {
	return Spring.useSpring({
		to: {
			background:
				localStorage.mode === "light"
					? `linear-gradient(
							180deg, 
							${Constants.theme.components.post.readMore.fade.light} 0%, 
							rgba(255, 255, 255, 0) 0%, 
							${Constants.theme.components.post.readMore.fade.light} 100%
						)`
					: `linear-gradient(
							180deg, 
							${Constants.theme.components.post.readMore.fade.dark} 0%, 
							rgba(255, 255, 255, 0) 0%, 
							${Constants.theme.components.post.readMore.fade.dark} 100%
						)`,
			display: !showReadMore ? "none" : readMoreExpanded ? "none" : "block",
		},
		config: { duration: 100 },
	});
}

export function cardDate() {
	return Spring.useSpring({
		to: {
			color:
				localStorage.mode === "light"
					? Constants.theme.components.post.date.light
					: Constants.theme.components.post.date.light,
		},
		config: { duration: 100 },
	});
}

export function tag() {
	return Spring.useSpring({
		to: {
			backgroundColor:
				localStorage.mode === "light"
					? Constants.theme.components.post.tag.light
					: Constants.theme.components.post.tag.dark,
		},
		config: { duration: 100 },
	});
}

export function readMore(isReadMore: boolean) {
	return Spring.useSpring({
		to: { display: isReadMore ? "block" : "none" },
		config: { duration: 100 },
	});
}
