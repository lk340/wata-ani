import * as Context from "@/context";
import * as Actions from "@/redux/actions";
import { InitialState } from "@/redux/reducers/_session";

type Users = {
	[key: string]: Context.AuthForm.CurrentUser;
};

type Posts = {
	[key: string]: Actions.Posts.Post;
};

type Tags = {
	[key: string]: Actions.Tags.Tag;
};

type Ratings = {
	[key: string]: Actions.Ratings.Rating;
};

export type ReduxState = {
	entities: {
		users: Users;
		posts: Posts;
		tags: Tags;
		ratings: Ratings;
	};
	session: InitialState | Context.AuthForm.CurrentUser;
	errors: {
		session: any;
		users: any;
		posts: any;
		tags: any;
		ratings: any;
	};
};

// ============== //
// ↓↓↓ Action ↓↓↓ //
// ============== //

export type POJO = {
	type: string;
	[key: string]: any;
};

export type ActionCreatorErrors = string | ReducerErrors;

// =============== //
// ↓↓↓ Reducer ↓↓↓ //
// =============== //

export type StateErrors = StateCopyErrors | [];

export type StateCopyErrors = string | ReducerErrors;

export type ActionErrors = {
	[key: string]: any;
};

export type ReducerError = [string, [string]];

export type ReducerErrors = [string, string][];
