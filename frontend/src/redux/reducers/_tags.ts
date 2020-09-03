import * as Lodash from "lodash";

import * as Actions from "@/redux/actions";

const initialState: Actions.Tags.Tag = {
	title: null,
};

type Action = {
	type:
		| typeof Actions.Tags.RECEIVE_TAGS
		| typeof Actions.Tags.RECEIVE_TAG
		| typeof Actions.Tags.CREATE_TAG
		| typeof Actions.Tags.UPDATE_TAG
		| typeof Actions.Tags.DELETE_TAG;
	[key: string]: any;
};

type State = Actions.Tags.Tag[] | Actions.Tags.Tag;

export function tagsReducer(state: State = initialState, action: Action) {
	Object.freeze(state);
	const stateCopy = Lodash.merge({}, state);

	switch (action.type) {
		case Actions.Tags.RECEIVE_TAGS:
			return action.tags;

		case Actions.Tags.RECEIVE_TAG:
			return action.tag;

		case Actions.Tags.CREATE_TAG:
			return action.tag;

		case Actions.Tags.UPDATE_TAG:
			return action.tag;

		case Actions.Tags.DELETE_TAG:
			return initialState;

		default:
			return stateCopy;
	}
}
