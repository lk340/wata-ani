import axios from "axios";

import * as Context from "@/context";
import * as AxiosHelpers from "@/utils/api/axios-helpers";

import { clearErrors } from "./_clear_errors";
import { Tag } from "./_tags";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const CREATE_POST = "CREATE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";
export const POST_ERRORS = "POST_ERRORS";

const validateStatus = AxiosHelpers.validateStatus;

// ======================= //
// ↓↓↓ Action Creators ↓↓↓ //
// ======================= //

export type Post = {
	id: number | null;
	title: string | null;
	series_title: string | null;
	text: string | null;
	personal_rating: number | null;
	user_rating: number | null;
	date_created: string | null;
	author: string | null;
	tags: Tag[] | null;
};

type CreateData = {
	title: string;
	series_title: string;
	text: string;
	personal_rating: number;
	author: Context.AuthForm.CurrentUser;
	tags?: Tag | Tag[];
};

function receivePosts(posts: Post[]) {
	return {
		type: RECEIVE_POSTS,
		posts,
	};
}

function receivePost(post: Post) {
	return {
		type: RECEIVE_POST,
		post,
	};
}

function createPost(post: Post) {
	return {
		type: CREATE_POST,
		post,
	};
}

function updatePost(post: Partial<Post>) {
	return {
		type: UPDATE_POST,
		post,
	};
}

function deletePost(id: number) {
	return {
		type: DELETE_POST,
		id,
	};
}

function postErrors(errors: string) {
	return {
		type: POST_ERRORS,
		errors,
	};
}

// ============================= //
// ↓↓↓ Thunk Action Creators ↓↓↓ //
// ============================= //

export async function thunkReceivePosts(errors: string, dispatch: Function) {
	try {
		const response = await axios.get("/api/posts/", { validateStatus });

		// Success
		if (response.status < 400) {
			dispatch(receivePosts(response.data));
			if (errors.length > 0) dispatch(clearErrors());
		}
		// Failure
		else {
			console.log("Error:", response);
		}
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkReceivePost(id: number, errors: string, dispatch: Function) {
	try {
		const response = await axios.get(`/api/posts/${id}/`, { validateStatus });

		// Success
		if (response.status < 400) {
			dispatch(receivePost(response.data));
			if (errors.length > 0) dispatch(clearErrors());
		}
		// Failure
		else {
			dispatch(postErrors(response.data));
		}
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkCreatePost(
	data: CreateData,
	errors: string,
	dispatch: Function,
) {
	try {
		const response = await axios.post("/api/posts/", data, { validateStatus });

		// Success
		if (response.status < 400) {
			dispatch(createPost(response.data));
			if (errors.length > 0) dispatch(clearErrors());
		}
		// Failure
		else {
			dispatch(postErrors(response.data));
		}
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkUpdatePost(
	id: number,
	data: Partial<CreateData>,
	errors: string,
	dispatch: Function,
) {
	try {
		const response = await axios.patch(`/api/posts/${id}/`, data, { validateStatus });

		// Success
		if (response.status < 400) {
			dispatch(updatePost(response.data));
			if (errors.length > 0) dispatch(clearErrors());
		}
		// Failure
		else {
			dispatch(postErrors(response.data));
		}
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkDeletePost(id: number, errors: string, dispatch: Function) {
	try {
		const response = await axios.delete(`/api/posts/${id}/`, { validateStatus });

		// Success
		if (response.status < 400) {
			dispatch(deletePost(id));
		}
		// Failure
		else {
			dispatch(postErrors(response.data));
		}
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}
