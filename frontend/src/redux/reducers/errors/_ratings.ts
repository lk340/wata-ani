import * as Lodash from "lodash";

import * as Actions from "@/redux/actions";
import * as Types from "@/utils/types";

type Action = {
	type: typeof Actions.Ratings.RATING_ERRORS | typeof Actions.Errors.CLEAR_ERRORS;
	errors: Types.ActionErrors;
};

export function errorsReducer(state: Types.StateErrors = [], action: Action) {
	Object.freeze(state);
	const stateCopy: Types.StateCopyErrors = Lodash.merge([], state);

	switch (action.type) {
		case Actions.Ratings.RATING_ERRORS:
			if (action.errors.detail) {
				return action.errors.detail;
			} else {
				const errorEntries = Object.entries(action.errors);
				const errors: Types.ReducerErrors = [];
				errorEntries.forEach((error: Types.ReducerError) => {
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
