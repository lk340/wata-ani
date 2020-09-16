export type ReduxState = {
	entities: {
		users: any;
		posts: any;
		tags: any;
	};
	session: {
		id: number | null;
		username: string | null;
		email: string | null;
		date_joined: string | null;
		last_login: string | null;
		first_name: string | null;
		last_name: string | null;
		profile_picture: string | null;
	};
	errors: {
		session: any;
		users: any;
		posts: any;
		tags: any;
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
