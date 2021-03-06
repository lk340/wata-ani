import * as Redux from "redux";

import { sessionReducer } from "./_session";
import { usersReducer } from "./_users";
import { postsReducer, userPostsReducer } from "./_posts";
import { tagsReducer } from "./_tags";
import { ratingsReducer } from "./_ratings";
import * as Errors from "./errors";

const entitiesReducer = Redux.combineReducers({
	users: usersReducer,
	posts: postsReducer,
	tags: tagsReducer,
	ratings: ratingsReducer,
	userPosts: userPostsReducer,
});

const errorsReducer = Redux.combineReducers({
	session: Errors.sessionErrorsReducer,
	users: Errors.usersErrorsReducer,
	posts: Errors.postsErrorsReducer,
	tags: Errors.tagsErrorsReducer,
	ratings: Errors.ratingsErrorsReducer,
});

export const rootReducer = Redux.combineReducers({
	entities: entitiesReducer,
	session: sessionReducer,
	errors: errorsReducer,
});
