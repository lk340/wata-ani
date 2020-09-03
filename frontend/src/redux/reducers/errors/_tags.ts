import * as Actions from "@/redux/actions";

type Action = {
	type: typeof Actions.Tags.TAG_ERRORS | typeof Actions.Errors.CLEAR_ERRORS;
	error: string;
};

export function tagsReducer(state = "", action: Action) {
	Object.freeze(state);

	switch (action.type) {
		case Actions.Tags.TAG_ERRORS:
			return action.error;

		case Actions.Errors.CLEAR_ERRORS:
			return "";

		default:
			return state;
	}
}
