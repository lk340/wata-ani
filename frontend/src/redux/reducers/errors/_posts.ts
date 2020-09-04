import * as Lodash from "lodash";

import * as Actions from "@/redux/actions";

type ActionErrors = {
	[key: string]: any;
};

type Action = {
	type: typeof Actions.Posts.POST_ERRORS | typeof Actions.Errors.CLEAR_ERRORS;
	errors: ActionErrors;
};

type Errors = [string, string][];

export function errorsReducer(state = [], action: Action) {
	Object.freeze(state);
	const stateCopy = Lodash.merge([], state);

	switch (action.type) {
		case Actions.Posts.POST_ERRORS:
			if (Object.keys(action.errors).length < 2) {
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
			return "";

		default:
			return stateCopy;
	}
}
