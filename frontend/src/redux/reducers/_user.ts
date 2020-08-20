import * as Lodash from "lodash";

import * as Actions from "@/redux/actions";

const initialState = {};

type Action = {
	type: Actions.User.CurrentUserType;
	currentUser: Actions.User.CurrentUser;
};

export function CurrentUser(state = initialState, action: Action) {
	Object.freeze(state);
	const newState = Lodash.merge({}, state);

	switch (action.type) {
		case Actions.User.CURRENT_USER:
			return action.currentUser;
		default:
			return newState;
	}
}
