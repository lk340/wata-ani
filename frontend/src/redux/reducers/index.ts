import * as Redux from "redux";

import { sessionReducer } from "./_session";
import { postsReducer } from "./_posts";
import * as Errors from "./errors";

const entitiesReducer = Redux.combineReducers({
	posts: postsReducer,
});

const errorsReducer = Redux.combineReducers({
	session: Errors.sessionErrors,
	// user: Errors.userErrors,
	posts: Errors.postsErrors,
});

export const rootReducer = Redux.combineReducers({
	entities: entitiesReducer,
	session: sessionReducer,
	errors: errorsReducer,
});

// export const rootReducer = () => ({
// 	session: sessionReducer,
// });
