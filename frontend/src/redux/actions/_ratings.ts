import axios from "axios";

import * as Context from "@/context";
import * as AxiosHelpers from "@/utils/api/axios-helpers";
import * as Functions from "@/utils/functions";
import * as Types from "@/utils/types";

import { Post } from "@/redux/actions/_posts";

const validateStatus = AxiosHelpers.validateStatus;

export const GET_RATINGS = "GET_RATINGS";
export const GET_RATING = "GET_RATING";
export const CREATE_RATING = "CREATE_RATING";
export const UPDATE_RATING = "UPDATE_RATING";
export const DELETE_RATING = "DELETE_RATING";
export const RATING_ERRORS = "RATING_ERRORS";

export type Rating = {
	id: number;
	rating: number;
	owner: number;
	post: number;
};

type CreateData = {
	rating: number;
	owner: Context.AuthForm.CurrentUser;
	post: Post;
	// owner: number;
	// post: number;
};

// ======================= //
// ↓↓↓ Action Creators ↓↓↓ //
// ======================= //

function getRatings(ratings: Rating[]): Types.POJO {
	return {
		type: GET_RATINGS,
		ratings,
	};
}

function getRating(rating: Rating): Types.POJO {
	return {
		type: GET_RATING,
		rating,
	};
}

function createRating(rating: Rating): Types.POJO {
	return {
		type: CREATE_RATING,
		rating,
	};
}

function updateRating(rating: Rating): Types.POJO {
	return {
		type: UPDATE_RATING,
		rating,
	};
}

function deleteRating(id: number): Types.POJO {
	return {
		type: DELETE_RATING,
		id,
	};
}

function ratingErrors(errors: Types.ActionCreatorErrors): Types.POJO {
	return {
		type: RATING_ERRORS,
		errors,
	};
}

// ============================= //
// ↓↓↓ Thunk Action Creators ↓↓↓ //
// ============================= //

export async function thunkGetRatings(
	dispatch: Function,
	errors: Types.ActionCreatorErrors,
): Promise<void> {
	try {
		const response = await axios.get("/api/ratings", { validateStatus });
		Functions.handleResponse(dispatch, response, getRatings, ratingErrors, errors);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkGetRating(
	id: number,
	dispatch: Function,
	errors: Types.ActionCreatorErrors,
): Promise<void> {
	try {
		const response = await axios.get(`/api/ratings/${id}`, { validateStatus });
		Functions.handleResponse(dispatch, response, getRating, ratingErrors, errors);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkCreateRating(
	data: CreateData,
	dispatch: Function,
	errors: Types.ActionCreatorErrors,
): Promise<void> {
	try {
		const response = await axios.post("/api/ratings", data, { validateStatus });
		Functions.handleResponse(dispatch, response, createRating, ratingErrors, errors);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkUpdateRating(
	id: number,
	data: Partial<CreateData>,
	dispatch: Function,
	errors: Types.ActionCreatorErrors,
): Promise<void> {
	try {
		const response = await axios.patch(`/api/ratings/${id}`, data, { validateStatus });
		Functions.handleResponse(dispatch, response, updateRating, ratingErrors, errors);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkDeleteRating(id: number, dispatch: Function): Promise<void> {
	try {
		const response = await axios.delete(`/api/ratings/${id}`, { validateStatus });

		// Success
		if (response.status < 400) dispatch(deleteRating(id));
		// Failure
		else dispatch(ratingErrors(response.data));
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}
