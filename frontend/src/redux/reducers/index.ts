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
	session: Errors.sessionErrorsReducer,
	// user: Errors.userErrors,
	posts: Errors.postsErrorsReducer,
	tags: Errors.tagsErrorsReducer,
});

export const rootReducer = Redux.combineReducers({
	entities: entitiesReducer,
	session: sessionReducer,
	errors: Types.ActionCreatorErrorsReducer,
});
