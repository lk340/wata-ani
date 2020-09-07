import * as Lodash from "lodash";

import * as Actions from "@/redux/actions";
import * as Types from "../__types";

type Action = {
	type: typeof Actions.Tags.TAG_ERRORS | typeof Actions.Errors.CLEAR_ERRORS;
	errors: Types.ActionErrors;
};

export function tagsReducer(state: Types.State = [], action: Action) {
	Object.freeze(state);
	const stateCopy: Types.StateCopy = Lodash.merge([], state);

	switch (action.type) {
		case Actions.Tags.TAG_ERRORS:
			if (action.errors.detail) {
				return action.errors.detail;
			} else {
				const errorEntries = Object.entries(action.errors);
				const errors: Types.Errors = [];
				errorEntries.forEach((error: Types.Error) => {
					errors.push([error[0], error[1][0]]);
				});
				return errors;
			}

		case Actions.Errors.CLEAR_ERRORS:
			return [];

		default:
			return stateCopy;
	}
}
