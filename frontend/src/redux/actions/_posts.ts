import axios from "axios";

import * as Context from "@/context";
import * as AxiosHelpers from "@/utils/api/axios-helpers";

import * as ReducerTypes from "@/redux/reducers/__types";
import { clearErrors } from "./_clear_errors";
import { Tag } from "./_tags";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const CREATE_POST = "CREATE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";
export const POST_ERRORS = "POST_ERRORS";

type Errors = string | ReducerTypes.Errors;

const validateStatus = AxiosHelpers.validateStatus;

// ======================= //
// ↓↓↓ Action Creators ↓↓↓ //
// ======================= //

export type Post = {
	id: number;
	title: string;
	series_title: string;
	text: string;
	personal_rating: number;
	user_rating: number;
	date_created: string;
	author: string;
	tags: Tag[];
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

function postErrors(errors: Errors) {
	return {
		type: POST_ERRORS,
		errors,
	};
}

// ============================= //
// ↓↓↓ Thunk Action Creators ↓↓↓ //
// ============================= //

function handleResponse(
	dispatch: Function,
	response: any,
	actionCreator: Function,
	errors: Errors,
) {
	// Success
	if (response.status < 400) {
		dispatch(actionCreator(response.data));
		if (errors.length > 0) dispatch(clearErrors());
	}
	// Failure
	else {
		dispatch(postErrors(response.data));
	}
}

export async function thunkReceivePosts(errors: Errors, dispatch: Function) {
	try {
		const response = await axios.get("/api/posts/", { validateStatus });
		handleResponse(dispatch, response, receivePosts, errors);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkReceivePost(id: number, errors: Errors, dispatch: Function) {
	try {
		const response = await axios.get(`/api/posts/${id}/`, { validateStatus });
		handleResponse(dispatch, response, receivePost, errors);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkCreatePost(
	data: CreateData,
	errors: Errors,
	dispatch: Function,
) {
	try {
		const response = await axios.post("/api/posts/", data, { validateStatus });
		handleResponse(dispatch, response, createPost, errors);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkUpdatePost(
	id: number,
	data: Partial<CreateData>,
	errors: Errors,
	dispatch: Function,
) {
	try {
		const response = await axios.patch(`/api/posts/${id}/`, data, { validateStatus });
		handleResponse(dispatch, response, updatePost, errors);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkDeletePost(id: number, dispatch: Function) {
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
