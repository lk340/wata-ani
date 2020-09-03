import * as Lodash from "lodash";

import * as Actions from "@/redux/actions";

type Action = {
	type: typeof Actions.Posts.POST_ERRORS;
	error: string;
};

export function errorsReducer(state = "", action: Action) {
	Object.freeze(state);
	const stateCopy = Lodash.merge("", state);

	switch (action.type) {
		case Actions.Posts.POST_ERRORS:
			return action.error;

		default:
			return stateCopy;
	}
}
