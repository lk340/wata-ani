import * as Lodash from "lodash";

import * as Actions from "@/redux/actions";

const initialState = { id: null };

// type Action = {} & Actions.Session.Receive;

export function Session(state = initialState, action: any) {
	Object.freeze(state);
	const newState = Lodash.merge({}, state);

	switch (action.type) {
		case Actions.Session.RECEIVE_CURRENT_USER:
			return { id: action.currentUser.id };
		case Actions.Session.SIGN_OUT_CURRENT_USER:
			return { id: null };
		default:
			return newState;
	}
}
