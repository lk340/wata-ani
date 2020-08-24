import * as Lodash from "lodash";

import * as Actions from "@/redux/actions";

type Action = {
	type: typeof Actions.Session.SESSION_ERRORS | typeof Actions.Errors.CLEAR_ERRORS;
	[key: string]: any;
};

export function errorsReducer(state = [], action: Action) {
	Object.freeze(state);
	const stateCopy = Lodash.merge([], state);

	switch (action.type) {
		case Actions.Session.SESSION_ERRORS:
			return Lodash.merge([], stateCopy, action.errors);

		case Actions.Errors.CLEAR_ERRORS:
			return [];

		default:
			return stateCopy;
	}
}
