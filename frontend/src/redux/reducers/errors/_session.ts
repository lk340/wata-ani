import * as Lodash from "lodash";

import * as Actions from "@/redux/actions";

type Action = {
	type: typeof Actions.Session.RECEIVE_ERRORS | typeof Actions.Session.CLEAR_ERRORS;
	[key: string]: any;
};

export function errors(state = [], action: Action) {
	Object.freeze(state);
	const newState = Lodash.merge([], state);

	switch (action.type) {
		case Actions.Session.RECEIVE_ERRORS:
			return [newState, action.errors];

		case Actions.Session.CLEAR_ERRORS:
			return [];

		default:
			return newState;
	}
}
