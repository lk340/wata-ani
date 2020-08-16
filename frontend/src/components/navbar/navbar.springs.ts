import * as Spring from "react-spring";

import * as Context from "@/context";
import * as Constants from "@/utils/style/constants";
import * as Colors from "@/utils/style/colors";

export function navbar(mode: Context.Theme.Mode) {
	return Spring.useSpring({
		to:
			mode === "light"
				? {
						color: Colors.TEXT.black,
						backgroundColor: Constants.theme.background.light,
						borderBottom: `${Colors.LIGHT.four} solid 1px`,
				  }
				: {
						color: Colors.TEXT.white,
						backgroundColor: Constants.theme.background.dark,
						borderBottom: `${Colors.DARK.five} solid 1px`,
				  },
		config: { duration: 100 },
	});
}
