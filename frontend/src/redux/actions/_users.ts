import * as Context from "@/context";
import * as Types from "@/utils/types";

export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";

type User = Context.AuthForm.CurrentUser;
type Users = User[];

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
