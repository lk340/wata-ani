import * as Redux from "redux";

import { sessionReducer } from "./_session";
import { postsReducer } from "./_posts";
import { tagsReducer } from "./_tags";
import * as Errors from "./errors";

const entitiesReducer = Redux.combineReducers({
	posts: postsReducer,
	tags: tagsReducer,
});

const errorsReducer = Redux.combineReducers({
	session: Errors.sessionErrors,
	// user: Errors.userErrors,
	posts: Errors.postsErrors,
	tags: Errors.tagsErrors,
});

export const rootReducer = Redux.combineReducers({
	entities: entitiesReducer,
	session: sessionReducer,
	errors: errorsReducer,
});

// export const rootReducer = () => ({
// 	session: sessionReducer,
// });
