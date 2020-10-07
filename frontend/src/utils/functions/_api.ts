import axios from "axios";

import * as AxiosHelpers from "@/utils/api/axios-helpers";

const validateStatus = AxiosHelpers.validateStatus;

export async function getUserRatings(id: number): Promise<void> {
	try {
		const response = await axios.get(`/api/users/${id}/ratings/`);

		// Success
		if (response.status < 400) {
			// return response.data;
			console.log(response);
		}
		// Failure
		else {
			console.log(response);
		}
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function getPostRatings(id: number): Promise<void> {
	try {
		const response = await axios.get(`/api/posts/${1}/ratings/`, { validateStatus });

		// Success
		if (response.status < 400) {
			// return response.data;
			console.log(response);
		}
		// Failure
		else {
			console.log(response);
		}
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}

export async function getPostTags(id: number): Promise<void> {
	try {
		const response = await axios.get(`/api/posts/${id}/tags/`, { validateStatus });

		// Success
		if (response.status < 400) {
			// return response.data;
			console.log(response);
		}
		// Failure
		else {
			console.log(response);
		}
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}
