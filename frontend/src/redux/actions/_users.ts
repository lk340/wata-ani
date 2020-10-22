import axios from "axios";

import * as Context from "@/context";
import * as Types from "@/utils/types";
import * as AxiosHelpers from "@/utils/api/axios-helpers";
import * as Functions from "@/utils/functions";

import { Post } from "../actions/_posts";

const validateStatus = AxiosHelpers.validateStatus;

export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";
export const USER_ERRORS = "USER_ERRORS";

type User = Context.AuthForm.CurrentUser;

type Users = User[];

// ======================= //
// ↓↓↓ Action Creators ↓↓↓ //
// ======================= //

function getUsers(users: Users): Types.POJO {
	return {
		type: GET_USERS,
		users,
	};
}

function getUser(user: User): Types.POJO {
	return {
		type: GET_USER,
		user,
	};
}

function updateUser(user: Partial<User>): Types.POJO {
	return {
		type: UPDATE_USER,
		user,
	};
}

function deleteUser(id: number): Types.POJO {
	return {
		type: DELETE_USER,
		id,
	};
}

function userErrors(errors: Types.ActionCreatorErrors): Types.POJO {
	return {
		type: USER_ERRORS,
		errors,
	};
}

// ============================= //
// ↓↓↓ Thunk Action Creators ↓↓↓ //
// ============================= //

export async function thunkGetUsers(
	dispatch: Function,
	errors: Types.ActionCreatorErrors,
): Promise<void> {
	try {
		const response = await axios.get("/api/users/", { validateStatus });
		Functions.handleResponse(dispatch, response, getUsers, userErrors, errors);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkGetUser(
	id: number,
	dispatch: Function,
	errors: Types.ActionCreatorErrors,
): Promise<void> {
	try {
		const response = await axios.get(`/api/users/${id}/`, { validateStatus });
		Functions.handleResponse(dispatch, response, getUser, userErrors, errors);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkUpdateUser(
	id: number,
	data: Partial<User>,
	dispatch: Function,
	errors: Types.ActionCreatorErrors,
): Promise<void> {
	try {
		const response = await axios.patch(`/api/users/${id}/`, data, { validateStatus });
		Functions.handleResponse(dispatch, response, updateUser, userErrors, errors);
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function thunkDeleteUser(id: number, dispatch: Function): Promise<void> {
	try {
		const response = await axios.delete(`/api/users/${id}/`, { validateStatus });
		// console.log(response.data);

		// Success
		if (response.status < 400) dispatch(deleteUser(id));
		else dispatch(userErrors(response.data));
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}
