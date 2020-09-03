import axios from "axios";

import * as AxiosHelpers from "@/utils/api/axios-helpers";
import { clearErrors } from "./_clear_errors";

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const CREATE_TAG = "CREATE_TAG";
export const UPDATE_TAG = "UPDATE_TAG";
export const DELETE_TAG = "DELETE_TAG";
export const TAG_ERRORS = "TAG_ERRORS";

const validateStatus = AxiosHelpers.validateStatus;

// =========================---- //
// ↓↓↓ Thunk Action Creators ↓↓↓ //
// =========================---- //

export type Tag = { title: string | null };

function receiveTags(tags: Tag[]) {
	return {
		type: RECEIVE_TAGS,
		tags,
	};
}

function receiveTag(tag: Tag) {
	return {
		type: RECEIVE_TAG,
		tag,
	};
}

function createTag(tag: Tag) {
	return {
		type: CREATE_TAG,
		tag,
	};
}

function updateTag(tag: Partial<Tag>) {
	return {
		type: UPDATE_TAG,
		tag,
	};
}

function deleteTag() {
	return {
		type: DELETE_TAG,
	};
}

function tagErrors(error: string) {
	return {
		type: TAG_ERRORS,
		error,
	};
}

// ============================= //
// ↓↓↓ Thunk Action Creators ↓↓↓ //
// ============================= //

export async function thunkReceiveTags(dispatch: Function) {
	try {
		const response = await axios.get("/api/tags/", { validateStatus });

		// Success
		if (response.status < 400) {
			console.log("Success:", response);
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

export async function thunkReceiveTag(id: number, dispatch: Function) {
	try {
		const response = await axios.get(`/api/tags/${id}/`, { validateStatus });

		// Success
		if (response.status < 400) {
			console.log("Success:", response);
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

export async function thunkCreateTag(data: Tag, dispatch: Function) {
	try {
		const response = await axios.post("/api/tags/", data, { validateStatus });

		// Success
		if (response.status < 400) {
			console.log("Success:", response);
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

export async function thunkUpdateTag(id: number, data: Partial<Tag>, dispatch: Function) {
	try {
		const response = await axios.patch(`/api/tags/${id}/`, data, { validateStatus });

		// Success
		if (response.status < 400) {
			console.log("Success:", response);
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

export async function thunkDeleteTag(id: number, dispatch: Function) {
	try {
		const response = await axios.delete(`/api/tags/${id}/`, { validateStatus });

		// Success
		if (response.status < 400) {
			console.log("Success:", response);
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
