import * as ReactRedux from "react-redux";

import * as Types from "@/utils/types";
import { clearErrors } from "@/redux/actions/_clear_errors";

export function handleResponse(
	dispatch: Function,
	response: any,
	actionCreator: Function,
	errorActionCreator: Function,
	errors: Types.ActionCreatorErrors,
) {
	// Success
	if (response.status < 400) {
		dispatch(actionCreator(response.data));
		if (errors.length > 0) dispatch(clearErrors());
	}
	// Failure
	else {
		dispatch(errorActionCreator(response.data));
	}
}

// ====================================== //
// ↓↓↓ Fetching Data From Redux Store ↓↓↓ //
// ====================================== //

// --- Session Redux --- //

export function getSession() {
	return ReactRedux.useSelector((state: Types.ReduxState) => state.session);
}

export function getSessionErrors() {
	return ReactRedux.useSelector((state: Types.ReduxState) => state.errors.session);
}

// --- Users Redux --- //

export function getUsers() {
	return ReactRedux.useSelector((state: Types.ReduxState) => state.entities.users);
}

export function getUsersErrors() {
	return ReactRedux.useSelector((state: Types.ReduxState) => state.errors.users);
}

// --- Posts Redux --- //

export function getPosts() {
	return ReactRedux.useSelector((state: Types.ReduxState) => state.entities.posts);
}

export function getPostsErrors() {
	return ReactRedux.useSelector((state: Types.ReduxState) => state.errors.posts);
}

// --- Tags Redux --- //

export function getTags() {
	return ReactRedux.useSelector((state: Types.ReduxState) => state.entities.tags);
}

export function getTagsErrors() {
	return ReactRedux.useSelector((state: Types.ReduxState) => state.errors.tags);
}

// --- Ratings Redux --- //

export function getRatings() {
	return ReactRedux.useSelector((state: Types.ReduxState) => state.entities.ratings);
}

export function getRatingsErrors() {
	return ReactRedux.useSelector((state: Types.ReduxState) => state.errors.ratings);
}
