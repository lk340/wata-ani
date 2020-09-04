import * as Lodash from "lodash";

import * as Actions from "@/redux/actions";
import { AnyAction } from "redux";

type Action = {
	type:
		| typeof Actions.Tags.RECEIVE_TAGS
		| typeof Actions.Tags.RECEIVE_TAG
		| typeof Actions.Tags.CREATE_TAG
		| typeof Actions.Tags.UPDATE_TAG
		| typeof Actions.Tags.DELETE_TAG;
	[key: string]: any;
};

type StateCopy = {
	[key: string]: Actions.Tags.Tag;
};

export function tagsReducer(state = {}, action: Action) {
	Object.freeze(state);
	const stateCopy: StateCopy = Lodash.merge({}, state);

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
