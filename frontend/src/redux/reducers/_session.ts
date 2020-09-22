import * as Lodash from "lodash";

import * as Context from "@/context";
import * as Actions from "@/redux/actions";

export type InitialState = {
	id: null;
	username: null;
	email: null;
	date_joined: null;
	last_login: null;
	first_name: null;
	last_name: null;
	profile_picture: null;
	posts: null;
	ratings: null;
};

const initialState: InitialState = {
	id: null,
	username: null,
	email: null,
	date_joined: null,
	last_login: null,
	first_name: null,
	last_name: null,
	profile_picture: null,
	posts: null,
	ratings: null,
};

type State = InitialState | Context.AuthForm.CurrentUser;

type Action = {
	type:
		| typeof Actions.Session.RECEIVE_CURRENT_USER
		| typeof Actions.Session.SIGN_OUT_CURRENT_USER;
	[key: string]: any;
};

export function sessionReducer(state: State = initialState, action: Action) {
	Object.freeze(state);
	const stateCopy = Lodash.merge({}, state);

	switch (action.type) {
		case Actions.Session.RECEIVE_CURRENT_USER:
			return action.currentUser;

		case Actions.Session.SIGN_OUT_CURRENT_USER:
			return initialState;

		default:
			return stateCopy;
	}
}
