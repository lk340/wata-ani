import * as Lodash from "lodash";

import * as Actions from "@/redux/actions";

type Action = {
	type:
		| typeof Actions.Tags.RECEIVE_TAGS
		| typeof Actions.Tags.RECEIVE_TAG
		| typeof Actions.Tags.CREATE_TAG
		| typeof Actions.Tags.UPDATE_TAG
		| typeof Actions.Tags.DELETE_TAG;
	[key: string]: any;
};

export function tagsReducer(state = {}, action: Action) {
	Object.freeze(state);
	const stateCopy = Lodash.merge({}, state);

	switch (action.type) {
		case Actions.Tags.RECEIVE_TAGS:
			return action.tags;

		case Actions.Tags.RECEIVE_TAG:
			stateCopy[action.tag.id] = action.tag;
			return stateCopy;

		case Actions.Tags.CREATE_TAG:
			stateCopy[action.tag.id] = action.tag;
			return stateCopy;

		case Actions.Tags.UPDATE_TAG:
			stateCopy[action.tag.id] = action.tag;
			return stateCopy;

		case Actions.Tags.DELETE_TAG:
			delete stateCopy[action.id];
			return stateCopy;

		default:
			return stateCopy;
	}
}
