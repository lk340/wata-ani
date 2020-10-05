import * as Spring from "react-spring";

import * as Context from "@/context";
import * as Constants from "@/utils/style/constants";
import * as Shadows from "@/utils/style/shadows";

export function container(mode: Context.Theme.Mode) {
	return Spring.useSpring({
		to:
			mode === "light"
				? {
						backgroundColor:
							Constants.theme.components.navbarModalPartial.background.light,
						border: `${Constants.theme.components.navbarModalPartial.border.light} solid 1px`,
						boxShadow: Shadows.light.one,
				  }
				: {
						backgroundColor:
							Constants.theme.components.navbarModalPartial.background.dark,
						border: `${Constants.theme.components.navbarModalPartial.border.dark} solid 1px`,
						boxShadow: Shadows.dark.one,
				  },
		 
	});
}

export function header(mode: Context.Theme.Mode) {
	return Spring.useSpring({
		to:
			mode === "light"
				? {
						backgroundColor: Constants.theme.components.navbarModalPartial.header.light,
						borderBottom: `${Constants.theme.components.navbarModalPartial.border.light} solid 1px`,
				  }
				: {
						backgroundColor: Constants.theme.components.navbarModalPartial.header.dark,
						borderBottom: `${Constants.theme.components.navbarModalPartial.border.dark} solid 1px`,
				  },
		 
	});
}

export function headerText(mode: Context.Theme.Mode) {
	return Spring.useSpring({
		to: {
			color:
				mode === "light"
					? Constants.theme.components.navbarModalPartial.headerText.light
					: Constants.theme.components.navbarModalPartial.headerText.dark,
 		},
		config: { duration: 100 },
	});
}
