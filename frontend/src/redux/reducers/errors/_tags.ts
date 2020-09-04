import * as Lodash from "lodash";

import * as Actions from "@/redux/actions";

type Action = {
	type: typeof Actions.Tags.TAG_ERRORS | typeof Actions.Errors.CLEAR_ERRORS;
	error: string;
};

type Errors = [string, string][];

export function tagsReducer(state = [], action: Action) {
	Object.freeze(state);
	const stateCopy = Lodash.merge([], state);

	switch (action.type) {
		case Actions.Tags.TAG_ERRORS:
			if (action.errors.detail) {
				return action.errors.detail;
			} else {
				const errorEntries = Object.entries(action.errors);
				const errors: Errors = [];
				errorEntries.forEach((error: any) => {
					errors.push([error[0], error[1][0]]);
				});
				return errors;
			}

		case Actions.Errors.CLEAR_ERRORS:
			return [];

		default:
			return state;
	}
}
