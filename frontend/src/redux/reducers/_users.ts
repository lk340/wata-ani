import * as Lodash from "lodash";

import * as Context from "@/context";
import * as Actions from "@/redux/actions";

type State = {};

type StateCopy = {};

type Action = {
	type:
		| typeof Actions.Users.GET_USERS
		| typeof Actions.Users.GET_USER
		| typeof Actions.Users.UPDATE_USER
		| typeof Actions.Users.DELETE_USER;
	[key: string]: any;
};

export function usersReducer(state: any = {}, action: Action) {
	Object.freeze(state);
	const stateCopy: any = Lodash.merge({}, state);

	switch (action.type) {
		case Actions.Users.GET_USERS:
			return action.users;

		case Actions.Users.GET_USER:
			stateCopy[action.user.id] = action.user;
			return stateCopy;

		case Actions.Users.UPDATE_USER:
			stateCopy[action.user.id] = action.user;
			return stateCopy;

		case Actions.Users.DELETE_USER:
			delete stateCopy[action.id];
			return stateCopy;

		default:
			return stateCopy;
	}
}
