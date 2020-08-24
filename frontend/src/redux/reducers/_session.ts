import * as Lodash from "lodash";

import * as Actions from "@/redux/actions";

const initialState = {
	username: null,
	email: null,
};

type Action = {
	type:
		| typeof Actions.Session.RECEIVE_CURRENT_USER
		| typeof Actions.Session.SIGN_OUT_CURRENT_USER;
	[key: string]: any;
};

export function sessionReducer(state = initialState, action: Action) {
	Object.freeze(state);
	const stateCopy = Lodash.merge({}, state);

	switch (action.type) {
		case Actions.Session.RECEIVE_CURRENT_USER:
			// return { id: action.currentUser.id };
			return { username: action.currentUser.username, email: action.currentUser.email };

		case Actions.Session.SIGN_OUT_CURRENT_USER:
			return initialState;

		default:
			return stateCopy;
	}
}
