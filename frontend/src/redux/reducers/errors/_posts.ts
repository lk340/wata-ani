import * as Lodash from "lodash";

import * as Actions from "@/redux/actions";

type State = StateCopy | [];

type StateCopy = string | Errors;

type ActionErrors = {
	[key: string]: any;
};

type Action = {
	type: typeof Actions.Posts.POST_ERRORS | typeof Actions.Errors.CLEAR_ERRORS;
	errors: ActionErrors;
};

type Errors = [string, string][];
type Error = [string, [string]];

export function errorsReducer(state: State = [], action: Action) {
	Object.freeze(state);
	const stateCopy: StateCopy = Lodash.merge([], state);

	switch (action.type) {
		case Actions.Posts.POST_ERRORS:
			if (action.errors.detail) {
				return action.errors.detail;
			} else {
				const errorEntries = Object.entries(action.errors);
				const errors: Errors = [];
				errorEntries.forEach((error: Error) => {
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
