import * as Spring from "react-spring";

import * as Context from "@/context";
import * as Constants from "@/utils/style/constants";

export function container(mode: Context.Theme.Mode) {
	return Spring.useSpring({
		to:
			mode === "light"
				? {
						backgroundColor:
							Constants.theme.components.navbarModalPartial.background.light,
						border: `${Constants.theme.components.navbarModalPartial.border.light} solid 1px`,
				  }
				: {
						backgroundColor:
							Constants.theme.components.navbarModalPartial.background.dark,
						border: `${Constants.theme.components.navbarModalPartial.border.dark} solid 1px`,
				  },
	});
}
