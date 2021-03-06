import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";

function handleSelectedBorder(): string {
	if (localStorage.mode === "light") {
		return `${Constants.theme.components.post.modalForm.tag.borderSelected.light} solid 1px`;
	} else {
		return `${Constants.theme.components.post.modalForm.tag.borderSelected.dark} solid 1px`;
	}
}

function handleSelectedBackground(): string {
	if (localStorage.mode === "light") {
		return Constants.theme.components.post.modalForm.tag.backgroundSelected.light;
	} else {
		return Constants.theme.components.post.modalForm.tag.backgroundSelected.dark;
	}
}

function handleUnselectedBackground(): string {
	if (localStorage.mode === "light") {
		return Constants.theme.components.post.modalForm.tag.backgroundNotSelected
			.light;
	} else {
		return Constants.theme.components.post.modalForm.tag.backgroundNotSelected.dark;
	}
}

function handleSelectedColor(): string {
	if (localStorage.mode === "light") {
		return Constants.theme.text.light;
	} else {
		return Constants.theme.text.dark;
	}
}

export function tag(selected: boolean) {
	return Spring.useSpring({
		to: {
			border: selected
				? handleSelectedBorder()
				: `${Constants.theme.components.post.modalForm.tag.borderNotSelected} solid 1px`,
			background: selected ? handleSelectedBackground() : handleUnselectedBackground(),
			color: selected
				? handleSelectedColor()
				: Constants.theme.components.post.modalForm.tag.textNotSelected,
		},
		config: { duration: 100 },
	});
}
