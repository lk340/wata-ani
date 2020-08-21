import * as Redux from "redux";

import { sessionReducer } from "./_session";
import * as Errors from "./errors";

const entitiesReducer = Redux.combineReducers({});

const errorsReducer = Redux.combineReducers({
	session: Errors.sessionErrors,
	user: Errors.userErrors,
	post: Errors.postErrors,
});

export const rootReducer = Redux.combineReducers({
	// entities: entitiesReducer,
	session: sessionReducer,
	// errors: errorsReducer,
});

// export const rootReducer = () => ({
// 	session: sessionReducer,
// });
