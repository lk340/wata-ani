import * as Lodash from "lodash";

import * as Actions from "@/redux/actions";

const initialState: Actions.Session.CurrentUser = {
	id: null,
	username: null,
	email: null,
	date_joined: null,
	last_login: null,
	first_name: null,
	last_name: null,
	profile_picture: null,
};

type Action = {
	type:
		| typeof Actions.Session.RECEIVE_CURRENT_USER
		| typeof Actions.Session.SIGN_OUT_CURRENT_USER;
	[key: string]: any;
};

export function sessionReducer(
	state: Actions.Session.CurrentUser = initialState,
	action: Action,
) {
	Object.freeze(state);
	const stateCopy = Lodash.merge({}, state);

	switch (action.type) {
		case Actions.Session.RECEIVE_CURRENT_USER:
			return {
				id: action.currentUser.id,
				username: action.currentUser.username,
				email: action.currentUser.email,
				date_joined: action.currentUser.date_joined,
				last_login: action.currentUser.last_login,
				first_name: action.currentUser.first_name,
				last_name: action.currentUser.last_name,
				profile_picture: action.currentUser.profile_picture,
			};

		case Actions.Session.SIGN_OUT_CURRENT_USER:
			return initialState;

		default:
			return stateCopy;
	}
}
