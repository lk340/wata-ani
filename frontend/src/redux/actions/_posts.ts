import axios from "axios";

import * as Context from "@/context";
import * as AxiosHelpers from "@/utils/api/axios-helpers";
import * as Functions from "@/utils/functions";
import * as Types from "@/utils/types";

import { Tag } from "@/redux/actions/_tags";
import { Rating } from "@/redux/actions/_ratings";

const validateStatus = AxiosHelpers.validateStatus;

export const GET_POSTS = "GET_POSTS";
export const GET_POST = "GET_POST";
export const CREATE_POST = "CREATE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";
export const GET_USER_POSTS = "GET_USER_POSTS";
export const CREATE_USER_POST = "CREATE_USER_POST";
export const UPDATE_USER_POST = "UPDATE_USER_POST";
export const POST_ERRORS = "POST_ERRORS";

export type Post = {
	id: number;
	title: string;
	series_title: string;
	review: string;
	personal_rating: number;
	date_created: string;
	author: number;
	tags: number[];
	user_ratings: number[];
};

type CreateData = {
	title: string;
	series_title: string;
	review: string;
	personal_rating: number;
	author: number;
	tags?: number[];
	user_ratings: number[];
};

// ======================= //
// ↓↓↓ Action Creators ↓↓↓ //
// ======================= //

function getPosts(posts: Post[]): Types.POJO {
	return {
		type: GET_POSTS,
		posts,
	};
}

function getPost(post: Post): Types.POJO {
	return {
		type: GET_POST,
		post,
	};
}

function createPost(post: Post): Types.POJO {
	return {
		type: CREATE_POST,
		post,
	};
}

function updatePost(post: Partial<Post>): Types.POJO {
	return {
		type: UPDATE_POST,
		post,
	};
}

function deletePost(id: number): Types.POJO {
	return {
		type: DELETE_POST,
		id,
	};
}

function getUserPosts(posts: Post[]): Types.POJO {
	return {
		type: GET_USER_POSTS,
		posts,
	};
}

function createUserPost(post: Post): Types.POJO {
	return {
		type: CREATE_USER_POST,
		post,
	};
}

function updateUserPost(post: Post): Types.POJO {
	return {
		type: UPDATE_USER_POST,
		post,
	};
}

function postErrors(errors: Types.ActionCreatorErrors): Types.POJO {
	return {
		type: POST_ERRORS,
		errors,
	};
}

// ============================= //
// ↓↓↓ Thunk Action Creators ↓↓↓ //
// ============================= //

// function handleResponse(
// 	dispatch: Function,
// 	response: any,
// 	actionCreator: Function,
// 	errors: Types.ActionCreatorErrors,
// ) {
// 	// Success
// 	if (response.status < 400) {
// 		dispatch(actionCreator(response.data));
// 		if (errors.length > 0) dispatch(clearErrors());
// 	}
// 	// Failure
// 	else {
// 		dispatch(postErrors(response.data));
// 	}
// }

export async function thunkGetPosts(
	dispatch: Function,
	errors: Types.ActionCreatorErrors,
): Promise<void> {
	try {
		const response = await axios.get("/api/posts/", { validateStatus });
		Functions.handleResponse(dispatch, response, getPosts, postErrors, errors);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkGetPost(
	id: number,
	dispatch: Function,
	errors: Types.ActionCreatorErrors,
): Promise<void> {
	try {
		const response = await axios.get(`/api/posts/${id}/`, { validateStatus });
		Functions.handleResponse(dispatch, response, getPost, postErrors, errors);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkCreatePost(
	data: CreateData,
	dispatch: Function,
	errors: Types.ActionCreatorErrors,
): Promise<void> {
	try {
		const response = await axios.post("/api/posts/", data, { validateStatus });
		Functions.handleResponse(dispatch, response, createPost, postErrors, errors);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkUpdatePost(
	id: number,
	data: CreateData,
	dispatch: Function,
	errors: Types.ActionCreatorErrors,
): Promise<void> {
	try {
		const response = await axios.patch(`/api/posts/${id}/`, data, { validateStatus });
		Functions.handleResponse(dispatch, response, updatePost, postErrors, errors);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkDeletePost(id: number, dispatch: Function): Promise<void> {
	try {
		const response = await axios.delete(`/api/posts/${id}/`, { validateStatus });

		// Success
		if (response.status < 400) dispatch(deletePost(id));
		// Failure
		else dispatch(postErrors(response.data));
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkGetUserPosts(
	userId: number,
	dispatch: Function,
	errors: Types.ActionCreatorErrors,
): Promise<void> {
	try {
		const response = await axios.get(`/api/users/${userId}/posts/`, { validateStatus });
		Functions.handleResponse(dispatch, response, getUserPosts, postErrors, errors);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkCreateUserPost(
	data: CreateData,
	dispatch: Function,
	errors: Types.ActionCreatorErrors,
): Promise<void> {
	try {
		const response = await axios.post("/api/posts/", data, { validateStatus });
		Functions.handleResponse(dispatch, response, createUserPost, postErrors, errors);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}