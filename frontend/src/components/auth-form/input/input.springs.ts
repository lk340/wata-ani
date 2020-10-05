import * as Spring from "react-spring";

import * as Constants from "@/utils/style/constants";
import * as Colors from "@/utils/style/colors";

import { FormType } from "../auth-form";

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

export function inputField(isError: boolean, formType: AuthForm) {
	return Spring.useSpring({
		to:
			localStorage.mode === "light"
				? {
						backgroundColor: Constants.theme.components.authForm.inputBackground.light,
						border:
							isError && formType !== "Sign In"
								? `${Colors.ALERTS.error.light} solid 2px`
								: `${Constants.theme.components.authForm.inputBorder.light} solid 2px`,
				  }
				: {
						backgroundColor: Constants.theme.components.authForm.inputBackground.dark,
						border:
							isError && formType !== "Sign In"
								? `${Colors.ALERTS.error.dark} solid 2px`
								: `${Constants.theme.components.authForm.inputBorder.dark} solid 2px`,
				  },
		config: { duration: 100 },
	});
}
