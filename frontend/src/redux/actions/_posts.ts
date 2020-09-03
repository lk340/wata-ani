import axios from "axios";

import * as AxiosHelpers from "@/utils/api/axios-helpers";

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

type Tag = { title: string };

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

function deletePost(post: Post) {
	return {
		type: DELETE_POST,
		post,
	};
}

function postErrors(error: string) {
	return {
		type: POST_ERRORS,
		error,
	};
}

// ============================= //
// ↓↓↓ Thunk Action Creators ↓↓↓ //
// ============================= //

export async function thunkReceivePosts(dispatch: Function) {
	try {
		const response = await axios.get("/api/posts/", { validateStatus });

		// Success
		if (response.status < 400) dispatch(receivePosts(response.data));
		// Failure
		else console.log("Error:", response);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkReceivePost(id: number, dispatch: Function) {
	try {
		const response = await axios.get(`/api/posts/${id}/`, { validateStatus });

		// Success
		if (response.status < 400) dispatch(receivePost(response.data));
		// Failure
		else dispatch(postErrors(response.data.detail));
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkCreatePost(data: Post, dispatch: Function) {
	try {
		const response = await axios.post("/api/posts/", data, { validateStatus });

		// Success
		if (response.status < 400) {
			console.log("Data:", response.data);
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

export async function thunkUpdatePost(
	id: number,
	data: Partial<Post>,
	dispatch: Function,
) {
	try {
		const response = await axios.patch(`/api/posts/${id}/`, data, { validateStatus });

		// Success
		if (response.status < 400) {
			console.log("Data:", response.data);
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

export async function thunkDeletePost(id: number, dispatch: Function) {
	try {
		const response = await axios.delete(`/api/posts/${id}/`, { validateStatus });

		// Success
		if (response.status < 400) {
			console.log("Data:", response.data);
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
