import axios from "axios";

import * as Types from "@/utils/types";
import * as AxiosHelpers from "@/utils/api/axios-helpers";

import * as ReducerTypes from "@/redux/reducers/__types";
import { clearErrors } from "./_clear_errors";

export const GET_TAGS = "GET_TAGS";
export const GET_TAG = "GET_TAG";
export const CREATE_TAG = "CREATE_TAG";
export const UPDATE_TAG = "UPDATE_TAG";
export const DELETE_TAG = "DELETE_TAG";
export const TAG_ERRORS = "TAG_ERRORS";

type Errors = string | ReducerTypes.Errors;

const validateStatus = AxiosHelpers.validateStatus;

// ======================= //
// ↓↓↓ Action Creators ↓↓↓ //
// ======================= //

export type Tag = { title: string };

function receiveTags(tags: Tag[]): Types.POJO {
	return {
		type: GET_TAGS,
		tags,
	};
}

function receiveTag(tag: Tag): Types.POJO {
	return {
		type: GET_TAG,
		tag,
	};
}

function createTag(tag: Tag): Types.POJO {
	return {
		type: CREATE_TAG,
		tag,
	};
}

function updateTag(tag: Partial<Tag>): Types.POJO {
	return {
		type: UPDATE_TAG,
		tag,
	};
}

function deleteTag(id: number): Types.POJO {
	return {
		type: DELETE_TAG,
		id,
	};
}

function tagErrors(errors: Errors): Types.POJO {
	return {
		type: TAG_ERRORS,
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
		dispatch(tagErrors(response.data));
	}
}

export async function thunkReceiveTags(errors: Errors, dispatch: Function) {
	try {
		const response = await axios.get("/api/tags/", { validateStatus });
		handleResponse(dispatch, response, receiveTags, errors);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkReceiveTag(id: number, errors: Errors, dispatch: Function) {
	try {
		const response = await axios.get(`/api/tags/${id}/`, { validateStatus });
		handleResponse(dispatch, response, receiveTag, errors);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkCreateTag(data: Tag, errors: Errors, dispatch: Function) {
	try {
		const response = await axios.post("/api/tags/", data, { validateStatus });
		handleResponse(dispatch, response, createTag, errors);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkUpdateTag(
	id: number,
	data: Partial<Tag>,
	errors: Errors,
	dispatch: Function,
) {
	try {
		const response = await axios.patch(`/api/tags/${id}/`, data, { validateStatus });
		handleResponse(dispatch, response, updateTag, errors);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkDeleteTag(id: number, dispatch: Function) {
	try {
		const response = await axios.delete(`/api/tags/${id}/`, { validateStatus });

		// Success
		if (response.status < 400) dispatch(deleteTag(id));
		// Failure
		else dispatch(tagErrors(response.data));
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}
