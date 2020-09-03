import axios from "axios";

import * as AxiosHelpers from "@/utils/api/axios-helpers";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const CREATE_POST = "CREATE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const REMOVE_POST = "REMOVE_POST";

const validateStatus = AxiosHelpers.validateStatus;

// ======================= //
// ↓↓↓ Action Creators ↓↓↓ //
// ======================= //

type Tag = { title: string };

type Post = {
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

function receivePosts() {
	return {
		type: RECEIVE_POSTS,
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

function removePost(post: Post) {
	return {
		type: REMOVE_POST,
		post,
	};
}

// ============================= //
// ↓↓↓ Thunk Action Creators ↓↓↓ //
// ============================= //

export async function getPosts() {
	try {
		const response = await axios.get("/api/posts/", { validateStatus });

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

export async function getPost(id: number) {
	try {
		const response = await axios.get(`/api/posts/${id}/`, { validateStatus });

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

export async function postPost(data: Post) {
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

export async function patchPost(id: number, data: Partial<Post>) {
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

export async function deletePost(id: number) {
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
