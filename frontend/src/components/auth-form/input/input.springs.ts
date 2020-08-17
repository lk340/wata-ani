import * as Spring from "react-spring";

import * as Context from "@/context";
import * as Constants from "@/utils/style/constants";

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

export function inputField(mode: Context.Theme.Mode) {
	return Spring.useSpring({
		to:
			mode === "light"
				? {
						backgroundColor: Constants.theme.components.authForm.inputBackground.light,
						border: `${Constants.theme.components.authForm.inputBorder.light} solid 2px`,
				  }
				: {
						backgroundColor: Constants.theme.components.authForm.inputBackground.dark,
						border: `${Constants.theme.components.authForm.inputBorder.dark} solid 2px`,
				  },
	});
}
