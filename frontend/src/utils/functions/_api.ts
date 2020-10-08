import axios from "axios";

import * as AxiosHelpers from "@/utils/api/axios-helpers";

const validateStatus = AxiosHelpers.validateStatus;

async function handleResponse(
	endpoint: string,
	setter: any,
	errorSetter: any,
): Promise<void> {
	const response = await axios.get(endpoint, { validateStatus });

	// Success
	if (response.status < 400) setter(response.data);
	// Failure
	else errorSetter(response.data);
}

export function getUserRatings(id: number, setter: any, errorSetter: any) {
	return handleResponse(`/api/users/${id}/ratings/`, setter, errorSetter);
}

export function getUserRating(
	userId: number,
	postId: number,
	setter: any,
	errorSetter: any,
) {
	return handleResponse(`/api/users/${userId}/posts/${postId}/`, setter, errorSetter);
}

export function getPostUserRatings(id: number, setter: any, errorSetter: any) {
	return handleResponse(`/api/posts/${1}/ratings/`, setter, errorSetter);
}

export function getPostAverageUserRatings(id: number, setter: any, errorSetter: any) {
	return handleResponse(`/api/posts/${id}/average-ratings/`, setter, errorSetter);
}

export function getPostTags(id: number, setter: any, errorSetter: any) {
	return handleResponse(`/api/posts/${id}/tags/`, setter, errorSetter);
}
