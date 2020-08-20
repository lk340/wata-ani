export type UsersType = "GET_USERS";
export const GET_USERS: UsersType = "GET_USERS";

export type CurrentUserType = "CURRENT_USER";
export const CURRENT_USER: CurrentUserType = "CURRENT_USER";

// Get all users
// Get current user
// Patch current user
// Delete Current User

export type CurrentUser = {
	id: number;
	username: string;
	email: string;
	date_joined: string;
	last_login: string;
	first_name: string;
	last_name: string;
	profile_picture: string;
} | null;

export function getUsers(users: CurrentUser[]) {
	return {
		type: GET_USERS,
		users,
	};
}

export function currentUser(currentUser: CurrentUser) {
	return {
		type: CURRENT_USER,
		currentUser,
	};
}
