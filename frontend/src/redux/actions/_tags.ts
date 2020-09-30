import axios from "axios";

import * as Types from "@/utils/types";
import * as AxiosHelpers from "@/utils/api/axios-helpers";
import * as Functions from "@/utils/functions";

const validateStatus = AxiosHelpers.validateStatus;

export const GET_TAGS = "GET_TAGS";
export const GET_TAG = "GET_TAG";
export const CREATE_TAG = "CREATE_TAG";
export const UPDATE_TAG = "UPDATE_TAG";
export const DELETE_TAG = "DELETE_TAG";
export const TAG_ERRORS = "TAG_ERRORS";

export type Tag = {
	id: number;
	genre: string;
};

// ======================= //
// ↓↓↓ Action Creators ↓↓↓ //
// ======================= //

function getTags(tags: Tag[]): Types.POJO {
	return {
		type: GET_TAGS,
		tags,
	};
}

function getTag(tag: Tag): Types.POJO {
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

function tagErrors(errors: Types.ActionCreatorErrors): Types.POJO {
	return {
		type: TAG_ERRORS,
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
// 		dispatch(tagErrors(response.data));
// 	}
// }

export async function thunkGetTags(
	dispatch: Function,
	errors: Types.ActionCreatorErrors,
): Promise<void> {
	try {
		const response = await axios.get("/api/tags/", { validateStatus });
		Functions.handleResponse(dispatch, response, getTags, tagErrors, errors);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkGetTag(
	id: number,
	dispatch: Function,
	errors: Types.ActionCreatorErrors,
): Promise<void> {
	try {
		const response = await axios.get(`/api/tags/${id}/`, { validateStatus });
		Functions.handleResponse(dispatch, response, getTag, tagErrors, errors);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkCreateTag(
	data: Tag,
	dispatch: Function,
	errors: Types.ActionCreatorErrors,
): Promise<void> {
	try {
		const response = await axios.post("/api/tags/", data, { validateStatus });
		Functions.handleResponse(dispatch, response, createTag, tagErrors, errors);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkUpdateTag(
	id: number,
	data: Partial<Tag>,
	dispatch: Function,
	errors: Types.ActionCreatorErrors,
): Promise<void> {
	try {
		const response = await axios.patch(`/api/tags/${id}/`, data, { validateStatus });
		Functions.handleResponse(dispatch, response, updateTag, tagErrors, errors);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkDeleteTag(id: number, dispatch: Function): Promise<void> {
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
