export const CURRENT_USER = "CURRENT_USER";

type CurrentUser = {
	id: number;
	username: string;
	email: string;
	date_joined: string;
	last_login: string;
	first_name: string;
	last_name: string;
	profile_picture: string;
};

export function getCurrentUser(currentUser: CurrentUser) {
	return {
		type: CURRENT_USER,
		currentUser,
	};
}


