import * as _ from "lodash";

import * as Actions from "@/redux/actions";

export function UserReducer(state = {}, action) {
	Object.freeze(state);
	const newState = _.merge({}, state);

	switch (action.type) {
		case Actions.User.CURRENT_USER:
			break;

		default:
			return state;
			break;
	}
}
