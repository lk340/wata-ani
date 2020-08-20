import * as Redux from "redux";

import { sessionReducer } from "./_session";
import * as Errors from "./errors";

const entitiesReducer = Redux.combineReducers({});

const errorsReducer = Redux.combineReducers({
	session: Errors.Session.errors,
	user: () => {},
	post: () => {},
});

export const rootReducer = Redux.combineReducers({
	entities: entitiesReducer,
	session: sessionReducer,
	errors: errorsReducer,
});
