import * as Lodash from "lodash";

import * as Actions from "@/redux/actions";

const initialState: Actions.Posts.Post = {
	id: null,
	title: null,
	series_title: null,
	text: null,
	personal_rating: null,
	user_rating: null,
	date_created: null,
	author: null,
	tags: null,
};

type Action = {
	type:
		| typeof Actions.Posts.RECEIVE_POSTS
		| typeof Actions.Posts.RECEIVE_POST
		| typeof Actions.Posts.CREATE_POST
		| typeof Actions.Posts.UPDATE_POST
		| typeof Actions.Posts.DELETE_POST;
	[key: string]: any;
};

// type State = Actions.Posts.Post[] | Actions.Posts.Post;
type State = Actions.Posts.Post[] | [];

// export function postsReducer(state: State = initialState, action: Action) {
export function postsReducer(state = {}, action: Action) {
	Object.freeze(state);
	const stateCopy = Lodash.merge({}, state);

	switch (action.type) {
		case Actions.Posts.RECEIVE_POSTS:
			return action.posts;

		case Actions.Posts.RECEIVE_POST:
			stateCopy[action.post.id] = action.post;
			return stateCopy;

		case Actions.Posts.CREATE_POST:
			stateCopy[action.post.id] = action.post;
			return stateCopy;

		case Actions.Posts.UPDATE_POST:
			stateCopy[action.post.id] = action.post;
			return stateCopy;

		case Actions.Posts.DELETE_POST:
			delete stateCopy[action.id];
			return stateCopy;

		default:
			return stateCopy;
	}
}
