import * as Lodash from "lodash";

import * as Actions from "@/redux/actions";

type State = StateCopy | {};

type StateCopy = {
	[key: string]: Actions.Posts.Post;
};

type Action = {
	type:
		| typeof Actions.Posts.GET_POSTS
		| typeof Actions.Posts.GET_POST
		| typeof Actions.Posts.CREATE_POST
		| typeof Actions.Posts.UPDATE_POST
		| typeof Actions.Posts.DELETE_POST;
	[key: string]: any;
};

export function postsReducer(state: State = {}, action: Action) {
	Object.freeze(state);
	const stateCopy: StateCopy = Lodash.merge({}, state);

	switch (action.type) {
		case Actions.Posts.GET_POSTS:
			return action.posts;

		case Actions.Posts.GET_POST:
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
