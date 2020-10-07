import axios from "axios";

import * as AxiosHelpers from "@/utils/api/axios-helpers";

const validateStatus = AxiosHelpers.validateStatus;

async function handleResponse(endpoint: string) {
	try {
		const response = await axios.get(endpoint, { validateStatus });

		// Success
		if (response.status < 400) {
			return response.data;
			// console.log(response);
		}
		// Failure
		else {
			return response.data;
			// console.log(response);
		}
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export function getUserRatings(id: number) {
	return handleResponse(`/api/users/${id}/ratings/`);
}

export function getUserRating(userId: number, postId: number) {
	return handleResponse(`/api/users/${userId}/posts/${postId}/`);
}

export function getPostUserRatings(id: number) {
	return handleResponse(`/api/posts/${1}/ratings/`);
}

export function getPostAverageUserRatings(id: number) {
	return handleResponse(`/api/posts/${id}/average-ratings/`);
}

export function getPostTags(id: number) {
	return handleResponse(`/api/posts/${id}/tags/`);
}
