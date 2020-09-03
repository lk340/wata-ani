import * as Actions from "@/redux/actions";

type Action = {
	type: typeof Actions.Posts.POST_ERRORS | typeof Actions.Errors.CLEAR_ERRORS;
	error: string;
};

export function errorsReducer(state = "", action: Action) {
	Object.freeze(state);

	switch (action.type) {
		case Actions.Posts.POST_ERRORS:
			return action.error;

		case Actions.Errors.CLEAR_ERRORS:
			return "";

		default:
			return state;
	}
}
